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

const currentUrl = window.location.href;
const formData = new URLSearchParams(window.location.search);

const resultsElement = document.getElementById('results');

if (formData) {
  resultsElement.innerHTML = `
    <p><strong>First Name:</strong> ${formData.get('fname')}</p>
    <p><strong>Last Name:</strong> ${formData.get('lname')}</p>
    <p><strong>Email:</strong> ${formData.get('email')}</p>
    <p><strong>Mobile Phone:</strong> ${formData.get('phone')}</p>
    <p><strong>Organization Name:</strong> ${formData.get('organization')}</p>
    <p><strong>Submitted Date:</strong> ${formData.get('timestamp')}</p>
  `;
}