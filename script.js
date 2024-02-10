const container = document.getElementById('container');
const rows = document.getElementsByClassName('row');

for (let i = 0;i < 16; i++) {
    var row = document.createElement('div');
    row.classList.add("row");
    container.appendChild(row);
}

for(let row = 0; row < rows.length; row++) {
    for (let i = 0; i < 16; i++) {
        var col = document.createElement('div');
        col.classList.add("col")
        rows[i].appendChild(col);
    }
}
