document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-up');

    setTimeout(function () {
        animatedElements.forEach(function (element) {
            element.classList.add('animate-up');
        });
    }, 500);
});