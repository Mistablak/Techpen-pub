const navbar = document.querySelector('.header #nav-bar');
const menuBtn = document.querySelector('.header .menu');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuBtn.classList.toggle('fa-close');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuBtn.classList.remove('fa-close');
};

document.addEventListener('click', (event) => {
  const isClickInsideMenu = navbar.contains(event.target);
  const isClickInsideMenuBtn = menuBtn.contains(event.target);
  if (!isClickInsideMenu && !isClickInsideMenuBtn) {
    navbar.classList.remove('show');
    menuBtn.classList.remove('fa-close');
  }
});