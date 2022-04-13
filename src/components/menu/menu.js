import './Menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker(menuObj) {
  const menu = document.createElement("div");
  const menuUl = document.createElement("ul");
  const menuItem = document.createElement("li")
  const menuButton= document.createElement("span")

  menu.appendChild(menuUl);
  menuUl.appendChild(menuItem);

  menu.classList.add("menu");
  menuButton.classList.add("menu-button")

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu-open")
  })

  menuItems.forEach(item => {
    document.querySelector("div.menu").appendChild(menuMaker(item));
  })
  return menu;
}

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
