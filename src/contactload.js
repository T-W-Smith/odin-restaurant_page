// Creates the contact page
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add("contact");

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    contact.appendChild(headline);

    const number = document.createElement('p');
    number.textContent = "(123)-456-7890";

    const email = document.createElement('p');
    email.textContent = "feathers@tavern.com";

    const address = document.createElement('p');
    address.textContent = "123 Jasper Lakes Rd., Babble, North Carolina 30684";

    contact.appendChild(number);
    contact.appendChild(email);
    contact.appendChild(address);

    return contact;
}

// Loads the contact page
function loadContact() {
    const content = document.getElementById('content');
    content.appendChild(createContact());
}

// Exports the loadContact function
export {loadContact};