function loadContact() {
    const div = document.getElementById('content');
    let headline = document.createElement('h1');
    let infoText = document.createElement('p');

    headline.innerHTML = "Contact";
    infoText.innerHTML = "Call us!";

    div.appendChild(headline);
    div.appendChild(infoText);
}

export {loadContact};