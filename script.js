const mainBox = document.querySelector('.main');
const resetButton = document.querySelector('button');

function addBox() {

    let box = document.createElement('div');
    box.className = 'box'
    
    mainBox.appendChild(box);
}

function fillWithBoxes(numPerSide) {

    for (let i = 1; i <= (numPerSide*numPerSide); i++){
        addBox();
    }

    let boxesContainer = Array.from(document.querySelectorAll('.box'))
    let flexPercent = (100/numPerSide)

    boxesContainer.forEach((box) => {
        box.style.flex = `0 0 calc(${flexPercent}% - 1px)`;

        let isMouseDown = false;
        box.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = randomRGB();
            });
        
        box.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) {
                e.target.style.backgroundColor = randomRGB();
            }
        })
    })
    
}

function randomRGB() {
    let r = Math.floor((Math.random()*255)+1);
    let g = Math.floor((Math.random()*255)+1);
    let b = Math.floor((Math.random()*255)+1);

    return `rgb(${r}, ${g}, ${b})`;
}

function resetBoxes() {
    let boxesContainer = Array.from(document.querySelectorAll('.box'))
    boxesContainer.forEach((box) => {box.remove()})
}

function resetButtonEvent() {
    let numPerSide = prompt('How many boxes?')
    if (numPerSide > 100) {
        alert('Too high! up to 100 allowed.');
    }

    else{
        resetBoxes();
        fillWithBoxes(numPerSide);
    }
}

resetButton.addEventListener('click', resetButtonEvent);
fillWithBoxes(25);

