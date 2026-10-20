// ========================================================
// Episode 11: DOM Manipulation Fundamentals
// ========================================================

// 1. Selecting Elements
const title = document.querySelector("#main-title");
const paragraph = document.querySelector("#desc-text");
const skillsList = document.querySelector("#skills-list");

const btnChangeText = document.querySelector("#btn-change-text");
const btnToggleClass = document.querySelector("#btn-toggle-class");
const btnAddItem = document.querySelector("#btn-add-item");

// 2. Modifying Text Content
btnChangeText.addEventListener("click", () => {
    paragraph.textContent = "Text dynamically updated with JavaScript DOM API!";
    paragraph.style.color = "#a78bfa";
    console.log("Text and style updated.");
});

// 3. ClassList Manipulation (Add / Remove / Toggle)
btnToggleClass.addEventListener("click", () => {
    title.classList.toggle("highlight");
    console.log("Toggled .highlight class. Active:", title.classList.contains("highlight"));
});

// 4. Creating and Appending New DOM Elements
btnAddItem.addEventListener("click", () => {
    const newItem = document.createElement("li");
    const skillCount = skillsList.children.length + 1;
    newItem.textContent = `New Skill Item #${skillCount}`;
    newItem.style.color = "#34d399";
    
    skillsList.appendChild(newItem);
    console.log("Appended new child item:", newItem.textContent);
});

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Add a new button in index.html with id="btn-clear".
// 2. Add an event listener to clear all skills in the list:
//    skillsList.innerHTML = "";
// 3. Try changing the document background dynamically with:
//    document.body.style.backgroundColor = "#020617";
// ========================================================

