let images = ['image1.jpg','ms.webp','graphic.webp','fronted.png','webdev.webp','flutter.webp','seo.jpeg','image3.jpg','code.jpg']
var currentIndex = 0;

function createGallery() {
    var gallery = document.getElementById('gallery');
    images.forEach(function(imagePath) {
        var imgHTML = `
            <img class="gallery-image" width="500px" height="400px" src="${imagePath}" alt="${imagePath}" >
        `;
        var tempDiv = document.createElement('div');

        tempDiv.innerHTML = imgHTML.trim();

        var img = tempDiv.firstChild;

        gallery.appendChild(img);
    });
}
function showImage(index) {
    const imageElements = document.getElementsByClassName('gallery-image');
    Array.prototype.map.call(imageElements, image => {
        image.style.display = 'none';
        return image;
    });
    imageElements[index].style.display = 'block';
}
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}
window.onload = function() {
    createGallery();
    showImage(currentIndex);
};
