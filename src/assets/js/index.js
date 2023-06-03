const load = document.querySelector('.loader');

window.addEventListener('load', () => {
    load.style.display = 'none';
    AOS.init();
});
