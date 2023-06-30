const btnOpenInvitation = document.querySelector('.btn-open-invitation');
const navlink = document.querySelector('.navlink');
const container = document.querySelector('.container');
btnOpenInvitation.addEventListener('click', () => {
    document.querySelector('.hero-image').classList.add('close-page');
    navlink.classList.remove('hide-content');
    container.classList.remove('hide-content');
});