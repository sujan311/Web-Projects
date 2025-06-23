// script.js
const colorGrid = document.querySelector('.color-grid');

// generate color grid
for (let i = 0; i < 9; i++) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = getRandomColor();
    colorGrid.appendChild(colorDiv);
}

// function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}