var backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});