# JSGridSystem

## JS Grid System - Chris Woolf 01.01.2021


<b>requires no dependencies or installation.</b>

You can just open your browser at the path of demo.html after downloading to your machine:

example:
file:///Users/{your_username}/path/to/folder/Homeppl-JSGrid/demo-template/demo.html

and the code should run.


## Building a Grid 

The code uses a bootstrap like functionality to implement the 12-column system.

The set number of columns (default is 12) can be changed to whatever you want.

The blocks in the example are individually coloured to show the space they occupy take up on the screen.

### Grids can be fetched with HTML and rendered with a JSON config:

inside the JSON configuratiion you can change the block widths by using the blocks array:

For example if you set: 

##### JSON config

```
{
        "id": "#grid",
        "dimensions": {
          "height": "200",
          "margin": "0",
          "minHeight": "100",
          "maxHeight": "300"
        },
        "animations": {
        "fadeInSpeed": "500"
        },
        "style": {
          "background": "random",
          "borderRadius": "5"
        },
        "responsive": [
          {
            "breakpoint": 1440,
            "columns": 12
          },
          {
            "breakpoint": 1440,
            "columns": 12
          },
        ],
        "blocks": [1, 11, 1]
    }

```

blocks could also be [3, 2, 1] or [ 5,5,2 ].


The HTML <b>must</b> also reflect the relative number of blocks needed to fill the maximum number of columns ...


##### HTML / JSON setup
```
  <div class="jsgrid_item"></div> - will be width 3
  <div class="jsgrid_item"></div> - will be width 1
  <div class="jsgrid_item"></div> - will be width 2

```

If grid items or blocks or both are too many... the grid will still return thee correct number of items to fill the maximum number of columns.

If there are not enough jsgrid_items in the HTML then the blocks that exist will still be added to the grid with their correct sizes.

Any text you set in side the blocks in the HTML is copied over to the JS and redistributed back to the HTML.

Another example of the JSON HTML block configuration would be this:

###### JSON: 
```
      {
    ...
responsive: {
  columns: 12
}
blocks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

...
  }

```


###### HTML:

```

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

```




Another would be this:


###### JSON: 
```
      {
    ...
responsive: {
  columns: 24
}
blocks: [5, 5, 5, 5, 4]

...
  }
```

###### HTML:

```
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 5
  <div class="jsgrid_item"></div> - will be width 4
```

Thanks and hope you like it !

Chris Woolf