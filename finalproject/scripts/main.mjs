// Wayfinding & Responsive Hamburger Menu
export function initNavigation() {
  const menuButton = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#primary-nav');

  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuButton.setAttribute(
        'aria-expanded',
        navMenu.classList.contains('open')
      );
    });
  }

  // Wayfinding logic: highlight active nav link based on current page URL
  const navLinks = document.querySelectorAll('#primary-nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initNavigation);