
/* javascript */
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.className = "grid-item";
    cell.id = c;
    // container.appendChild(cell).className = "grid-item";
    container.appendChild(cell);
  };
};

makeRows(18, 32);

document.addEventListener("click", randColor);

let e = new MouseEvent("dbclick");

function randColor(e){
    let x = e.clientX;
    let y = e.clientY;
    const elementAtClick = document.elementFromPoint(x, y);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#"+randomColor;
    elementAtClick.style.backgroundColor = randomColor;
    paint(x, y, randomColor);
}

function paint(x, y, color){
    // const num = Math.floor(Math.random()*4);
    // num = 0
    // if (num === 0){
    //     patternZero(x,y);
    // }
    // else if (num === 1){
    //     patternOne(x,y,color);
    // }
    // else if (num === 2){
    //     patternTwo(x,y,color);
    // }
    // else{
    //     patternThree(x,y,color);
    // }
    patternZero(x,y);
}

function newColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    color = "#"+color;
    return color;
}

function patternZero(x, y){
    let n = (Math.floor(Math.random()*2))+1
    for (let i = -n; i<(n+1) ; i++){
        for(let j = -n; j< (n+1); j++){
            const square = document.elementFromPoint(x+(i*41), y+(j*41));
            const color = newColor();
            square.style.backgroundColor = color;
        }
    }
}

// function patternOne(x,y,color){
//     const a = document.elementFromPoint(x+41, y+41);
//     a.style.backgroundColor = color;
//     const b = document.elementFromPoint(x-41, y-41);
//     b.style.backgroundColor = color;
//     const c = document.elementFromPoint(x+41, y-41);
//     c.style.backgroundColor = color;
//     const d = document.elementFromPoint(x-41, y+41);
//     d.style.backgroundColor = color;
// }

// function patternTwo(x,y,color){
//     const a = document.elementFromPoint(x, y-41);
//     a.style.backgroundColor = color;
//     const b = document.elementFromPoint(x, y+41);
//     b.style.backgroundColor = color;
//     const c = document.elementFromPoint(x+41, y+41);
//     c.style.backgroundColor = color;
//     const d = document.elementFromPoint(x-41, y+41);
//     d.style.backgroundColor = color;
// }

// function patternThree(x,y,color){
//     const a = document.elementFromPoint(x, y-41);
//     a.style.backgroundColor = color;
//     const b = document.elementFromPoint(x-41, y-41);
//     b.style.backgroundColor = color;
//     const c = document.elementFromPoint(x+41, y-41);
//     c.style.backgroundColor = color;
//     const d = document.elementFromPoint(x, y+41);
//     d.style.backgroundColor = color;
// }