// JavaScript source code


function updatePage() {
    var num1 = Math.floor(Math.random() * 255);
    var num2 = Math.floor(Math.random() * 255);
    var num3 = Math.floor(Math.random() * 255);
    document.getElementById('hi').style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
}

document.getElementById('button').addEventListener('click', updatePage, false);