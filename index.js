const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

window.addEventListener("DOMContentLoaded", () => {
    let passwordElement1 = document.getElementById("password1")
    let passwordElement2 = document.getElementById("password2")
});

function DisplayPasswords() {
    GeneratePassword(passwordElement1);
    GeneratePassword(passwordElement2);
}

function GeneratePassword(element){
    let passwordLength = document.getElementById("password-length")
    for (let i = 0; i < passwordLength.value; i++) {
        let randomCharIndex = Math.floor(Math.random() * characters.length);
        element.innerText += characters[randomCharIndex];
    }
}
