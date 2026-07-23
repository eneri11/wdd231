const modal = document.querySelector("#infoModal");
const openBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeModal");

openBtn.addEventListener("click", () => {
  modal.showModal(); // Opens modal + backdrop
});

closeBtn.addEventListener("click", () => {
  modal.close(); // Closes modal
});