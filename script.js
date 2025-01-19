document.addEventListener("DOMContentLoaded", () => {
    // Dynamically Populate Features Section
    const featuresSection = document.getElementById("features");
    const features = [
        {
            title: "Consultation",
            description: "Personalised advice for all your home automation needs.",
        },
        {
            title: "Procurement",
            description: "Streamlined sourcing of premium smart devices.",
        },
        {
            title: "Installation",
            description: "Seamless setup for all your smart home systems.",
        },
    ];

    // Create Feature Cards
    features.forEach(feature => {
        const featureDiv = document.createElement("div");
        featureDiv.className = "feature";
        featureDiv.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresSection.appendChild(featureDiv);
    });
});

