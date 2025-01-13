document.addEventListener("DOMContentLoaded", () => {
    // Navigation Menu
    const navMenu = document.getElementById("navMenu");
    const navItems = [
        { text: "About", link: "#about" },
        { text: "Services", link: "#services" },
        {
            text: "More",
            subMenu: [
                { text: "Videos", link: "#videos" },
                { text: "Next Steps", link: "#next-steps" }
            ]
        },
        { text: "Contact", link: "#contact" }
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
        { title: "Smart Lighting", description: "Control your home lighting with ease using our intuitive systems." },
        { title: "Home Security", description: "Keep your family safe with advanced security features." },
        { title: "Energy Efficiency", description: "Reduce energy consumption and lower your bills." }
    ];

    features.forEach(feature => {
        const featureDiv = document.createElement("div");
        featureDiv.className = "feature";
        featureDiv.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>`;
        featuresSection.appendChild(featureDiv);
    });
});
