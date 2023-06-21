const rowInput = document.querySelector('#rowsize');
const colInput = document.querySelector('#colsize');
const playButton = document.querySelector('#play');
const errorSentence = document.querySelector('#error');
const maindocs = document.querySelector('#container');

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

playButton.addEventListener('click', () => {
    let rowSize = parseInt(rowInput.value);
    let colSize = parseInt(colInput.value);
    if(!checkValid(rowSize, colSize)) return;
    console.log('valid');
    const currentGrid = document.createElement('div');
    for(let i = 0; i < rowSize; i++){
        const currentRow = document.createElement('div');
        currentRow.classList.add('row');
        for(let j = 0; j < colSize; j++){
            const currentCol = document.createElement('div');
            currentCol.classList.add('column');
            currentCol.addEventListener('mouseenter', () => {
                currentCol.classList.add('hovered');
            })
            currentCol.addEventListener('mouseleave', () => {
                currentCol.classList.remove('hovered');
            })
            currentRow.appendChild(currentCol);
        }
        currentGrid.appendChild(currentRow);
    }
    maindocs.appendChild(currentGrid);
})