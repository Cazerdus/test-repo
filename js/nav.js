function initNav() {
  const hamburger = document.querySelector('.nav-bar__hamburger');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-overlay__close');

  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    overlay.classList.toggle('mobile-nav-overlay--open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('mobile-nav-overlay--open');
    });
  }

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('mobile-nav-overlay--open');
    });
  });
}

document.addEventListener('DOMContentLoaded', initNav);
