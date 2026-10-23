// ============================================================================
// Episode 11: DOM Manipulation Fundamentals
// Python/Django Bridge:
//   1. Django {{ variable }}        -> element.textContent = value (XSS-safe!)
//   2. Django {% if is_featured %}  -> element.classList.toggle("highlight")
//   3. Django {% for s in skills %} -> <template> + DocumentFragment (Single reflow!)
// ============================================================================

const title = document.querySelector("#main-title");
const paragraph = document.querySelector("#desc-text");
const skillsList = document.querySelector("#skills-list");
const skillTemplate = document.querySelector("#skill-row-template");
const skillCounter = document.querySelector("#skill-counter");
const domLog = document.querySelector("#dom-log");

const btnChangeText = document.querySelector("#btn-change-text");
const btnToggleClass = document.querySelector("#btn-toggle-class");
const btnAddItem = document.querySelector("#btn-add-item");
const btnBatchRender = document.querySelector("#btn-batch-render");
const btnClear = document.querySelector("#btn-clear");

const INITIAL_SKILLS = [
    { name: "Python 3 & Asyncio", category: "Backend" },
    { name: "Django & DRF Serializers", category: "API Layer" },
    { name: "Frontend JS DOM & Fetch", category: "Client UI" }
];

function logDomAction(message) {
    const time = new Date().toLocaleTimeString();
    const row = document.createElement("div");
    row.textContent = `[${time}] ${message}`;
    domLog.prepend(row);
    console.log(message);
}

function updateCounter() {
    const count = skillsList.children.length;
    skillCounter.textContent = `${count} skill${count === 1 ? "" : "s"}`;
}

/**
 * Clones the <template id="skill-row-template"> and populates it safely with .textContent
 */
function createSkillElement({ name, category }) {
    const clone = skillTemplate.content.cloneNode(true);
    clone.querySelector(".skill-name").textContent = name;
    clone.querySelector(".skill-category").textContent = category;
    return clone;
}

/**
 * Batch renders an array of skill objects using an off-screen DocumentFragment
 * (Triggers only 1 browser layout reflow instead of N reflows!)
 */
function renderSkillsBatch(skillsArray) {
    const fragment = document.createDocumentFragment();
    skillsArray.forEach(skill => {
        fragment.appendChild(createSkillElement(skill));
    });
    skillsList.appendChild(fragment);
    updateCounter();
}

// 1. Modifying Text Content (Replaces Django {{ variable }})
btnChangeText.addEventListener("click", () => {
    paragraph.textContent =
        "Updated via element.textContent! Unlike innerHTML, textContent automatically escapes HTML tags to prevent XSS.";
    paragraph.style.color = "#38bdf8";
    logDomAction("Updated #desc-text via .textContent (XSS-safe).");
});

// 2. ClassList Manipulation (Replaces Django {% if condition %})
btnToggleClass.addEventListener("click", () => {
    const isActive = title.classList.toggle("highlight");
    logDomAction(`Toggled .highlight class on #main-title -> active=${isActive}`);
});

// 3. Cloning a Single <template> Row
btnAddItem.addEventListener("click", () => {
    const index = skillsList.children.length + 1;
    const skill = {
        name: `Dynamic ES6+ Module #${index}`,
        category: "Frontend JS"
    };
    skillsList.appendChild(createSkillElement(skill));
    updateCounter();
    logDomAction(`Cloned <template> and appended "${skill.name}".`);
});

// 4. Batch Rendering with DocumentFragment (Replaces {% for item in items %})
btnBatchRender.addEventListener("click", () => {
    const batch = [
        { name: "PostgreSQL Query Optimization", category: "Database" },
        { name: "HTML5 <template> & DocumentFragment", category: "DOM Architecture" },
        { name: "Fetch API + X-CSRFToken", category: "Security" }
    ];
    renderSkillsBatch(batch);
    logDomAction(`Batch-inserted ${batch.length} skills in a single DocumentFragment reflow!`);
});

// 5. Clearing DOM Container Cleanly with replaceChildren()
btnClear.addEventListener("click", () => {
    skillsList.replaceChildren();
    updateCounter();
    logDomAction("Cleared #skills-list via .replaceChildren().");
});

// Initial render
renderSkillsBatch(INITIAL_SKILLS);
logDomAction("Initialized Episode 11 DOM Playground with 3 default skills.");
