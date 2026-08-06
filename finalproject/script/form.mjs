// Extract URL Parameters on join.html
export function displayFormData() {
  const formDataContainer = document.querySelector('#form-results');
  if (!formDataContainer) return;

  const params = new URLSearchParams(window.location.search);
  if ([...params].length === 0) {
    formDataContainer.innerHTML = '<p>No form submission data found.</p>';
    return;
  }

  let html = '<ul>';
  params.forEach((value, key) => {
    html += `<li><strong>${key.replace('_', ' ')}:</strong> ${decodeURIComponent(value)}</li>`;
  });
  html += '</ul>';

  formDataContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', displayFormData);