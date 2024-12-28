import "../index.css";
import JS_IMAGE from "../assets/JavaScript-logo.png"

console.log('Hello World!');

const jsImageHTML = document.createElement('img');
jsImageHTML.src = JS_IMAGE;
jsImageHTML.className = 'js-image';

document.body.append(jsImageHTML);