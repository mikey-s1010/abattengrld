const panels = document.querySelectorAll(".panel");

const imageSets = [
    [
        'https://fastcdn.hoyoverse.com/content-v2/hkrpg/125774/65960ce8de9c6c8f68f55dc99db1af73_8833039986211780001.jpg',
        'https://fastcdn.hoyoverse.com/content-v2/hk4e/123300/177e9f26ebe36bd35804afad7685e4c2_7768689582593531458.png',
        'https://res-r.qingjiaota.com/image/notice/1725416629175.png'
    ],
    [
        './assets/books1.jpg',
        './assets/books2.jpg',
        './assets/books3.jpg'
    ],
    [
        './assets/puzzle1.jpg',
        './assets/puzzles2.png',
        './assets/puzzles3.png'
    ],
    [
        './assets/Cyclops_Saga2.jpg',
        './assets/music2.jpg',
        './assets/music3.png'
    ]
];

let activeInterval;

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
    clearInterval(activeInterval);
}

function cycleImages(panel, imageSet) {
    let index = 0;

    panel.style.backgroundImage = `url(${imageSet[index]})`;

    activeInterval = setInterval(() => {

        index = (index + 1) % imageSet.length;
        panel.style.backgroundImage = `url(${imageSet[index]})`;
    }, 2000);
}

panels.forEach((panel, index) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
        cycleImages(panel, imageSets[index]);
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}