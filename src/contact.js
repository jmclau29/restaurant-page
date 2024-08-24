function contactPageLoad() {
    content.textContent = '';

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');
    const contactTitleText = document.createElement('h1');
    contactTitleText.setAttribute('id', 'contact-title-text');
    contactTitleText.textContent = 'Contact us at:';

    const contactList = document.createElement('ul');
    contactList.setAttribute('id', 'contact-list');
    const contactItemOne = document.createElement('li');
    contactItemOne.textContent = 'Phone number: 123456789';
    const contactItemTwo = document.createElement('li');
    contactItemTwo.textContent = 'E-mail: 123456789 @ 123456789';
    const contactItemThree = document.createElement('li');
    contactItemThree.textContent = 'Social Media: 123456789 on Flipflop';
    
    contactItemOne.classList.add('contact-item');
    contactItemTwo.classList.add('contact-item');
    contactItemThree.classList.add('contact-item');

    content.appendChild(contactContainer);
    contactContainer.appendChild(contactTitleText);
    contactContainer.appendChild(contactList);
    contactList.appendChild(contactItemOne);
    contactList.appendChild(contactItemTwo);
    contactList.appendChild(contactItemThree);
}

export default contactPageLoad;