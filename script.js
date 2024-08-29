function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let num = /^\d{4}$/g;
    let char = /[^a-zA-Z]/g;

    let result = document.getElementById('result'); 

    if (input.startsWith('pet_') && num && char) {
        result.innerHTML = "Vaid Syntax 🟢"
    }
    else {result.innerHTML = "Invalid syntax 🔴"}
}