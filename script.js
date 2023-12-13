let rangeControl = document.querySelector('#rangeControl');

function drawingController() {
    let cellCount = setCellCount();
    let boardSize = cellCount * cellCount;
    let cellSize = Math.floor(960/cellCount);
    cellCreator(boardSize, cellSize);

}

function cellCreator (boardSize, cellSize) {
    let sketchPad = document.querySelector(`.sketchPad`);
    let cell = null;
    sketchPad.innerHTML = '';
    for (let i = 0; i < boardSize; i++) {
        cell = document.createElement('div');
        cell.setAttribute( `class`, `cell`);
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener('mouseenter', onHover);
        sketchPad.appendChild(cell);
    }

    
}

function onHover() {
    this.setAttribute('class', 'cell once');
}

function setCellCount() {
    let cellCount = null;
    let size = rangeControl.value;
    let sizeDisplay = document.querySelector('.sizeDisplay > P');
    if (size) {
        sizeDisplay.textContent = size;
        cellCount = size;
        return cellCount
    } else {
        return 'error';
    }
}

function handleRangeChange(e) {
    if(!e) {
        return 'error';
    } else {
        let sizeDisplay = document.querySelector('.sizeDisplay > P');
        let size = e.currentTarget.value;
        sizeDisplay.textContent = size;
        drawingController();
    }
}

addEventListener("load", drawingController);
rangeControl.addEventListener('input', handleRangeChange);

