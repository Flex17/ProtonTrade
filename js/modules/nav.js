function nav(burgerSelector, burgerActiveClass, menuSelector, menuActiveClass) {
    const burger = document.querySelector(burgerSelector),
          menu = document.querySelector(menuSelector);

    burger.addEventListener('click', function () {
       burger.classList.toggle(burgerActiveClass);
       menu.classList.toggle(menuActiveClass); 
    });
}

export default nav;