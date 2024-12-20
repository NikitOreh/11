document.addEventListener("DOMContentLoaded", () => {
    // 1. Загрузчик
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 3000);

    // 2. Переключение мобильного меню
    const burgerMenuBtn = document.querySelector(".burger-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    burgerMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    // 3. Данные для карточек
    const contactsData = [
        {
            name: "Антон Котиков",
            phone: "+7 920 472 32-23",
            image: "img/Ф1.jpg",
            category: "favorite",
        },
        {
            name: "Диана Фролова",
            phone: "+7 920 472 32-23",
            image: "img/Ф2.jpg",
            category: "all",
        },
        {
            name: "Анастасия Лебедева",
            phone: "+8 920 472 32-23",
            image: "img/Ф3.jpg",
            category: "favorite",
        },
        {
            name: "Алина Давыдова",
            phone: "+8 920 472 32-23",
            image: "img/Ф4.jpg",
            category: "all",
        },
    ];

    const contactList = document.getElementById("contactList");

    // 4. Отображение карточек
    function displayContacts(contacts) {
        contactList.innerHTML = ""; // Очистка контейнера
        contacts.forEach((contact) => {
            const card = document.createElement("div");
            card.className = "photo";
            card.dataset.category = contact.category;

            card.innerHTML = `
                <img src="${contact.image}" alt="${contact.name}" class="photo1-img" />
                <div class="photo-body">
                    <h3 class="name">${contact.name}</h3>
                    <div class="tel">${contact.phone}</div>
                </div>
            `;
            contactList.appendChild(card);
        });
    }

    // 5. Фильтрация и сортировка карточек
    function filterAndSortContacts(filter = "all", sortOption = "default") {
        let filteredContacts = contactsData;

        // Фильтрация
        if (filter !== "all") {
            filteredContacts = contactsData.filter(
                (contact) => contact.category === filter
            );
        }

        // Сортировка
        if (sortOption === "surname") {
            filteredContacts.sort((a, b) =>
                a.name.split(" ")[1].localeCompare(b.name.split(" ")[1])
            );
        } else if (sortOption === "name") {
            filteredContacts.sort((a, b) =>
                a.name.split(" ")[0].localeCompare(b.name.split(" ")[0])
            );
        }

        displayContacts(filteredContacts);
    }

    // Изначальное отображение всех контактов
    displayContacts(contactsData);

    // Обработчики фильтрации
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            filterAndSortContacts(filter);
        });
    });

    // Обработчики сортировки
    const timeSelector = document.getElementById("timeSelector");
    timeSelector.addEventListener("change", () => {
        const sortOption = timeSelector.value;
        filterAndSortContacts("all", sortOption);
    });
});
