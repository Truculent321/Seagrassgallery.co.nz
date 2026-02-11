
// JavaScript for toggle functionality
document.addEventListener('DOMContentLoaded', function () {


    // Gallery toggle
    const gallery = document.querySelector('.Gallery');
    const toggleGalleryButton = document.getElementById('toggleGallery');

    if (toggleGalleryButton) {
        toggleGalleryButton.addEventListener('click', function () {
            toggleSectionVisibility(gallery, toggleGalleryButton);
        });
    }

    // Blue Horizon series toggle
    const blueHorizon = document.querySelector('.Blue-horizon');
    const toggleBlueHorizonButton = document.getElementById('togglebluehorizon');

    if (toggleBlueHorizonButton) {
        toggleBlueHorizonButton.addEventListener('click', function () {
            toggleSectionVisibility(blueHorizon, toggleBlueHorizonButton);
        });
    }

    // Dot Series toggle
    const dotSeries = document.querySelector('.Dot-series');
    const toggleDotSeriesButton = document.getElementById('toggledotseries');

    if (toggleDotSeriesButton) {
        toggleDotSeriesButton.addEventListener('click', function () {
            toggleSectionVisibility(dotSeries, toggleDotSeriesButton);
        });
    }

    // Function to toggle section visibility
    function toggleSectionVisibility(section, button) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'flex';
            button.textContent = 'Hide';
        } else {
            section.style.display = 'none';
            button.textContent = 'Show';
        }
    }

    // Titles for each painting (this could be from your backend or statically set here)
    const paintingTitles = [
        "Blue Bowl Final",
        "Dungeon",
        "Tomb",
        "Eight houses",
        "Flower focus",
        "Bookcase",
        "The Key",
        "Artefact",
        "Sole Pepper",
        "Cello",
        "Birch Bridge",
        "The Rubiks Cube",
        "Main Window",
        "Gold Fish and lily flower",
        "Hillside Houses",
        "Houses",
        "Houses with church",
        "Church and Corner Store",
        "Pedestrian crossing",
        "Letterboxes of Manakau",
        "Goldfish",
        "House with Plans",
        "Gabion Wall",
        "Cottage at crossroads",
        "Single shop",
        "Apple",
        "Timbuktu",
        "Horowhenua",
        "Nudescape",
        "Seated Nude",
        "Mediterranean Goddess",
        "Rose",
        "Pastel Rose",
        "Sapphire",
        "Schism",
        "Her Red Shoes",
        "Impressions of Flowers",
        "Moody Houses",
        "Cobalt blue glassware",
        "Whare in The Hills",
        "Untitled",
        "Three Panel Peppers",
        "Untitled",
        "The Entry",
        "Stained glass window",
        "Small Stained Glass",
        "The hall",
        "Villa",
        "West coast triptych",
        "Light Flare",
        "Lady of the Lamp",
        "Celtic Cross",
        "Shrine",
        "Luggage",
        "Dusk at the Store",
        "Stream",
        "River Blue horizon",
        "Castle on a loch",
        "Scotland two",
        "Clouds",
        "Untitled",
        "Scottish loch 1",
        "Azure blue horizon",
        "Scottish loch 3",
        "Focus on dots",
        "Blue green dots",
        "Field of dreams",
        "Dots Landscape"
    ];

    // Function to toggle the image popup
    function togglePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
    }

    // Function to add popup functionality to images
    function addPopupFunctionality(imageSelector) {
        const images = document.querySelectorAll(imageSelector);
        const popupImage = document.getElementById('popup-image');
        const imgTitle = document.getElementById('img-title'); // Reference to the title element

        images.forEach(function (image, index) {
            image.addEventListener('click', function () {
                togglePopup();
                popupImage.src = this.src;
                popupImage.dataset.index = index;
                popupImage.dataset.selector = imageSelector;
                imgTitle.textContent = paintingTitles[index]; // Set the corresponding title
            });
        });
    }

    // Add popup functionality to images
    addPopupFunctionality('.column img');

    // Function to navigate to the next image in the popup
    function nextImage() {
        const popupImage = document.getElementById('popup-image');
        let currentImageIndex = parseInt(popupImage.dataset.index);
        const images = document.querySelectorAll(popupImage.dataset.selector);
        const imgTitle = document.getElementById('img-title'); // Reference to the title element

        currentImageIndex = (currentImageIndex + 1) % images.length;

        popupImage.src = images[currentImageIndex].src;
        popupImage.dataset.index = currentImageIndex;
        imgTitle.textContent = paintingTitles[currentImageIndex]; // Update title
    }

    // Function to navigate to the previous image in the popup
    function prevImage() {
        const popupImage = document.getElementById('popup-image');
        let currentImageIndex = parseInt(popupImage.dataset.index);
        const images = document.querySelectorAll(popupImage.dataset.selector);
        const imgTitle = document.getElementById('img-title'); // Reference to the title element

        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

        popupImage.src = images[currentImageIndex].src;
        popupImage.dataset.index = currentImageIndex;
        imgTitle.textContent = paintingTitles[currentImageIndex]; // Update title
    }

    // Add event listeners for arrow clicks
    document.getElementById('prev-btn').addEventListener('click', prevImage);
    document.getElementById('next-btn').addEventListener('click', nextImage);
    document.getElementById('close-btn').addEventListener('click', togglePopup);
});



const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const openIcon = hamburger.querySelector('.open');
const closeIcon = hamburger.querySelector('.close');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Toggle icons
    if (navLinks.classList.contains('show')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        openIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    // Configure GA with cookie_domain set to 'auto' or specify your domain if needed
    gtag('config', 'G-K75NG7PPSE', {
        'cookie_domain': 'auto'
    });
});

