// ============================================================================
// Episode 12: DOM Events, Debouncing & Event Delegation
// Security & Architecture Highlights:
//   1. ZERO XSS: Uses <template> + .textContent instead of unsafe innerHTML!
//   2. Debounce: Delays expensive API/filter calls until 300ms after typing stops.
//   3. Event Delegation: ONE click listener on #items-list handles all child
//      Rename & Delete buttons via e.target.closest().
// ============================================================================

const textInput = document.querySelector("#text-input");
const previewText = document.querySelector("#preview-text");
const debouncedPreview = document.querySelector("#debounced-preview");
const userForm = document.querySelector("#user-form");
const itemsList = document.querySelector("#items-list");
const itemTemplate = document.querySelector("#item-row-template");
const itemsCount = document.querySelector("#items-count");
const logBox = document.querySelector("#log-output");

function logEvent(msg) {
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement("div");
    entry.textContent = `[${timestamp}] ${msg}`;
    logBox.prepend(entry);
    console.log(msg);
}

function debounce(fn, delayMs = 300) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delayMs);
    };
}

function updateItemCount() {
    const total = itemsList.children.length;
    itemsCount.textContent = `${total} item${total === 1 ? "" : "s"}`;
}

/**
 * Safely creates a list item by cloning <template> and assigning .textContent
 * (Prevents XSS injection if user submits `<img src=x onerror=alert(1)>`)
 */
function appendSafeItem(text) {
    const clone = itemTemplate.content.cloneNode(true);
    clone.querySelector(".item-label").textContent = text;
    itemsList.appendChild(clone);
    updateItemCount();
}

// 1A. Instant Input Event (fires on every keystroke)
textInput.addEventListener("input", (e) => {
    const val = e.target.value;
    previewText.textContent = val || "(empty)";
    logEvent(`Keystroke input event -> length=${val.length}`);
});

// 1B. Debounced Input Event (fires only 300ms after user stops typing)
const handleDebouncedSearch = debounce((value) => {
    debouncedPreview.textContent = value ? `Querying API for "${value}"...` : "(waiting...)";
    logEvent(`⚡ Debounced callback fired (300ms quiet window) -> "${value}"`);
}, 300);

textInput.addEventListener("input", (e) => handleDebouncedSearch(e.target.value.trim()));

// 1C. Keyboard Shortcut: Press Escape to clear input
textInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        textInput.value = "";
        previewText.textContent = "(empty)";
        debouncedPreview.textContent = "(waiting...)";
        logEvent("Pressed Escape -> input cleared.");
    }
});

// 2. Form Submit Event (Prevent full-page reload)
userForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stops browser from reloading the page!

    const value = textInput.value.trim();
    if (!value) {
        logEvent("⚠️ Blocked empty form submission.");
        return;
    }

    appendSafeItem(value);
    logEvent(`Added XSS-safe item via <template>: "${value}"`);

    textInput.value = "";
    previewText.textContent = "(empty)";
    debouncedPreview.textContent = "(waiting...)";
    textInput.focus();
});

// 3. Event Delegation Pattern (Single listener on #items-list)
itemsList.addEventListener("click", (e) => {
    const row = e.target.closest(".item-row");
    if (!row) return;
    const labelEl = row.querySelector(".item-label");

    // Handle Delete button click
    if (e.target.closest(".delete-btn")) {
        const removedText = labelEl.textContent;
        row.remove();
        updateItemCount();
        logEvent(`🗑️ Deleted via Event Delegation: "${removedText}"`);
        return;
    }

    // Handle Rename button click
    if (e.target.closest(".edit-btn")) {
        const currentText = labelEl.textContent;
        const updated = prompt("Rename item:", currentText);
        if (updated && updated.trim()) {
            labelEl.textContent = updated.trim();
            logEvent(`✏️ Renamed "${currentText}" -> "${updated.trim()}"`);
        }
    }
});

// Seed initial items
["Django REST Framework API Client", "Event Delegation with e.target.closest()"].forEach(appendSafeItem);
logEvent("Episode 12 ready. Try typing or submitting `<script>alert(1)</script>` to verify XSS protection!");
