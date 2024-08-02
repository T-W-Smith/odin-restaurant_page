import Img from './tavern.jpg'

function createHome() {
    const home = document.createElement('div');
    home.classList.add("home");

    const mainImage = new Image(500, 250);
    mainImage.src = Img;

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Feather's Tavern";

    const infoText = document.createElement('p');
    infoText.textContent = "Nestled in the heart of the bustling city, the newly opened Feather's Tavern " +
                         "beckons weary travelers and locals alike with its inviting ambiance and " +
                         "tantalizing array of culinary delights. Whether you're seeking a cozy spot for " +
                         "an intimate gathering, a lively hub for post-work revelry, or simply a respite " +
                         "from the bustling city streets, Feather's Tavern promises to deliver an experience " +
                         "that transcends the typical tavern fare, inviting you to savor the pleasures of " +
                         "fine food, expertly mixed drinks, and convivial company in an atmosphere of refined " +
                         "rustic elegance.";

    home.appendChild(headline);
    home.appendChild(mainImage);
    home.appendChild(infoText);

    return home;
}

function loadHome() {
    const content = document.getElementById('content');
    content.appendChild(createHome());
}

export {loadHome};