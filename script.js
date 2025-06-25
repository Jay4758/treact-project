document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

document.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  if (document.body.classList.contains('menu--open') && !modal.contains(e.target) && !e.target.closest('.btn__menu')) {
    closeMenu();
  }
});

