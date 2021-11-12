const arrProject = [
  {
    id: '1',
    heading: 'Multi-post Stories',
    image: 'background/Img_Placeholder.png',
    alternative: 'Project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
  {
    id: '2',
    heading: 'Multi-post Stories',
    image: 'background/Img_Placeholder.png',
    alternative: 'Project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
  {
    id: '3',
    heading: 'Multi-post Stories',
    image: 'background/Img_Placeholder.png',
    alternative: 'Project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
  {
    id: '4',
    heading: 'Multi-post Stories',
    image: 'background/Img_Placeholder.png',
    alternative: 'Project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
];

for (let i = 0; i < arrProject.length; i += 1) {
  const project = arrProject[i];
  function showPopup() {
    const techProject = document.createElement('div');
    techProject.id = 'pop-container';
    const popUp = document.createElement('div');
    popUp.classList.add = '.pop-overlay';
    popUp.innerHTML = ` <div class="pop-overlay">
                            <div class="pop-content">
                              <div class="pop-header">
                                <h3 class="pop-title">${project.heading}</h3>
                                <span class="close-button">&times;</span>
                              </div>
                              <div class="pop-body">
                                <img class="pop-img" src="${project.image}" alt="${project.alternative}">
                                <p class="pop-description">${project.description}</p>
                                <ul class="pop-techs">
                                  ${project.technologies.map((tech) => `<li class="pop-tech">${tech}</li>`).join('')}
                                </ul>
                              </div>
                              <div class="pop-btn">
                                <button class="pop-live" type="button">See Live</button>
                                <button class="pop-source" type="button">See Source</button>
                              </div>
                            </div>
                          </div> `;
    techProject.appendChild(popUp);
    document.querySelector('.works').appendChild(techProject);
    techProject.style.display = 'block';
    const closeBtn = document.querySelector('.close-button');
    closeBtn.addEventListener('click', () => {
      techProject.style.display = 'none';
    });
  };
};

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
                                <button class="see-project" type="button" data-id="${project.id}">See Project</button>              
                            </div>
                        </div>
                    </div>`;
    document.querySelector('.wrapper').appendChild(div);
  });

  const openBtn = document.querySelectorAll('.see-project');
  openBtn.forEach((openBtn) => {
    openBtn.addEventListener('click', () => showPopup(openBtn.dataset.id));
  });
});