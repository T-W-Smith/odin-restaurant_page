// Imports all of the load functions
import {loadHome} from './homeload';
import {loadMenu} from './menuload';
import {loadContact} from './contactload';

// Imports the styling sheet
import './style.css';

// Automatically loads the home page
window.onload = loadHome();

// Navbar button event listners
const navBar = (function() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contectBtn = document.getElementById('contact');

    homeBtn.addEventListener('click', function() {
        document.getElementById('content').replaceChildren();
        loadHome();
    });
    menuBtn.addEventListener('click', function() {
        document.getElementById('content').replaceChildren();
        loadMenu();
    });
    contectBtn.addEventListener('click', function() {
        document.getElementById('content').replaceChildren();
        loadContact();
    });
})();