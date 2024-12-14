// 1. Загрузчик
document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 3000);

    // Dropdown toggle for mobile menu
    const burgerMenuBtn = document.querySelector(".burger-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    burgerMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    // Filter contacts
    const filterButtons = document.querySelectorAll(".filter-btn");
    const contactList = document.getElementById("contactList");
    const contacts = contactList.querySelectorAll(".photo");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            contacts.forEach(contact => {
                if (filter === "all" || contact.dataset.category === filter) {
                    contact.style.display = "block";
                } else {
                    contact.style.display = "none";
                }
            });
        });
    });

    // Sorting contacts
    const timeSelector = document.getElementById("timeSelector");

    timeSelector.addEventListener("change", () => {
        const value = timeSelector.value;
        const sortedContacts = Array.from(contacts).sort((a, b) => {
            const nameA = a.querySelector("h3").textContent.toLowerCase();
            const nameB = b.querySelector("h3").textContent.toLowerCase();

            if (value === "surname") {
                return nameA.split(" ")[1].localeCompare(nameB.split(" ")[1]);
            } else if (value === "name") {
                return nameA.split(" ")[0].localeCompare(nameB.split(" ")[0]);
            }

            return 0;
        });

        sortedContacts.forEach(contact => contactList.appendChild(contact));
    });
});