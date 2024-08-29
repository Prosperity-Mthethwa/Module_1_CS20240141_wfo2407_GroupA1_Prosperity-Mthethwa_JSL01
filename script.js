function validateSyntax() {
    let input = document.getElementById('petInput').value;
    

    let result = document.getElementById('result'); 

    if (input.startsWith('pet_')) {
        result.innerHTML = "Vaid Syntax 🟢"
    }
    else {
        result.innerHTML = "Invalid syntax 🔴"
    }
}