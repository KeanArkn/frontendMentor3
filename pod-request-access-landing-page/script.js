let email = document.getElementById("email");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    validateEmail(email);
});
email.addEventListener("blur", function() {
    validateEmail(email);
});

function validateEmail(input) {
    let inputArea = input.parentElement;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.trim() === "") {
        inputArea.classList.add("error");
    } else if (!emailPattern.test(input.value.trim())) {
        inputArea.classList.add("error");
    } else {
        inputArea.classList.remove("error");
    }
}