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
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

playButton.addEventListener('click', () => {
    const prevGrid = document.querySelector('#grid');
    if(prevGrid != null){
        maindocs.removeChild(prevGrid);
    }
    lightness = 100;
    let rowSize = parseInt(rowInput.value);
    let colSize = parseInt(colInput.value);
    let activeDrawing = false;
    if(!checkValid(rowSize, colSize)) return;
    console.log('valid');
    const currentGrid = document.createElement('div');
    currentGrid.setAttribute('id', 'grid');
    currentGrid.addEventListener('mousedown', () => {
        activeDrawing = true;
    })
    currentGrid.addEventListener('mouseup', () => {
        activeDrawing = false;
    })
    for(let i = 0; i < rowSize; i++){
        const currentRow = document.createElement('div');
        currentRow.classList.add('row');
        for(let j = 0; j < colSize; j++){
            const currentCol = document.createElement('div');
            currentCol.classList.add('column');
            
            currentCol.addEventListener('mouseenter', () => {
                if(activeDrawing){
                    currentCol.style.backgroundColor = generateColor();
                }
            })
            currentRow.appendChild(currentCol);
        }
        currentGrid.appendChild(currentRow);
    }
    maindocs.appendChild(currentGrid);
})