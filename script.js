const year = document.body.querySelector("#year");
const month = document.body.querySelector("#month");
const date = document.body.querySelector("#day");

const y = document.body.querySelector("#y");
const m = document.body.querySelector("#m");
const d = document.body.querySelector("#d");

const submit = document.body.querySelector("#button")

const gMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const gday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

submit.addEventListener("click", () => {
    let today = new Date();

    // d.innerHTML = date.value[today.getDate()];
    d.textContent = (date.value - today)
    event.preventDefault()


})
