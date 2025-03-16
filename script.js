let container = document.getElementById("container");
let gridSize = 16;

function createGrid (size) {

    container.innerHTML = "";
    let squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {

        let grids = document.createElement("div"); 
        grids.classList.add("grid-square");
        grids.style.width = `${squareSize}px`;
        grids.style.height = `${squareSize}px`;
        
        container.appendChild(grids); 
        grids.addEventListener("mouseover", function() {
        this.classList.add("hovered"); });
    }
}

function generateGrid() {
    let newSize = prompt("Enter new grid size (Max: 100):");
    newSize = parseInt(newSize);

    if (Number.isInteger(newSize) && newSize >= 1 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    }else {
        alert("Invalid input! Please enter a number between 1 and 100.");
    }
}

function resetGrid() {
    let squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => square.classList.remove("hovered"));
}


createGrid(gridSize)