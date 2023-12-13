function cellCreator () {
    let sketchPad = document.querySelector(`.sketchPad`);
    let cell = null;
    for (let i = 0; i < 256; i++) {
        
        cell = document.createElement('div');
        cell.setAttribute( `class`, `cell`);
        cell.addEventListener('mouseenter', onHover);
        sketchPad.appendChild(cell);
    }

    
}

function onHover() {
    this.setAttribute('class', 'cell once');
}

addEventListener("load", cellCreator);
