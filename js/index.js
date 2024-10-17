// Open-close modal-menu

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


// Portfolio section



fetch('projects.json') 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        const projectsGallery = document.querySelector('.portfolio-list');
        data.projects.forEach(project => {
            console.log(project);

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