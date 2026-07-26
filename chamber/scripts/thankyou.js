// Extract URL query parameters from form submission
const currentUrl = window.location.href;
const formData = new URLSearchParams(window.location.search);

const resultsElement = document.getElementById('results');

if (resultsElement && formData) {
  resultsElement.innerHTML = `
    <p><strong>First Name:</strong> ${formData.get('fname') || ''}</p>
    <p><strong>Last Name:</strong> ${formData.get('lname') || ''}</p>
    <p><strong>Email:</strong> ${formData.get('email') || ''}</p>
    <p><strong>Mobile Phone:</strong> ${formData.get('phone') || ''}</p>
    <p><strong>Organization Name:</strong> ${formData.get('organization') || ''}</p>
    <p><strong>Submitted Date:</strong> ${formData.get('timestamp') || ''}</p>
  `;
}