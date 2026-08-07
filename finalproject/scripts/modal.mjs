export function initModal(trails) {
  const dialog = document.querySelector('#trail-dialog');
  const dialogContent = document.querySelector('#dialog-details');
  const closeBtn = document.querySelector('#dialog-close');

  if (!dialog || !dialogContent) return;

  // Listen for clicks on dynamically created "View Details" buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
      const trailId = parseInt(e.target.getAttribute('data-id'), 10);
      const selectedTrail = trails.find(t => t.id === trailId);

      if (selectedTrail) {
        dialogContent.innerHTML = `
          <h2>${selectedTrail.name}</h2>
          <img src="${selectedTrail.image}" alt="${selectedTrail.name}" width="400" height="250">
          <p><strong>Location:</strong> ${selectedTrail.location}</p>
          <p><strong>Elevation:</strong> ${selectedTrail.elevation}</p>
          <p><strong>Difficulty:</strong> ${selectedTrail.difficulty}</p>
          <p>${selectedTrail.description}</p>
        `;
        dialog.showModal();
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }
}