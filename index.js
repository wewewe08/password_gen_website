const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let passwordElement1, passwordElement2;

window.addEventListener("DOMContentLoaded", () => {
    passwordElement1 = document.getElementById("password1")
    passwordElement2 = document.getElementById("password2")
});

function DisplayPasswords() {
    let passwordLength = document.getElementById("password-length")
    if (passwordLength.value > 32) {
        window.alert("Password length too long!");
        return;
    }

    GeneratePassword(passwordElement1, passwordLength);
    GeneratePassword(passwordElement2, passwordLength);
}

function GeneratePassword(element, length){
    element.innerText = "" // clear the text field
    for (let i = 0; i < length.value; i++) {
        let randomCharIndex = Math.floor(Math.random() * characters.length);
        element.innerText += characters[randomCharIndex];
    }
}
