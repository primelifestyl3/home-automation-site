document.addEventListener("DOMContentLoaded", () => {
    // Navigation Menu
    const navMenu = document.getElementById("navMenu");
    const navItems = [
        { text: "Home", link: "index.html" },
        { text: "About", link: "about.html" },
        { text: "Services", link: "services.html" },
        { text: "Contact", link: "contact.html" },
        { text: "Partners", link: "partners.html" }
    ];

    navItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${item.link}">${item.text}</a>`;
        navMenu.appendChild(listItem);
    });
});

   
