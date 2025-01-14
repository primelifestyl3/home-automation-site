document.addEventListener("DOMContentLoaded", () => {
    // Navigation Menu
    const navMenu = document.getElementById("navMenu");
    const navItems = [
        { text: "About", link: "about.html" },
        { text: "Services", link: "services.html" },
        {
            text: "More",
            subMenu: [
                { text: "Videos", link: "videos.html" },
                { text: "Next Steps", link: "next-steps.html" }
            ]
        },
        { text: "Contact", link: "contact.html" },
        { text: "Partners", link: "partners.html" }
    ];

    navItems.forEach(item => {
        const listItem = document.createElement("li");

        if (item.subMenu) {
            listItem.innerHTML = `
                <a href="#">${item.text}</a>
                <ul>
                    ${item.subMenu
                        .map(sub => `<li><a href="${sub.link}">${sub.text}</a></li>`)
                        .join("")}
                </ul>`;
        } else {
            listItem.innerHTML = `<a href="${item.link}">${item.text}</a>`;
        }

        navMenu.appendChild(listItem);
    });

    // Features Section
    const featuresSection = document.getElementById("features");
    const features = [
        { title: "Consultation", description: "Personalized expert advice tailored to your home automation needs." },
        { title: "Procurement", description: "Streamlined sourcing of premium smart home devices for hassle-free upgrades." },
        { title: "Installation", description: "Seamless setup of smart systems ensuring functionality and convenience." }
    ];

    features.forEach(feature => {
        const featureDiv = document.createElement("div");
        featureDiv.className = "feature";
        featureDiv.innerHTML = `
            <h3><a href="services.html">${feature.title}</a></h3>
            <p>${feature.description}</p>`;
        featuresSection.appendChild(featureDiv);
    });
});
