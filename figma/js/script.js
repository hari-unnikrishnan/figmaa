// Example for handling carousel functionality (if needed)
document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel('#dessertCarousel');
  });

  document.querySelectorAll('.image-wrapper').forEach((img) => {
    img.addEventListener('animationend', () => {
        img.style.animation = 'none';
        setTimeout(() => {
            img.style.animation = '';
        }, 50); // Small delay before reapplying animation
    });
});
