document.addEventListener("DOMContentLoaded", function(event) {
    // Set the pixelCanvas, sizePicker and buttons as variables
    const pixelGrid = document.getElementById('pixelGrid');
    const sizePicker = document.getElementById('sizePicker');
    const submitButton = document.getElementById("submitBtn");
    const eraseButton = document.getElementById("eraseBtn");

    // Select color input
    var gridColor = document.getElementById('colorPicker');
    // Select size input
    var gridHeight = document.getElementById('inputHeight');
    var gridWidth = document.getElementById('inputWidth');

    // When size is submitted by the user, call makeGrid()
    submitButton.addEventListener('click', function(g) {
        //used for testing console.log("User selected grid size");

        //clears grid to prevent new grids from being appended onto the existing one 
        //if user hits submit more than once 
        pixelGrid.innerHTML = " ";
        //keeps changes
        g.preventDefault();
        //call the function
        makeGrid();

    });

    //erases the grid
    eraseButton.addEventListener('click', function(e) {
        //used for testing console.log("User clicked erase button");
        e.preventDefault();
        pixelGrid.innerHTML = " ";

    });

    pixelGrid.addEventListener('click', function(g) {
        // prevents other cells not selected from being colored in
        if (g.target.nodeName === 'TD') {
            g.target.style.backgroundColor = gridColor.value;
        }

    });

    //removes the color from the cell on double click
    pixelGrid.addEventListener('dblclick', g => {
        //used for testing console.log("user double clicked cell");
		if (g.target.nodeName === 'TD') {
        	g.target.style.backgroundColor = null;
		}
    });

    function makeGrid(g) {
        //makeGrid function using nested for loops to create the grid
        for (var i = 0; i < gridHeight.value; i++) {
            const row = pixelGrid.insertRow(0);
            for (var j = 0; j < gridWidth.value; j++) {
                row.insertCell(0);
            }
        }
    }
});
