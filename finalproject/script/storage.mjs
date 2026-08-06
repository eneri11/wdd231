// LocalStorage user preference persistence
export function initLocalStorage() {
  // Track visit count
  const visitKey = 'akyat_tanaw_visits';
  let visits = parseInt(localStorage.getItem(visitKey) || '0', 10);
  visits += 1;
  localStorage.setItem(visitKey, visits.toString());

  const visitDisplay = document.querySelector('#visit-count');
  if (visitDisplay) {
    visitDisplay.textContent = visits === 1 
      ? "Welcome to Akyat-Tanaw! This is your 1st visit." 
      : `Welcome back! You have visited this site ${visits} times.`;
  }
}

document.addEventListener('DOMContentLoaded', initLocalStorage);