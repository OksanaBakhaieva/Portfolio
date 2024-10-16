const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('.nav-link');
const modal = document.querySelector('.modal');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.toggle('open');
    })
})

links.forEach(link =>{
    link.addEventListener('click', (e) =>{
        e.preventDefault()
        modal.classList.toggle('open');
    })
})
