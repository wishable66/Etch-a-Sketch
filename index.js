const bts = document.querySelectorAll('.btn-color, .btn-eraser');
const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('#colorPicker');
const clearBtn = document.querySelector('.reset');
const range = document.querySelector('input[type="range"]');
const gridSize = document.querySelector('.grid-size');
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const mode = document
    .querySelector('.active')
    .parentElement.className.split('-')[1];
populateGrid(16, 16);
function populateGrid(rows, cols) {
    if (grid.children.length > 0)
        removeAllChildNodes(grid);
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < rows * cols; c++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', (e) => {
            const mode = document
                .querySelector('.active')
                .parentElement.className.split('-')[1];
            const target = e.target;
            if (mode === 'color') {
                const color = document.querySelector('#colorPicker');
                target.style.background = color.value;
            }
            if (mode === 'eraser') {
                target.style.background = '#E8E8E8';
            }
        });
    }
}
bts.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        const activeBtn = document.querySelector('.active');
        let btnElement;
        let pElement;
        if (target.nodeName === 'P') {
            btnElement = target.parentElement;
            pElement = target;
        }
        else {
            btnElement = target;
            pElement = target.children.item(0);
        }
        // Adding styling
        activeBtn.classList.remove('active');
        pElement.classList.add('active');
    });
});
clearBtn.addEventListener('click', () => {
    populateGrid(16, 16);
    gridSize.textContent = '16 x 16';
    range.value = '16';
});
range.addEventListener('input', (e) => {
    const target = e.target;
    const size = target.value;
    return (gridSize.textContent = `${size} x ${size}`);
});
range.addEventListener('change', (e) => {
    const target = e.target;
    populateGrid(target.value, target.value);
});
