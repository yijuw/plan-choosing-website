const backdrop = document.querySelector('.backdrop');
// backdrop.style.display = 'block';
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav')


for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block'
        // modal.className= 'open' this will overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}


backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
})

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal)
}


function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open')
})


