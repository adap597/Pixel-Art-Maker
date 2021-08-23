# Pixel Art Maker Project

This is a project from the Udacity Intro to Programming Nanodegree. The goal of the project is to apply knowledge learned about HTML, CSS, and JavaScript. The student is provided starter HTML and CSS files. Their job is to build out the design.js file for the interactive elements of the page. The final product is an interactive Pixel Art Maker. 


1. Define your variables by selecting the DOM elements that the user will interact with. This is where your JavaScript variables can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.

2. Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.

3. Set the size of the cross stitch canvas as an _N_ by _M_ grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.

The final product should allow the user to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.

This is my final submission for the project. In addition to the base requirements, I also included the following features:

1. Grid size limit 100 x 100
2. Start Over Button that deletes the grid
3. Clear Grid Button clears the grid of any filled squares but maintains the same grid size
4. Double Clicking a filled square removes the color
