const emailEl = document.getElementById("#email");
let passwordEl = document.getElementById("password");
const errorEl = document.getElementById("error");
const loginEl = document.getElementById("login");
const submitEl = document.getElementById("submit");
let confirmPasswordEl = document.getElementById("confirmPassword");
submitEl.addEventListener("click",() => {
    if(passwordEl.value !== confirmPasswordEl.value) {
        errorEl.textContent = "Passwords do not match"
        setTimeout(() => {
            errorEl.textContent = null
        },5000)
    } else {
        errorEl.style.color = "blue";
        errorEl.textContent = "Welcome to Tailwind Css"
        setTimeout(() => {
            errorEl.textContent = null
        },5000)
    }
})