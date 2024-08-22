function menuPageLoad() {
    content.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    const menuTitleText = document.createElement('h1');
    menuTitleText.setAttribute('id', 'menu-title-text');
    menuTitleText.textContent = 'Menu';

    const menu = document.createElement('ul');
    menu.setAttribute('id', 'menu');
    const menuItemOne = document.createElement('li');
    const menuItemTwo = document.createElement('li');
    const menuItemThree = document.createElement('li');

    menuItemOne.setAttribute('id', 'menuItemOne');
    menuItemTwo.setAttribute('id', 'menuItemTwo');
    menuItemThree.setAttribute('id', 'menuItemThree');
    menuItemOne.classList.add('menu-item');
    menuItemTwo.classList.add('menu-item');
    menuItemThree.classList.add('menu-item');

    menuItemOne.textContent = 'sushi';
    menuItemTwo.textContent = 'ramen';
    menuItemThree.textContent = 'natto';

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuTitleText);
    menuContainer.appendChild(menu);
    menu.appendChild(menuItemOne);
    menu.appendChild(menuItemTwo);
    menu.appendChild(menuItemThree);
}

export default menuPageLoad;