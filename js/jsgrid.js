/*-------------------------

JS Grid System

--------------------------- */

class JSGrid {

    constructor({
        id = '',
        dimensions = {
          width: "",
          height: "",
          margin: "",
          minHeight: "",
          maxHeight: ""
        },
        config = {
            fetchFromHTML: true
         },
        animations = {
            fadeInSpeed: "",
            addRowspeed: ""
        },
        style = {
            background: "",
            borderRadius: ''
        }, 
        responsive = [
            {
              breakpoints: null,
              columns: null
            }
        ],
        blocks = []
    }) 
    {
        this.id = id.substring(1);
        this.animation = animations;
        this.style = style;
        this.config = config;
        this.blocks = blocks;
        this.dimensions = dimensions;
        this.responsive = responsive;
        this.queueItem = 0;

        // id
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var id = this.id;
        // Dimensions
        var width = this.dimensions["width"];
        var requestedWidth = this.dimensions["width"];
        var height = this.dimensions["height"];
        var margin = this.dimensions["margin"];
        var minHeight = this.dimensions["minHeight"];
        var maxHeight = this.dimensions["maxHeight"];
        // Responsive
        var responsive = this.responsive;
        // Animations
        var animations = this.animation;
        // Style
        var style = this.style;
        // Config
        var config = this.config;
        var ncolumns, additem;
        var widthM = 0, widthM2 = 0, countAddblock=0;
        var _this = this;
        var blocks = this.blocks;

        // Apply style to main grid container
        document.getElementById(id).style.paddingRight = margin+"px";

        // Fade in Function
        function fadeIn(el, time) {
          el.style.opacity = 0;

          var last = +new Date();
          var tick = function() {
            el.style.opacity = +el.style.opacity + (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }

        // Main throttle function
        function throttle (func, interval) {
          var timeout;
          return function() {
            var context = this, args = arguments;
            var later = function () {
              timeout = false;
            };
            if (!timeout) {
              func.apply(context, args)
              timeout = true;
              setTimeout(later, interval)
            }
          }
        }

        // Generates a random hex color
        function getRandomColor() {
            return `#${(~~(Math.random()*(1<<24))).toString(16)}`
        }

        // Add Rows to JS grid
        var AddRows = this.AddRows = function AddRows(content) {
            // Get width of div
            var rect_main = document.getElementById(id);

            var ChildItems = 0, gridLess = "jsgrid_row_1_"+randomID;

            var maxRows = document.querySelectorAll("#"+id + ' .jsgrid_row ').length;

            document.querySelectorAll("#"+id + ' .jsgrid_row ').forEach((item) => {
                if(item.childElementCount > ChildItems)
                {

                    for (var x = 0; x < maxRows; x++) {

                        // If there are any extra Rows , create a new row
                        if(item.id == "jsgrid_row_"+x+"_"+randomID)
                        {                        
                            gridLess = "jsgrid_row_"+maxRows / x +"_"+randomID;
                            ChildItems = item.childElementCount; 
                        } else {
                                gridLess = item.id;
                                ChildItems = item.childElementCount; 
                        }
                    }

                }

                // Save position when find row with less columns
                if(item.childElementCount < ChildItems)
                {
                    gridLess = item.id;
                    ChildItems = item.childElementCount;  
                }
            });

            // Append Style
            var newItem = document.getElementById(gridLess);

            // Add Countblocks
            countAddblock++;

            // Check Color
            if(style.background == 'random' ) { var bgColor = getRandomColor(style.background); } else {  var bgColor = style.background; }

            // Check if height is random or not
            if(height == "random") { var heightToApply = Math.floor(Math.random() * (Number(maxHeight) - Number(minHeight) + 1)) + Number(minHeight)+"px"; } else { var heightToApply = height+"px"; }

            // Insert New Item

            if (blocks.length > 1)  {
            newItem.insertAdjacentHTML('beforeend', "<div id='block_"+countAddblock+"_"+randomID+"' style='background-color:"+bgColor+"; margin-bottom:"+margin+"px; border-radius:"+style.borderRadius+"px; height:"+heightToApply+"' class='jsgrid_block w-"+blocks[countAddblock -1]+"'>"+content+"</div>");
            }

            var block = document.getElementById("block_"+countAddblock+"_"+randomID);
            
            // var className = "w-"+Number(countAddBlock * ncolumns / blocks[countAddNumber])
            
            // Fade In Item
            fadeIn(block, animations.fadeInSpeed);

            var bTxt = blocks.toString();

            document.getElementById('JSON').innerHTML = '"blocks": ['+bTxt+'], "columns": '+ncolumns;


        }

        // Setup Rows
        var SetupRows = this.SetupRows = async function SetupRows() {

            // Empty grid
            document.getElementById(_this.id).innerHTML = "";

            // Update variable values in case it was change with method
            width = _this.dimensions["width"];
            requestedWidth = _this.dimensions["width"];
            margin = _this.dimensions["margin"];
            ncolumns = undefined;

            // Get width of div
            var rect_main = document.getElementById(id);

            // Save div Width
            widthM = rect_main.offsetWidth;

            // Get number of columns possible to fit
            ncolumns = rect_main.offsetWidth / Number(width);
            ncolumns = Math.floor(ncolumns);

            // Check if width of container is less than request item width

            if(widthM <= requestedWidth){ 
               ncolumns = 1;
            }

            // Loop responsive object to get current viewport
            for (var loop = 0; loop < responsive.length; loop++) {

                if(widthM < responsive[loop].breakpoint) 
                {  
                    if(responsive[loop].columns != undefined)
                    {
                         ncolumns = responsive[loop].columns;  
                    }
                }
            }

        // Set main row
        document.getElementById(id).insertAdjacentHTML('beforeend', "<div id='jsgrid_row_1_"+randomID+"' style='padding-left:"+margin+"px; width:100%' class='jsgrid_row'></div>");  
    }

        // Setup JSgrid
        this.SetupGrid = function(number) {

                // Save all items inside main selector, when SetupRows all items inside selector are removed.
                if(_this.config['fetchFromHTML'] == true) {
                    var fetchedItems = [];
                    document.querySelectorAll("#"+ id + ' .jsgrid_item').forEach((item_fetch) => {
                        fetchedItems.push(item_fetch.innerHTML);
                    });

                }

                // Setup Rows
                this.SetupRows();

                // Fetch from all items
                if(_this.config['fetchFromHTML'] == true) {
                    var arrayLength = fetchedItems.length;
                    for (var array_block = 0; array_block < arrayLength; array_block++) {
                        AddRows(fetchedItems[array_block]);
                    }

                    fetchedItems = [];
                }
        };

        // Window Resize
        var ResizeWindow = throttle(function() {

            var rect_main_new = document.getElementById(id);
            var rect_check_width = rect_main_new.offsetWidth;

            if(rect_check_width != widthM2)
            {

                // Get get all elements from current Rows
                var countBlocks = 0;
                countAddblock = 0;
                var itemsArray = [];

                document.querySelectorAll("#"+id + ' .jsgrid_row ').forEach((item) => {
                    var idColumn = item.id;
                    document.querySelectorAll("#"+idColumn + ' .jsgrid_block').forEach((itemBlock) => {
                        // Increase block count
                        var str2 = itemBlock.id;
                        var parts = str2.split('_');
                        var blockid = parts[parts.length - 2];
                        itemsArray.push(({'element': itemBlock.innerHTML, 'sort': blockid}));
                    });
                });

                // Sort array
                itemsArray.sort(function(a, b) { return a.sort - b.sort; });

                // Setup Rows
                SetupRows();

                // Loop trough array and append items
                var arrayLength = itemsArray.length;
                for (var array_block = 0; array_block < arrayLength; array_block++) {
                    AddRows(itemsArray[array_block]["element"]);
                }

            } else { return; }

            widthM2 = rect_check_width;

        }, 100); // Adjust interval of time

        // Add EventListener
        window.addEventListener('resize', ResizeWindow);

        // ** SETUP GRID **
        this.SetupGrid();
    }

}