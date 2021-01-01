     
     // Make changes here to test the grid system
     const JSON =  {
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
        "blocks": [1, 8, 2, 1]
    }

      /* CONSTRUCT GRID */
      document.getElementById("initialize").addEventListener("click", function() {

      new JSGrid(JSON);

      document.getElementById("initialize").style.display = "none";
      }); 
