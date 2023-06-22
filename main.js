const rowInput = document.querySelector('#rowsize');
const colInput = document.querySelector('#colsize');
const playButton = document.querySelector('#play');
const errorSentence = document.querySelector('#error');
const maindocs = document.querySelector('#container');
let lightness = 100;

function checkValid(rowSize, colSize){
    console.log(rowSize, colSize);
    if(1 <= rowSize && rowSize <= 100 &&
        1 <= colSize && colSize <= 100){
            errorSentence.textContent = '';
            return true;
        }
    errorSentence.textContent = 'must be a number between 1-100!';
    return false;
}

function generateColor(){
    if(lightness > 0) lightness -= 1;
    return `hsl(${Math.floor(Math.random()*360)}, 
    ${Math.floor(Math.random()*100)}%, ${lightness}%)`;
}

playButton.addEventListener('click', () => {
    const prevGrid = document.querySelector('#grid');
    if(prevGrid != null){
        maindocs.removeChild(prevGrid);
    }
    lightness = 100;
    let rowSize = parseInt(rowInput.value);
    let colSize = parseInt(colInput.value);
    if(!checkValid(rowSize, colSize)) return;
    console.log('valid');
    const currentGrid = document.createElement('div');
    currentGrid.setAttribute('id', 'grid');
    for(let i = 0; i < rowSize; i++){
        const currentRow = document.createElement('div');
        currentRow.classList.add('row');
        for(let j = 0; j < colSize; j++){
            const currentCol = document.createElement('div');
            currentCol.classList.add('column');
            currentCol.addEventListener('mouseenter', () => {
                currentCol.style.backgroundColor = generateColor();
            })
            currentRow.appendChild(currentCol);
        }
        currentGrid.appendChild(currentRow);
    }
    maindocs.appendChild(currentGrid);
})