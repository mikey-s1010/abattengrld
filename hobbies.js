const panels = document.querySelectorAll(".panel");

const imageSets = [
    [
        'https://fastcdn.hoyoverse.com/content-v2/hkrpg/125774/65960ce8de9c6c8f68f55dc99db1af73_8833039986211780001.jpg',
        'https://fastcdn.hoyoverse.com/content-v2/hk4e/123300/177e9f26ebe36bd35804afad7685e4c2_7768689582593531458.png',
        'https://res-r.qingjiaota.com/image/notice/1725416629175.png'
    ],
    [
        'https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    [
        'https://thumb.ac-illust.com/0d/0d1b6ea5315c273655cc8756bb683521_t.jpeg',
        'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    [
        './assets/Cyclops_Saga2.jpg',
        'https://i.scdn.co/image/ab67616d0000b273f539f9a64d5603185f70e02b',
        'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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