//event listeners
window.onload = initGrid; //loads 16x16 grid
document.getElementById('redBtn').addEventListener('click', colorChange);
document.getElementById('greenBtn').addEventListener('click', colorChange);
document.getElementById('blueBtn').addEventListener('click', colorChange);
document.getElementById('clearBtn').addEventListener('click', resetColor);
document.getElementById('expandBtn').addEventListener('click', changeGrid);
document.getElementById('rowRange').addEventListener('change', updateRange);
document.getElementById('resetGrid').addEventListener('click', resetGrid);
//variables
const mainDiv = document.getElementById('container');
let rangeNum = document.getElementById('rowRange');

//intial grid 16X16
function initGrid() {
  for (let i = 1; i <= 256; i++) {
    const newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.classList = 'cell';
    newDiv.addEventListener('mouseover', hoverColor);
  }
}
//change grid
function changeGrid() {
  let row = rangeNum.value;
  let gridArea = row * row;
  //generates new divs to be added into the container
  for (let i = 16; i <= gridArea; i++) {
    let newDiv = document.createElement('div');
    document.getElementById('container').appendChild(newDiv);
    newDiv.classList = 'cell';
    newDiv.addEventListener('mouseover', hoverColor);
  }
  //container grid is updated based on entered value
  container.style.gridTemplateColumns = `repeat(${row} ,1fr)`;
  container.style.gridTemplateRows = `repeat(${row} ,1fr)`;
  resetColor();
}
//slider value
function updateRange() {
  document.getElementById('range').value = rangeNum.value;
}

//reset grid back to 16x16
function resetGrid() {
  container.style.gridTemplateColumns = 'repeat(16 ,1fr)';
  container.style.gridTemplateRows = 'repeat(16 ,1fr)';
}
//color selection, based on button value
function colorChange() {
  color = event.target.value;

}
//default color, until specified with selection
let color = '#564E58'
//sends value to mouseover event
function hoverColor() {
  this.style.background = color;
}

//Wipe canvas clean
function resetColor() {
  const gridCell = document.querySelectorAll('.cell');
  gridCell.forEach(element => {
    element.style.background = 'lightgrey';
  })
}




