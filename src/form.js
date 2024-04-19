export default class Form {
    static elements = {
        form: () => document.querySelector(".form form"),
        input: () => document.querySelector(".form form input[id='location']"),
        submit : () => document.querySelector(".form form button[type='submit']")
    }
    static getLocation () {
        return (Form.elements.input().value) ? Form.elements.input().value : null;
    }
    static clearForm () {
        Form.elements.input().value = "";
    }
    static submitForm (postSubmitFunction) {
        Form.elements.form().addEventListener("submit", (event) => {
            postSubmitFunction();
            Form.clearForm();
            event.preventDefault();
        });
    }
}