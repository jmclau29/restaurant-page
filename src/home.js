export default function homePageLoad() {
    const content = document.getElementById(content);

    const heroBannerDiv = document.createElement('div');
    const heroBanner = document.createElement('div');
    const heroBannerText = document.createElement('div');
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Delicious Japanese Food';

    const heroText = document.createElement('p');
    heroText.textContent = 'Enjoy delicious Japanese food at Japanese Restaurant DJF.';

    const heroImage = document.createElement('img');
    heroImage.src = './images/remi-bertogliati-n4Uzf8nsYi0-unsplash.jpg';
    heroImage.alt = 'Photo by Rémi Bertogliati at Unsplash';

    content.appendChild(heroBannerDiv);
    heroBannerDiv.appendChild(heroBanner);

    heroBanner.appendChild(heroBannerText);
    heroBannerText.appendChild(heroTitle);
    heroBannerText.appendChild(heroText);

    heroBanner.appendChild(heroImage);

    const heroItems = document.createElement('div');

    const heroItemOne = document.createElement('div');
    const heroItemTwo = document.createElement('div');
    const heroItemThree = document.createElement('div');

    heroItems.appendChild(heroItemOne);

    const heroItemOneImg = document.createElement('img');
    heroItemOneImg.src = './images/flyd-loB9-eAYt2k-unsplash.jpg';
    heroItemOneImg.alt = 'sushi';
    const heroItemOneText = document.createElement('p');
    heroItemOneText.textContent = 'Eat Sushi~';
    heroItemOne.appendChild(heroItemOneImg);
    heroItemOne.appendChild(heroItemOneText);

    heroItems.appendChild(heroItemTwo);

    const heroItemTwoImg = document.createElement('img');
    heroItemTwoImg.src = './images/crystal-jo-TWTxHN2QIGc-unsplash.jpg';
    heroItemTwoImg.alt = 'ramen';
    const heroItemTwoText = document.createElement('p');
    heroItemTwoText.textContent = 'Eat Ramen~';
    heroItemTwo.appendChild(heroItemTwoImg);
    heroItemTwo.appendChild(heroItemTwoText);

    heroItems.appendChild(heroItemThree);

    const heroItemThreeImg = document.createElement('img');
    heroItemThreeImg.src = './images/seiya-maeda-H3wsvC2Tgk8-unsplash.jpg';
    heroItemThreeImg.alt = 'natto';
    const heroItemThreeText = document.createElement('p');
    heroItemThreeText.textContent = 'Eat... Natto~';
    heroItemThree.appendChild(heroItemThreeImg);
    heroItemThree.appendChild(heroItemThreeText);
}

