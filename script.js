let firstName = prompt("What's your first name ? :");
function sayHello(firstName, hour){
let message = "Bonjour " + firstName + " !";
if (hour >= 18){
    message = "Bonsoir " + firstName + " !";
}
document.querySelector('h1').innerText = message;
}
sayHello(firstName);