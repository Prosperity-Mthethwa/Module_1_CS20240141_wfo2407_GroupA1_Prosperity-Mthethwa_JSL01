function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; 
    
    if (input.startsWith('pet_')) {
        // Check if the characters after "pet_" are all digits (year)
        let year = input.substring(4, 8);
        if (!isNaN(year)) {
            // Check if the characters after the year are all letters
            let petName = input.substring(8);
            let containsOnlyLetters = true;
            for (let i = 0; i < petName.length; i++) {
                if (!isLetter(petName[i])) {
                    containsOnlyLetters = false;
                    break;
                }
            }
            if (containsOnlyLetters) {
                result = "Valid Syntax";
            } else {
                result = "Invalid Syntax";
            }
        } else {
            result = "Invalid Syntax";
        }
    } else {
        result = "Invalid Syntax";
    }
}


