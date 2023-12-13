let rangeControl = document.querySelector('#rangeControl');

function cellCreator () {
    let sketchPad = document.querySelector(`.sketchPad`);
    let cell = null;
    let cellCount = setCellCount();
    let boardSize = cellCount * cellCount;
    let cellSize = Math.floor(960/cellCount);
    console.log(cellSize);
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

function setCellCount(size) {
    let cellCount = null;
    if (!size) {
        cellCount = 16;
        return cellCount
    } else {
        cellCount = size;
        return cellCount;
    }
}

function changeCellCount(e) {
    if(!e) {
        return 'error';
    } else {
        let sizeDisplay = document.querySelector('.sizeDisplay > P');
        let size = e.currentTarget.value;
        sizeDisplay.textContent = size;
        setCellCount(size);
    }
}

addEventListener("load", cellCreator);
rangeControl.addEventListener('input', changeCellCount);

