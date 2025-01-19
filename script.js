document.addEventListener("DOMContentLoaded", () => {
    // Navigation Menu
    const navMenu = document.getElementById("navMenu");
    const navItems = [
        { text: "About", link: "about.html" },
        { text: "Services", link: "services.html" },
        { text: "Videos", link: "videos.html" },
        { text: "Contact", link: "contact.html" },
        { text: "Partners", link: "partners.html" }
    ];

    // Create navigation links
    navItems.forEach(item => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.text;
        listItem.appendChild(link);
        navMenu.appendChild(listItem);
    });

    // Features Section
    const featuresSection = document.getElementById("features");
    const features = [
        {
            title: "Consultation",
            description: "Personalised expert advice tailored to your home automation needs."
        },
        {
            title: "Procurement",
            description: "Streamlined sourcing of premium smart home devices for hassle-free upgrades."
        },
        {
            title: "Installation",
            description: "Seamless setup of smart systems ensuring functionality and convenience."
        }
    ];

    // Create feature cards
    features.forEach(feature => {
        const featureDiv = document.createElement("div");
        featureDiv.className = "feature";
        featureDiv.innerHTML = `
            <h3><a href="services.html">${feature.title}</a></h3>
            <p>${feature.description}</p>`;
        featuresSection.appendChild(featureDiv);
    });
});
