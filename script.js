// Data matching the styling of your screenshot
let jobsData = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "none" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "none" },
    { id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex datasets into interactive and visually appealing dashboards using D3.js and modern JS frameworks.", status: "none" },
    { id: 4, companyName: "CloudNet Systems", position: "DevOps Engineer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Manage automated CI/CD pipelines, container orchestration, and ensure reliable cloud infrastructure uptime.", status: "none" },
    { id: 5, companyName: "FinTech Innovations", position: "Backend API Developer", location: "New York, NY", type: "Contract", salary: "$110,000 - $150,000", description: "Design and maintain secure, scalable microservices and database architectures for enterprise financial clients.", status: "none" },
    { id: 6, companyName: "Streamline Media", position: "UI/UX Product Designer", location: "Austin, TX", type: "Full-time", salary: "$115,000 - $160,000", description: "Design intuitive user journeys, wireframes, and high-fidelity prototypes for next-generation streaming platforms.", status: "none" },
    { id: 7, companyName: "CyberShield Security", position: "QA Automation Engineer", location: "Remote", type: "Full-time", salary: "$95,000 - $135,000", description: "Develop robust automated testing frameworks to ensure high-quality and bug-free software releases.", status: "none" },
    { id: 8, companyName: "AI Pioneers", position: "Machine Learning Engineer", location: "San Francisco, CA", type: "Full-time", salary: "$160,000 - $220,000", description: "Train and optimize deep learning models for natural language processing and implement them into production environments.", status: "none" }
];

let currentTab = 'all';

// DOM Elements
const jobsGrid = document.getElementById('jobs-grid');
const emptyState = document.getElementById('empty-state');
const tabButtons = document.querySelectorAll('.tab-btn');
const sectionCount = document.getElementById('section-count');
const dashTotal = document.getElementById('dash-total');
const dashInterview = document.getElementById('dash-interview');
const dashRejected = document.getElementById('dash-rejected');

function init() {
    renderJobs();
    updateDashboardCounters();
    setupEventListeners();
}

function renderJobs() {
    jobsGrid.innerHTML = '';

    // Filter jobs
    const filteredJobs = jobsData.filter(job => {
        if (currentTab === 'all') return true;
        return job.status === currentTab;
    });

    sectionCount.innerText = filteredJobs.length;

    // Toggle Empty State
    if (filteredJobs.length === 0) {
        jobsGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        jobsGrid.classList.remove('hidden');
        
        filteredJobs.forEach(job => {
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col";
            
            const isInterview = job.status === 'interview';
            const isRejected = job.status === 'rejected';

            // Determine Status Badge Content and Styles
            let badgeText = "NOT APPLIED";
            let badgeStyle = "bg-[#edf2f9] text-[#2c5282]"; // Default blueish
            if(isInterview) {
                badgeText = "IN INTERVIEW";
                badgeStyle = "bg-green-100 text-green-800";
            } else if (isRejected) {
                badgeText = "REJECTED";
                badgeStyle = "bg-red-100 text-red-800";
            }

            card.innerHTML = `
                <div class="flex justify-between items-start mb-1">
                    <div>
                        <h3 class="text-[1.15rem] font-bold text-[#0f172a]">${job.companyName}</h3>
                        <p class="text-gray-500 mt-1">${job.position}</p>
                    </div>
                    <button data-action="delete" data-id="${job.id}" class="text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors w-9 h-9 rounded-full border flex items-center justify-center">
                        <i class="fa-regular fa-trash-can pointer-events-none"></i>
                    </button>
                </div>

                <div class="text-gray-500 text-sm mt-3 mb-4">
                    ${job.location} &bull; ${job.type} &bull; ${job.salary}
                </div>

                <div class="mb-4">
                    <span class="inline-block px-3 py-1 rounded text-xs font-bold tracking-wide uppercase ${badgeStyle}">
                        ${badgeText}
                    </span>
                </div>

                <p class="text-gray-600 text-sm mb-6 max-w-4xl leading-relaxed">
                    ${job.description}
                </p>

                <div class="flex gap-3 mt-auto">
                    <button data-action="interview" data-id="${job.id}" class="px-5 py-2 text-sm font-bold tracking-wide rounded transition-colors ${isInterview ? 'bg-[#22c55e] text-white border border-[#22c55e]' : 'text-[#22c55e] border border-[#22c55e] hover:bg-green-50'}">
                        INTERVIEW
                    </button>
                    <button data-action="reject" data-id="${job.id}" class="px-5 py-2 text-sm font-bold tracking-wide rounded transition-colors ${isRejected ? 'bg-[#ef4444] text-white border border-[#ef4444]' : 'text-[#ef4444] border border-[#ef4444] hover:bg-red-50'}">
                        REJECTED
                    </button>
                </div>
            `;
            jobsGrid.appendChild(card);
        });
    }
}

function updateDashboardCounters() {
    dashTotal.innerText = jobsData.length;
    dashInterview.innerText = jobsData.filter(j => j.status === 'interview').length;
    dashRejected.innerText = jobsData.filter(j => j.status === 'rejected').length;
}

function setupEventListeners() {
    // Tab Switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Reset all tabs to inactive state
            tabButtons.forEach(b => {
                b.className = "tab-btn bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 px-6 py-2 rounded font-medium text-sm transition-colors shadow-sm";
            });
            
            // Set clicked tab to active state
            const clickedBtn = e.target;
            clickedBtn.className = "tab-btn active bg-[#4285f4] text-white px-6 py-2 rounded font-medium text-sm transition-colors shadow-sm";

            currentTab = clickedBtn.getAttribute('data-tab');
            renderJobs();
        });
    });

    // Delegation for Cards
    jobsGrid.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return; 

        const action = button.getAttribute('data-action');
        const jobId = parseInt(button.getAttribute('data-id'));

        if (action === 'delete') {
            jobsData = jobsData.filter(job => job.id !== jobId);
            renderJobs();
            updateDashboardCounters();
        } else if (action === 'interview') {
            handleStatusChange(jobId, 'interview');
        } else if (action === 'reject') {
            handleStatusChange(jobId, 'rejected');
        }
    });
}

function handleStatusChange(id, newStatus) {
    const jobIndex = jobsData.findIndex(j => j.id === id);
    
    // Toggle behavior: clicking 'Interview' while already in 'interview' status unselects it
    if(jobsData[jobIndex].status === newStatus) {
         jobsData[jobIndex].status = 'none';
    } else {
         jobsData[jobIndex].status = newStatus;
    }

    renderJobs();
    updateDashboardCounters();
}

document.addEventListener('DOMContentLoaded', init);