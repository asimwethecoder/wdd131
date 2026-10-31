// Current year for the copyright notice
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();

// Date and time the document was last modified
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
