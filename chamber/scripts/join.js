// Automatically populate the hidden timestamp field on page load
document.getElementById('timestamp').value = new Date().toISOString();

// Modal functionality example
const openNp = document.getElementById('open-np');
const modalNp = document.getElementById('modal-np');

openNp.addEventListener('click', () => modalNp.showModal());

// Event listener to close dialogs
document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.closest('dialog').close();
  });
});