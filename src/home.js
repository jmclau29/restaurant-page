import signImage from './images/sign.jpg';

function homePageLoad() {
    const heroBannerDiv = document.createElement('div');
    heroBannerDiv.setAttribute('id', 'hero-banner');
    const heroBanner = document.createElement('div');
    heroBanner.setAttribute('id', 'hero-banner');
    const heroBannerText = document.createElement('div');
    heroBannerText.setAttribute('id', 'hero-banner-text');
    const heroTitle = document.createElement('h1');
    heroTitle.setAttribute('id', 'hero-title');
    heroTitle.textContent = 'Delicious Japanese Food';

    const heroText = document.createElement('p');
    heroText.setAttribute('id', 'hero-text');
    heroText.textContent = 'Enjoy delicious Japanese food at Japanese Restaurant DJF.';

    const heroImage = document.createElement('img');
    heroImage.setAttribute('id', 'hero-image');
    heroImage.src = signImage;
    heroImage.alt = 'Photo by Rémi Bertogliati at Unsplash';

    content.appendChild(heroBannerDiv);
    heroBannerDiv.appendChild(heroBanner);

    heroBanner.appendChild(heroBannerText);
    heroBannerText.appendChild(heroTitle);
    heroBannerText.appendChild(heroText);

    heroBanner.appendChild(heroImage);
}

export default homePageLoad;