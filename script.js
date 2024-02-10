const sketch = document.getElementById('sketch');
const resize = document.getElementById('resize');

var rows_grid = 16;
var cols_grid = 16;

resize.addEventListener('click', resizeGrid);

setSketch();

function setSketch() {
    sketch.innerHTML = "";
    var col_size = Math.round(sketch.offsetWidth / cols_grid);

    for (let i = 0;i < rows_grid; i++) {
        let row = document.createElement('div');
        row.classList.add("row");
        sketch.appendChild(row);
    }

    for(let row = 0; row < rows_grid; row++) {
        for (let i = 0; i < cols_grid; i++) {
            let col = document.createElement('div');
            col.classList.add("col");
           
            col.style.width = col_size + "px";
            col.style.height = col_size + "px";
            sketch.children[row].appendChild(col);
        }
    }
}

function resizeGrid () {
    let cols = prompt("Enter the number of columns of your sketch");
    let rows = prompt("Enter the number of rows of your sketch");
    cols_grid = cols;
    rows_grid = rows;
    setSketch();
}