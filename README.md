## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions
---

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- `getElementById`: Selects a single DOM element by its unique `id`. It returns the element or `null` if no matching element exists.
- `getElementsByClassName`: Returns a live `HTMLCollection` of all elements with the specified class. The collection updates automatically if matching elements are added or removed from the DOM.
- `querySelector`: Accepts any CSS selector and returns the first matching element in the document (or `null` if none found).
- `querySelectorAll`: Accepts any CSS selector and returns a static `NodeList` of all matches. The returned list does not update automatically when the DOM changes.

### 2. How do you create and insert a new element into the DOM?

1. Creation: Use `document.createElement('tagName')` to create a new element node in memory.
2. Configuration: Set its properties, e.g., `element.textContent = 'Text'`, `element.classList.add('my-class')`, or `element.setAttribute('href', '#')`.
3. Insertion: Attach it to an existing parent using methods such as `parent.appendChild(element)`, `parent.prepend(element)`, or `parent.insertBefore(element, referenceNode)`.

### 3. What is Event Bubbling? And how does it work?

Event bubbling is a phase of DOM event propagation in which an event originates at the target element and then propagates upward through its ancestor elements. When an event (for example, a `click`) occurs on an element, the browser first invokes handlers on the target element and then invokes handlers on each parent element in sequence, up to the `document` root, unless propagation is explicitly stopped.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a pattern that leverages event bubbling by attaching a single event listener to a common ancestor (for example, a `ul`) instead of many listeners on individual child elements (for example, `li` items). When a child triggers the event, the listener on the parent catches it and uses `event.target` to determine which child initiated the event.

Benefits:
- Performance: Reduces memory and setup cost by using one listener rather than many.
- Works with dynamic content: New child elements added later are automatically covered by the parent's listener without extra binding.

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

- `preventDefault()`: Prevents the browser's default action for the event (for example, stopping an `<a>` from navigating or a `<form>` from submitting and reloading the page).
- `stopPropagation()`: Stops the event from continuing to bubble up the DOM tree, preventing ancestor elements from receiving the same event.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
