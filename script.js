function cellCreator () {
    let sketchPad = document.querySelector(`.sketchPad`);
    let cell = null;
    for (let i = 0; i < 9; i++) {
        cell = document.createElement('div');
        cell.setAttribute( `class`, `cell`);
        sketchPad.appendChild(cell);
    }

    
}

addEventListener("load", cellCreator);