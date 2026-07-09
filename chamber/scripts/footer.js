// ============================================
// Footer Information
// ============================================

// Current Year
const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();

// Last Modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;