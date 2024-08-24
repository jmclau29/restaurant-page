function contactPageLoad() {
    content.textContent = '';

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'menu-container');
    const contactTitleText = document.createElement('h1');
    contactTitleText.setAttribute('id', 'contact-title-text');
    contactTitleText.textContent = 'Contact us at:';

    const contactList = document.createElement('ul');
    contactList.setAttribute('id', 'contact-list');
    const contactItemOne = document.createElement('li');
    const contactItemTwo = document.createElement('li');
    const contactItemThree = document.createElement('li');
    
    contactItemOne.classList.add('contact-item');
    contactItemTwo.classList.add('contact-item');
    contactItemThree.classList.add('contact-item');

    content.appendChild(contactContainer);
    menuContainer.appendChild(contactTitleText);
    menuContainer.appendChild(contactList);
    menu.appendChild(contactItemOne);
    menu.appendChild(contactItemTwo);
    menu.appendChild(contactItemThree);
}

export default contactPageLoad;