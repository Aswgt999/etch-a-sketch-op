// function to get the no of squares and to generate board
function promptAndGenerateSquares() {
    const noOfSquares = parseInt(prompt("How many squares(limit=100)?"));
    if (noOfSquares > 100) {
        alert("Above limit!!");
    } else if (noOfSquares < 0) {
        alert("Below limit");
    } else {
        const container = document.querySelector(".container");
    
    // Initializing container for etch-a-sketch
    container.style.border = "5px solid black";
    container.innerHTML = "";
    container.style.width = (noOfSquares * 10) + "px";
    container.style.height = (noOfSquares * 10) + "px";
    
    // Generating etch-a-sketch board 
    for (let i = 0; i < noOfSquares; i++) {
        for (let j = 0; j < noOfSquares; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.className = "square";
            container.appendChild(gridSquare);
        } 
    }

    // Code for persistence of hover effect
    document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', () => {
    square.classList.add('drawn');
        });
    });
    }
}

// Function to clear sketch
function clearSketch() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.transition = 'none';
        square.classList.remove('drawn');

        requestAnimationFrame(() => {
            square.style.transition = '';
        });
    });
}