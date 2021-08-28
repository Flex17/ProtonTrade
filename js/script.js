import nav from './modules/nav';
import contacts from './modules/contacts';
import formsCheck from './modules/forms';
import scroll from './modules/scroll';

document.addEventListener('DOMContentLoaded', function () {
   nav(".nav-burger", "burger__active", ".menu", "menu__active"); 
   contacts("contacts-form__messageInput", "contacts-form__messageBlockCounter", 600);
   formsCheck('.contacts-form');
   scroll();
});