document.addEventListener("DOMContentLoaded", function () {
    var topBtn = document.querySelector(".backToTop");

    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;

        if (scroll >= 500) {
            topBtn.classList.remove("d-none");
        } else {
            topBtn.classList.add("d-none");
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});