const arrProject = [
    {
        title: "Multi-Post Stories 1",
        image: "Img Placeholder.png",
        alternative: "Project 1",
        description: "1. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.",
        technologies: ["html", "css", "ruby", "bootstrap"],
        liveProjectBtn: "https://nataliapoletaeva.github.io/Portfolio/",
        srcBtn: "https://github.com/NataliaPoletaeva/Portfolio"
    },
    {
        title: "Multi-Post Stories 2",
        image: "Img Placeholder.png",
        alternative: "Project 2",
        description: "2. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.",
        technologies: ["html", "css", "ruby", "bootstrap"],
        liveProjectBtn: "https://nataliapoletaeva.github.io/Portfolio/",
        srcBtn: "https://github.com/NataliaPoletaeva/Portfolio"
    },
    {
        title: "Multi-Post Stories 3",
        image: "Img Placeholder.png",
        alternative: "Project 3",
        description: "3. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.",
        technologies: ["html", "css", "ruby", "bootstrap"],
        liveProjectBtn: "https://nataliapoletaeva.github.io/Portfolio/",
        srcBtn: "https://github.com/NataliaPoletaeva/Portfolio"
    },
    {
        title: "Multi-Post Stories 4",
        image: "Img Placeholder.png",
        alternative: "Project 4",
        description: "4. A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consequuntur alias, modi qui est illo eum asperiores rerum, maiores corporis aliquid ab eveniet sed, ratione at doloremque quod.",
        technologies: ["html", "css", "ruby", "bootstrap"],
        liveProjectBtn: "https://nataliapoletaeva.github.io/Portfolio/",
        srcBtn: "https://github.com/NataliaPoletaeva/Portfolio"
    }
]

const techProject = document.querySelector(".pop-container");
const popBtn = document.querySelectorAll(".see-project");
const closeBtn = document.querySelector(".close-button");

popBtn.forEach(function (popBtn) {
  popBtn.addEventListener("click", () => {
    if (techProject.style.display === "none") {
      techProject.style.display = "block";
    } else {
      techProject.style.display = "none";
    }
  });
});
