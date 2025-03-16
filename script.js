// Select the container div
let container = document.getElementById("container");

// Loop to create 16 div elements
for (let i = 0; i < 16; i++) {
    let grid = document.createElement("div"); // Create a new div
    container.appendChild(grid); // Append to the container
}
