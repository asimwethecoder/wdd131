// Current year for the copyright notice
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Date and time the document was last modified
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Start the fade-from-black animation only once each lazy image has loaded
document.querySelectorAll("main img").forEach(img => {
    if (img.complete) {
        img.classList.add("loaded");
    } else {
        img.addEventListener("load", () => img.classList.add("loaded"));
    }
});
