const arrProject = [
    {
        heading: "Multi-Post Stories 1",
        image: "background/Img Placeholder.png",
        alternative: "Project 1",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["html", "css", "ruby", "bootstrap"],
    },
    {
        heading: "Multi-Post Stories 2",
        image: "background/Img Placeholder.png",
        alternative: "Project 2",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["html", "css", "ruby", "bootstrap"],
    },
    {
        heading: "Multi-Post Stories 3",
        image: "background/Img Placeholder.png",
        alternative: "Project 3",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["html", "css", "ruby", "bootstrap"],
    },
    {
        heading: "Multi-Post Stories 4",
        image: "background/Img Placeholder.png",
        alternative: "Project 4",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["html", "css", "ruby", "bootstrap"],
    }
]

window.addEventListener('DOMContentLoaded', () => {
    arrProject.forEach((project) => {
        const div = document.createElement('div');
        div.classList.add = 'item';
        div.innerHTML = `<div class="item">
                            <div class="project-card">
                               <img src="${project.image}" alt="${project.alternative}">
                                <div class="font-change">
                                     <h3 class="card-head">${project.heading}</h3>
                                     <p class="description">${project.description}</p>
                                     <ul class="card-technologies">
                                        ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
                                     </ul>
                                    <button class="see-project" type="button">See Project</button>              
                                </div>
                            </div>
                         </div>`;
        document.querySelector('.wrapper').appendChild(div);
    });

    const popBtn = document.querySelectorAll(".see-project");
    const techProject = document.querySelector(".pop-container");

    popBtn.forEach(function (popBtn) {
        popBtn.addEventListener("click", () => {
            techProject.style.display = "block";
        });
    });

    const closeBtn = document.querySelector(".close-button");
    closeBtn.addEventListener("click", () => {
        techProject.style.display = "none";
    });
});




