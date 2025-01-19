document.addEventListener("DOMContentLoaded", () => {
    // Add features dynamically
    const featuresSection = document.getElementById("features");
    const features = [
        { title: "Consultation", description: "Personalised expert advice tailored to your home automation needs." },
        { title: "Procurement", description: "Streamlined sourcing of premium smart home devices for hassle-free upgrades." },
        { title: "Installation", description: "Seamless setup of smart systems ensuring functionality and convenience." }
    ];

    features.forEach(feature => {
        const featureDiv = document.createElement("div");
        featureDiv.className = "feature";
        featureDiv.innerHTML = `
            <h3><a href="services.html">${feature.title}</a></h3>
            <p>${feature.description}</p>
        `;
        featuresSection.appendChild(featureDiv);
    });

    // Toggle between mobile and desktop view
    const toggleButton = document.getElementById("toggleView");
    let isMobileView = false;

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("mobile-view");
        isMobileView = !isMobileView;
        toggleButton.textContent = isMobileView ? "Switch to Desktop View" : "Switch to Mobile View";
    });
});
