let button = document.querySelector("#mainButton");
let originalText = document.querySelector("#textChange").textContent;
let clicked = false;

button.addEventListener('click', () => {
    if(clicked) {
        document.querySelector('#textChange').textContent = originalText;
        button.textContent = "Click Me"
        clicked = false
    } else {
        document.querySelector('#textChange').textContent = "You failed the test....."
        button.textContent = 'Click again'
        clicked = true;
    }
})

