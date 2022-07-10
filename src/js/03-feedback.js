import throttle from 'lodash.throttle'; 


const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    textArea: document.querySelector('.feedback-form textarea'),
    inputMail: document.querySelector('.feedback-form input')
};
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaInput, 500));

populateTextArea();

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    JSON.parse(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}
function onTextAreaInput() {
    formData.email = refs.inputMail.value;
    formData.message = refs.textArea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateTextArea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {
        refs.inputMail.value = savedMessage.email;
        refs.textArea.value = savedMessage.message;
    }
    // console.log(savedMessage)     
}