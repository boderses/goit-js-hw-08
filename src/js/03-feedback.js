import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

onPageLoad();

feedbackForm.addEventListener("input", throttle(addDataToLocalStorage, 500));
feedbackForm.addEventListener("submit", onFormSubmit);

const onInput = () => ({
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
});
    
function addDataToLocalStorage() {
    const inputData = onInput();
    localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
}

function onPageLoad() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        feedbackForm.elements.email.value = parsedData.email;
        feedbackForm.elements.message.value = parsedData.message
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(onInput());
    localStorage.clear();
    feedbackForm.reset();
}