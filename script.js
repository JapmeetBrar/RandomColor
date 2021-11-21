const btn = document.querySelector('.btn');
const bod = document.querySelector('body');
const text = document.querySelector('p');
const copybtn = document.querySelector('.copybtn');

btn.addEventListener('click', randomColor);

copybtn.addEventListener('click', copy)

function copy(){
    let color = text.textContent;
    let num = color.length;
    let newtext = color.slice(num-8, num-1)

    navigator.clipboard.writeText(newtext);
}

function randomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    bod.style.backgroundColor = "#" + randomColor;
    text.textContent = "Current Color: #" + randomColor; 
}