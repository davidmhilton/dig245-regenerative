
/* javascript */
const container = document.getElementById("container");
const cell_size = 40;
let width = window.innerWidth;
let cols = Math.ceil(width/cell_size);

makeRows(cols*4, cols*4);

document.addEventListener("click", randColor);

let e = new MouseEvent("dbclick");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        cell.id = c;
        container.appendChild(cell);
  };
};

function randColor(e){
    let x = e.clientX;
    let y = e.clientY;
    patternZero(x, y);
}

function newColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    color = "#"+color;
    return color;
}

function patternZero(x, y){
    const color = newColor();
    let n = (Math.floor(Math.random()*2))+1
    for (let i = -n; i<(n+1) ; i++){
        for(let j = -n; j< (n+1); j++){
            let new_x = Math.floor(x+(i*cell_size));
            let new_y = Math.floor(y+(j*cell_size));
            try{
                const square = document.elementFromPoint(new_x, new_y);
                square.style.backgroundColor = color;
            }
            catch{
                continue;
            }
        }
    }
}