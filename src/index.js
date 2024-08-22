import homePageLoad from "./home.js";
import menuPageLoad from "./menu.js";
import "./styles.css";

const navBar = document.querySelector('nav');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const content = document.getElementById('content')

homeBtn.textContent = 'DJF Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact';

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

homeBtn.addEventListener('click', () => {homePageLoad()});
menuBtn.addEventListener('click', () => {menuPageLoad()});

content.textContent = '';
homePageLoad();