// ========================================================
// Episode 12: DOM Events & Event Handling Explained
// ========================================================

const textInput = document.querySelector("#text-input");
const previewText = document.querySelector("#preview-text");
const userForm = document.querySelector("#user-form");
const itemsList = document.querySelector("#items-list");
const logBox = document.querySelector("#log-output");

function logEvent(msg) {
    const timestamp = new Date().toLocaleTimeString();
    logBox.textContent = `[${timestamp}] ${msg}`;
}

// 1. Input Event (Live typing preview)
textInput.addEventListener("input", (e) => {
    previewText.textContent = e.target.value || "(empty)";
    logEvent(`Typing event: Length = ${e.target.value.length}`);
});

// 2. Form Submit Event (Prevent default reload)
userForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Crucial: stops browser from submitting/reloading!
    
    const value = textInput.value.trim();
    if (!value) {
        alert("Please enter a valid item!");
        return;
    }
    
    // Create new list item
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${value}</span>
        <button class="delete-btn">Delete</button>
    `;
    itemsList.appendChild(li);
    
    logEvent(`Added item: "${value}"`);
    textInput.value = "";
    previewText.textContent = "(empty)";
});

// 3. Event Delegation Pattern (Best practice for dynamic lists)
// Instead of adding listeners to every single delete button,
// we attach ONE listener to the parent container:
itemsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const itemToRemove = e.target.closest("li");
        const itemText = itemToRemove.querySelector("span").textContent;
        itemToRemove.remove();
        logEvent(`Deleted item via Event Delegation: "${itemText}"`);
    }
});

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Add a 'keydown' event listener to textInput:
//    textInput.addEventListener("keydown", (e) => console.log("Key pressed:", e.key));
// 2. Add an edit button inside each list item that lets the user prompt() to rename the item.
// ========================================================

