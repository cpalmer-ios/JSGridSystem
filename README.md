# JSGridSystem

JS Grid System - Homeppl - Chris Woolf 01.01.2021


This test requires no reeal dependencies.

You can just open your browser at the path of demo.html after downloading to your machine:

example:
file:///Users/{your_username}/path/to/folder/Homeppl-JSGrid/demo-template/demo.html

and the code should run.


Building the grid.

Please refer to the text on the homepage for a descriptiion on how to edit the JSON data for your requirements.


The code uses a bootstrap like functionality to implement the 12-column system.

The set number of columns (default is 12) can be changed to whatever you want.

The blocks are individually colourd to show the space they take up on the screen.







Any text you set in side the blocks in the HTML is copied over to the JS and redistributed back to the HTML.

inside the JSON configuratiion you can change the block widths by using the blocks array:


For example if you set responsive: {
  columns: 6
}







blocks can be [3, 2, 1]

The HTML Must also reflect this however....


  <div class="jsgrid_item"></div> - will be width 3
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 2

  If not, the grid will still try to run with the items it can find and store into an array.



Another example of the JSON HTML block configuration would be this:


JSON: {
    ...
responsive: {
  columns: 12
}
blocks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

...
  }

HTML:


  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 1






Another would be this:


JSON: {
    ...
responsive: {
  columns: 24
}
blocks: [5, 5, 5, 5, 4]

...
  }

HTML:


  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 4