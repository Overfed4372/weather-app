import Loading from './images/giphy.gif';
export default class Ui {
    static elements = {
        entirePage: () => document.querySelector(":root"),
        loading: () => document.querySelector(".loading"),
        city: () => document.querySelector(".city-country"),
        temp: () => document.querySelector(".temp_c")
    }
    static #clearApp (){
        Ui.elements.city().innerHTML = ``;
        Ui.elements.temp().innerHTML = ``;         
    }
    static #clearLoading () {
        Ui.elements.loading().innerHTML = ``;
    }
    static #toggleDayOrNight (dayNight){
        const dayCssText = "url('./images/arindam-saha-rSLIzC-dlB4-unsplash.jpg')";
        const nightCssText = "url('./images/guille-pozzi-SHcHVFhz7-M-unsplash.jpg')";
        // // Ui.elements.entirePage().cssText = dayCssText;
        // Ui.elements.entirePage().style.background = dayNight === 1 && dayCssText 
        // || nightCssText;
        Ui.elements.entirePage().className = dayNight === 1 && "day" || "night";
    }
    static update (data) {
        Ui.#clearApp();
        Ui.#clearLoading();
        Ui.#toggleDayOrNight(data.dayOrNight);
        Ui.elements.city().innerHTML = `${data.city}, ${data.country}`;
        Ui.elements.temp().innerHTML = `${data.temp_c}°C`;
    }
    static showLoading () {
        const gifIcon = new Image(150,150);
        gifIcon.src = Loading;
        Ui.#clearApp();
        Ui.elements.loading().appendChild(gifIcon);
    } 
    static showTypeError () {
        Ui.#clearApp();
        Ui.#clearLoading();
        Ui.elements.city().innerHTML = `Ops, could you try something else?`;
    } 
    static showNetworkError () {
        Ui.#clearApp();
        Ui.#clearLoading();
        Ui.elements.city().innerHTML = `Sorry, network error happend!`;
    } 
}