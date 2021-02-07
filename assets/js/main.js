import "nodelist-foreach-polyfill";
import "@babel/polyfill";

import heightTitle from "./module/heightTitle";
import closeOpenSubMenu from "./module/closeOpenSubMenu";
import search from "./module/search";
import countIngredients from "./module/countIngredients";
import slider from "./module/slider";

document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    heightTitle();

    closeOpenSubMenu();

    search();

    countIngredients();

    slider();

    // количесво символов в описании поста
    const shortDescription = document.querySelector('.short-description');
    console.log(shortDescription.textContent.length);
    // количесво символов в описании поста
    // почему не работает

    console.log('New!')

});