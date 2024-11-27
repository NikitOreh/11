document.addEventListener("DOMContentLoaded", function () {
    const burgerMenuBtn = document.querySelector(".burger-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    burgerMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});
