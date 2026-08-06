// Fetch local JSON with try...catch error handling
export async function getTrailData() {
  const url = 'data/trails.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load trail data:', error);
    const container = document.querySelector('#trail-cards');
    if (container) {
      container.innerHTML = `<p class="error">Unable to load trails at this time. Please try again later.</p>`;
    }
    return [];
  }
}

// Render trails dynamically using Template Literals & Array Methods
export function displayTrails(trails, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = ''; // Clear previous content

  // Using forEach array method & template literals for DOM manipulation
  trails.forEach(trail => {
    const card = document.createElement('article');
    card.className = 'trail-card';
    card.innerHTML = `
      <img src="${trail.image}" alt="${trail.name}" loading="lazy" width="300" height="200">
      <h3>${trail.name}</h3>
      <p class="location"><strong>Location:</strong> ${trail.location}</p>
      <p class="difficulty"><strong>Difficulty:</strong> <span class="badge ${trail.difficulty.toLowerCase()}">${trail.difficulty}</span></p>
      <p class="elevation"><strong>Elevation:</strong> ${trail.elevation}</p>
      <button class="details-btn" data-id="${trail.id}">View Details</button>
    `;
    container.appendChild(card);
  });
}

// Filter trail data using Array .filter()
export function setupFilters(allTrails) {
  const filterSelect = document.querySelector('#difficulty-filter');
  if (!filterSelect) return;

  filterSelect.addEventListener('change', (e) => {
    const selected = e.target.value;
    if (selected === 'all') {
      displayTrails(allTrails, '#trail-cards');
    } else {
      const filtered = allTrails.filter(trail => 
        trail.difficulty.toLowerCase().includes(selected.toLowerCase())
      );
      displayTrails(filtered, '#trail-cards');
    }
  });
}