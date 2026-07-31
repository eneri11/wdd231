// scripts/discover.js
import { places } from '../data/places.mjs';

document.addEventListener('DOMContentLoaded', () => {
  displayPlaces(places);
  handleLastVisit();
});

// Render the 8 Cards
function displayPlaces(items) {
  const grid = document.querySelector('.discover-grid');
  grid.innerHTML = '';

  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.classList.add('card', `card-${index + 1}`);

    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button type="button">Learn More</button>
    `;

    grid.appendChild(card);
  });
}

// Handle localStorage Visit Counter Logic
function handleLastVisit() {
  const messageElement = document.querySelector('#visit-message');
  const lastVisit = localStorage.getItem('lastVisitDate');
  const now = Date.now();

  const msInDay = 86400000; // Milliseconds in one day (1000 * 60 * 60 * 24)

  if (!lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const timeDiff = now - parseInt(lastVisit, 10);

    if (timeDiff < msInDay) {
      messageElement.textContent = "Back so soon! Awesome!";
    } else {
      const daysBetween = Math.floor(timeDiff / msInDay);
      if (daysBetween === 1) {
        messageElement.textContent = "You last visited 1 day ago.";
      } else {
        messageElement.textContent = `You last visited ${daysBetween} days ago.`;
      }
    }
  }

  // Store current timestamp for the next visit
  localStorage.setItem('lastVisitDate', now.toString());
}
