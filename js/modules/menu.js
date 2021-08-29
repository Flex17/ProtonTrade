function menu(menuItemsSelector, menuSelector, menuActiveClass, burgerSelector, burgerActiveClass) {
    const items = document.querySelectorAll(menuItemsSelector),
          menu = document.querySelector(menuSelector),
          burger = document.querySelector(burgerSelector);
    items.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove(menuActiveClass);
            burger.classList.toggle(burgerActiveClass);
        });
    });    
}

export default menu;