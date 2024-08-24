function menuPageLoad() {
    content.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    const menuTitleText = document.createElement('h1');
    menuTitleText.setAttribute('id', 'menu-title-text');
    menuTitleText.textContent = 'Menu';

    const menu = document.createElement('ul');
    menu.setAttribute('id', 'menu-list');
    const menuItemOne = document.createElement('li');
    const menuItemTwo = document.createElement('li');
    const menuItemThree = document.createElement('li');

    menuItemOne.classList.add('menu-item');
    menuItemTwo.classList.add('menu-item');
    menuItemThree.classList.add('menu-item');

    menuItemOne.textContent = 'Sushi - 5 dollars.';
    menuItemTwo.textContent = 'Ramen - 7 dollars.';
    menuItemThree.textContent = 'Natto - 3 dollars.';

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuTitleText);
    menuContainer.appendChild(menu);
    menu.appendChild(menuItemOne);
    menu.appendChild(menuItemTwo);
    menu.appendChild(menuItemThree);
}

export default menuPageLoad;