const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.createElement('div');
modal.className = 'modal';
modal.style.display = 'none';
document.body.appendChild(modal);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%;">`;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});





