const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.querySelector('nav');
const msg = document.querySelector('.msg');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

nav.addEventListener('click', () => {
    msg.classList.add('clicked-link');
    setTimeout(() => {
        msg.classList.remove('clicked-link');
    }, 1500)
});