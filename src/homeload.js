import Img from './tavern.jpg'

function loadHome() {
    const div = document.getElementById('content');
    const mainImage = new Image(500, 250);
    const headline = document.createElement('h1');
    const infoText = document.createElement('p');

    mainImage.src = Img;

    headline.innerHTML = "Welcome to Feathers Tavern";
    infoText.innerHTML = "Nestled in the heart of the bustling city, the newly opened Feathers Tavern " +
                         "beckons weary travelers and locals alike with its inviting ambiance and " +
                         "tantalizing array of culinary delights. Whether you're seeking a cozy spot for " +
                         "an intimate gathering, a lively hub for post-work revelry, or simply a respite " +
                         "from the bustling city streets, Feathers Tavern promises to deliver an experience " +
                         "that transcends the typical tavern fare, inviting you to savor the pleasures of " +
                         "fine food, expertly mixed drinks, and convivial company in an atmosphere of refined " +
                         "rustic elegance.";

    div.appendChild(headline);
    div.appendChild(mainImage);
    div.appendChild(infoText);
}

export {loadHome};