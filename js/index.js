// Open-close modal-menu

const modalOpen = document.querySelector('.menu-open-button');
const modalClose = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal');

    modalOpen.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.toggle('open');
    })
    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.toggle('open');
    })

const modalCloseFromMenu = document.querySelectorAll('.modal-nav .nav-link');
modalCloseFromMenu.forEach((link) => {
    link.addEventListener('click', (e) => {
    modal.classList.toggle('open');
})

}) 

/


// Portfolio section



fetch('projects.json') 
    .then(res => res.json())
    .then(data => {
        const projectsGallery = document.querySelector('.portfolio-list');
        data.projects.forEach(project => {
        projectsGallery.innerHTML += `
         <li class="portfolio-item">
            <a href="${project.url}" class="portfolio-link" target="_blank">
                <img src="${project.img}" alt="Web Page of Photography School" class="portfolio-img" width="230">
                <h3 class="portfolio-item-title">${project.name}</h3>
            </a>
            <p class="portfolio-item-description">${project.desc}</p>
        </li>
        `
       })
    })