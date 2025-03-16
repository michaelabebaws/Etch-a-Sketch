// Select the container div
let container = document.getElementById("container");

// Loop to create 16 div elements
for (let i = 0; i < 256; i++) {
    let grids = document.createElement("div"); // Create a new div
    container.appendChild(grids); // Append to the container
    grids.classList.add("grid-square");

    grids.addEventListener("mouseover", function() {
        this.classList.add("hovered"); // Add class (method 1)
        // this.style.backgroundColor = "darkblue"; // Alternative (method 2)
    });
}
