function loadMenu() {
    const div = document.getElementById('content');
    let headline = document.createElement('h1');
    let mainDishes = document.createElement('h2');
    let mainText = document.createElement('p');
    let sides = document.createElement('h2');
    let sidesText = document.createElement('p');
    let deserts = document.createElement('h2');
    let desertsText = document.createElement('p');
    let beverages = document.createElement('h2');
    let beveragesText = document.createElement('p');

    headline.innerHTML = "Menu";
    mainDishes.innerHTML = "Main Dishes";
    mainText.innerHTML = "";
    sides.innerHTML = "Sides";
    sidesText.innerHTML = "";
    deserts.innerHTML = "Deserts";
    desertsText.innerHTML = "";
    beverages.innerHTML = "Beverages";
    beveragesText.innerHTML = "";

    div.appendChild(headline);
    div.appendChild(mainDishes);
    div.appendChild(mainText);
    div.appendChild(sides);
    div.appendChild(sidesText);
    div.appendChild(deserts);
    div.appendChild(desertsText);
    div.appendChild(beverages);
    div.appendChild(beveragesText);
}

export {loadMenu};