const menuBar = () => {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');

menu.style.display = 'none';

let slideMenu = () => {
    menu.style.display == 'none' ? menu.style.display = 'flex' : menu.style.display = 'none';
};

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    slideMenu();
});
};

menuBar();