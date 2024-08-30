function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let format = /^pet_\d{4}[a-zA-Z]+$/g;
    let result = document.getElementById('result'); 

    if (input.match(format)) {
        result.innerHTML = "Vaid Syntax 🟢"
    }
    else {
        result.innerHTML = "Invalid syntax 🔴"
    }
}