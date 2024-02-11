const sketch = document.getElementById('sketch');
const resize = document.getElementById('resize');
const color_buttons = document.querySelectorAll('.color-button');
const custom_color = document.getElementById('custom');
const color_picker = document.getElementById('color-picker');

var coordinates;
var color = "black";
var rows_grid = 16;
var cols_grid = 16;

resize.addEventListener('click', resizeGrid);
custom_color.addEventListener('click', () => {
    color_picker.click();
});
color_picker.addEventListener('input', () => {
    color = color_picker.value;
    console.log(color);
});
Array.prototype.forEach.call(color_buttons, (color_button) => {
    color_button.addEventListener('click', () => {
        color = color_button.id;
    });
});

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
    getCoordinates();
}

function resizeGrid () {
    let cols = prompt("Enter the number of columns of your sketch");
    let rows = prompt("Enter the number of rows of your sketch");
    cols_grid = cols;
    rows_grid = rows;
    setSketch();
}

function getCoordinates() {
    coordinates = document.getElementsByClassName('col');
    Array.from(coordinates).forEach((coordinate) => {
        coordinate.addEventListener('mouseover', colorSketch);
    });
}

function colorSketch (coordinate) {
    console.log(coordinate.currentTarget.style.backgroundColor, color);
    coordinate.currentTarget.style.backgroundColor = color;
}