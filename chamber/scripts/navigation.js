// ============================================
// Mobile Navigation Menu
// ============================================

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close Navigation");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open Navigation");
    }
});