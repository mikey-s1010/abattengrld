document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.image-onclick').style.display = 'block';
        document.querySelector('.image-onclick img').src = image.getAttribute('src');
    }
});

document.querySelector('.image-onclick').onclick = () => {
    document.querySelector('.image-onclick').style.display = 'none';
};

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
