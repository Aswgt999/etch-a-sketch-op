function promptAndGenerateSquares() {
    const noOfSquares = parseInt(prompt("How many squares(limit=100)?"));
    const container = document.querySelector(".container");
    
    container.innerHTML = "";
    container.style.width = (noOfSquares * 10) + "px";
    container.style.height = (noOfSquares * 10) + "px";
    for (let i = 0; i < noOfSquares; i++) {
        for (let j = 0; j < noOfSquares; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.className = "square";
            container.appendChild(gridSquare);
        } 
    }
}

// const container = document.querySelector(".container");

// const gridSquare = document.createElement('div');
// gridSquare.className = "square";


// containerOfGrid.appendChild(gridSquare);

// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         const gridSquare = document.createElement('div');
//         gridSquare.className = "square";
//         container.appendChild(gridSquare);
//     } 
// }