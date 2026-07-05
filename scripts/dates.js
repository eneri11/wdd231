// ============================================
// Footer Dates
// WDD131
// ============================================

const year = document.querySelector("#currentyear");

year.textContent = new Date().getFullYear();

const modified = document.querySelector("#lastModified");

modified.textContent = `Last Modification: ${document.lastModified}`;
