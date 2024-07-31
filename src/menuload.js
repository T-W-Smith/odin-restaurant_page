function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add("menu");

    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    menu.appendChild(headline);

    const mainDishes = document.createElement('h2');
    mainDishes.textContent = "Main Dishes";
    menu.appendChild(mainDishes);

    menu.appendChild(
        createMenuItem(
            "Herbed Chicken",
            "Delicious roasted herbed chicken breast with braised " +
            "pork belly, carrots, mushrooms and greens over creamy " + 
            "red skin mashed potatoes"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Salmon Cakes",
            "Crispy breaded salmon cakes with red and green onion, " + 
            "paired with roasted balsamic-glazed carrots and Brussels " + 
            "sprouts, served with creamy dill remoulade for dipping"
        )
    );
    menu.appendChild(
        createMenuItem(
            "cheeseburger Mac",
            "Feather's deconstructs America's favorite sandwich and " + 
            "transforms it into a delicious mac and cheese with savory " + 
            "ground beef, topped with crispy bacon, diced tomato and " + 
            "chopped pickle"
        )
    );

    const sides = document.createElement('h2');
    sides.textContent = "Sides";
    menu.appendChild(sides);

    menu.appendChild(
        createMenuItem(
            "Mashed Potatoes",
            "Loaded with cheddar, bacon and scallions"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Garden Salad",
            "Mixed with tomato, cucumber and red wine vinaigrette"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Tavern Fries or Tots",
            "Tossed with house-made herb salt"
        )
    );

    const drinks = document.createElement('h2');
    drinks.textContent = "Drinks";
    menu.appendChild(drinks);

    menu.appendChild(
        createMenuItem(
            "The Campfire",
            "Feather's trademarked Browned Butter Rye Whiskey, bitters " + 
            "and simple syrup is the perfect blend of bold flavors " + 
            "balanced with velvet-like smoothness"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Lost at Sea",
            "A glistening deep sea experience with vodka, tropical orange " + 
            "and ginger flavors, garnished with a mermaid"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Wonderful Mojito",
            "Combining rum, mint and lime with the exotic flavor of passion " + 
            "fruit takes the traditional mojito to the next level"
        )
    )

    const deserts = document.createElement('h2');
    deserts.textContent = "Deserts";
    menu.appendChild(deserts);

    menu.appendChild(
        createMenuItem(
            "Feather's Chocolate Lava Delight",
            "Warm, chocolate cake filled with molten, dark chocolate truffle, " + 
            "topped with vanilla ice cream and raspberry drizzle"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Crème Brûlée Cheesecake",
            "Vanilla bean cheesecake with freshly sliced tropical fruit and mango drizzle"
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.appendChild(createMenu());
}

export {loadMenu};