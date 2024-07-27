import {loadHome} from './homeload';
import {loadMenu} from './menuload';
import {loadContact} from './contactload';
import './style.css';

window.onload = loadHome();

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