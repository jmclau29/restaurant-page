import homePageLoad from "./home.js";
import "./styles.css";


const navBar = document.querySelector('nav');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

homeBtn.textContent = 'DJF Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact';

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

homePageLoad();