import nav from './modules/nav';
import contacts from './modules/contacts';
import { formsCheck } from './modules/forms';
import { sendForm } from './modules/forms';
import scroll from './modules/scroll';
import menu from './modules/menu';

document.addEventListener('DOMContentLoaded', function () {
   nav(".nav-burger", "burger__active", ".menu", "menu__active"); 
   menu(".menu-list__item", '.menu', 'menu__active', '.nav-burger', 'burger__active');
   contacts("contacts-form__messageInput", "contacts-form__messageBlockCounter", 600);
   formsCheck('.contacts-form');
   sendForm('.contacts', '.contacts-form', '.success', ".success-block__btn");
   scroll();
});