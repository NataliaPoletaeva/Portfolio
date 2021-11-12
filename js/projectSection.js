const arrProject = [
  {
    heading: 'Multi-post Stories 1',
    image: 'background/Img_Placeholder.png',
    popImage: 'background/Snapshoot_Portfolio.png',
    alternative: 'Project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popDescription: '1. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
  {
    heading: 'Multi-post Stories 2',
    image: 'background/Img_Placeholder.png',
    popImage: 'background/Snapshoot_Portfolio.png',
    alternative: 'Project 2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popDescription: '2. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
  {
    heading: 'Multi-post Stories 3',
    image: 'background/Img_Placeholder.png',
    popImage: 'background/Snapshoot_Portfolio.png',
    alternative: 'Project 3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popDescription: '3. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
  {
    heading: 'Multi-post Stories 4',
    image: 'background/Img_Placeholder.png',
    popImage: 'background/Snapshoot_Portfolio.png',
    alternative: 'Project 4',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popDescription: '4. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.',
    technologies: ['html', 'css', 'ruby', 'bootstrap'],
  },
];

const techCard = document.querySelector('.pop-container');
const wrapper = document.querySelector('.wrapper');
const item = document.querySelector('.item');
const itemOne = document.querySelector('#item-1');


function popOpen() {
  if (techCard.style.display === 'none') {
    techCard.style.display = 'block';
  } else {
    techCard.style.display = 'none';
  }
}

function popClose() {
  if (techCard.style.display === 'block') {
    techCard.style.display = 'none';
  }
  document.querySelector('body').style.overflow = 'auto';
}

for (let i = 0; i < arrProject.length; i += 1) {
  const projectCopy = item.cloneNode(true);
  const img = projectCopy.querySelector('.project-img');
  img.setAttribute('src', arrProject[i].image);
  const heading = projectCopy.querySelector('.project-card');
  heading.innerText = arrProject[i].heading;
  const descr = projectCopy.querySelector('.description');
  descr.innerText = arrProject[i].description;
  const tech = projectCopy.querySelector('.card-tecnologiess li');
  const techs = projectCopy.querySelector('.card-technologies');
  for (let j = 0; j < arrProject[i].technologies.length; j += 1) {
    const techCopy = tech.cloneNode(true);
    techCopy.innerText = workCards[i].technologies[j];
    techs.appendChild(techCopy);
  }
  tech.remove();

  const popBtn = projectCopy.querySelector('.see-project');
  popBtn.addEventListener('click', () => {
    const popImg = techCard.querySelectorAll('.pop-img');
    popImg.forEach((popImg) => {
      popImg.setAttribute('src', arrProject[i].image);
    });
    const popHead = techCard.querySelector('.pop-heading');
    popHead.innerText = arrProject[i].heading;
    const popDescription = techCard.querySelector('.pop-description');
    popDescription.innerText = arrProject[i].description;
    const popTech = techCard.querySelector('.pop-tech');
    const popTechs = techCard.querySelector('.pop-techs');
    popTechs.innerHTML = '';
    for (let j = 0; j < arrProject[i].technologies.length; j += 1) {
      const popTechCopy = popTech.cloneNode(true);
      popTechCopy.innerText = arrProject[i].technologies[j];
      popTechs.appendChild(popTechCopy);
    }
    popTech.remove();

    document.querySelector('body').style.overflow = 'hidden';

    popOpen();
  });

  const popClose = document.querySelector('.close-button');
  popClose.addEventListener('click', popClose);

  wrapper.appendChild(item);
}
itemOne.remove();

// function popUp(id) {
//   const popUp = document.createElement('div');
//   popUp.classList.add = '.pop-overlay';
//   popUp.innerHTML = ` <div class="pop-overlay">
//                             <div class="pop-content">
//                               <div class="pop-header">
//                                 <h3 class="pop-title">${project[id].heading}</h3>
//                                 <span class="close-button">&times;</span>
//                               </div>
//                               <div class="pop-body">
//                                 <img class="pop-img" src="${project[id].image}" alt="${project[id].alternative}">
//                                 <p class="pop-description">${project[id].description}</p>
//                                 <ul class="pop-techs">
//                                   ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
//                                 </ul>
//                               </div>
//                               <div class="pop-btn>
//                                 <button class="pop-live" type="button">See Live</button>
//                                 <button class="pop-source" type="button">See Source</button>
//                               </div>
//                             </div>
//                           </div> `;
//   document.querySelector('.pop-container').appendChild(popUp);

//   techCard.style.display = 'block';
// };

// window.addEventListener('DOMContentLoaded', () => {
//   arrProject.forEach((project) => {
//     const div = document.createElement('div');
//     div.classList.add = 'item';
//     div.innerHTML = `<div class="item">
//                         <div class="project-card">
//                             <img src="${project.image}" alt="${project.alternative}">
//                             <div class="font-change">
//                                  <h3 class="card-head">${project.heading}</h3>
//                                  <p class="description">${project.description}</p>
//                                  <ul class="card-technologies">
//                                     ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
//                                  </ul>
//                                 <button class="see-project" type="button" data-pop-id="${project.id}">See Project</button> 
//                               </div>             
//                             </div>
//                         </div>
//                     </div>`;
//     document.querySelector('.wrapper').appendChild(div);
//   });


//   popBtn.forEach((popBtn) => {
//     popBtn.addEventListener('click', () => popUp(popBtn.dataset.popId))
//   });

// });


// closeBtn.addEventListener('click', () => {
//   techCard.style.display = 'none';
// });