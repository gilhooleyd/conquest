console.log("draw");

x_loc = Math.random()*1000;
y_loc = Math.random()*1000 ;

size = 20;
offset = 3;
var res = .05;

var showExploreMap = false;
var showMiniMap = true;
var showRollingMap = true;
var showCombinedMap = true;
var showColorMap = true;

// set the layers for the noise
var octaves = 8;
var roughness = .5;
var scale = .5;
noise.setLayers(octaves, roughness, scale);
noise.seed(0);

var w = 100;
var h = 100;
var pixelSize = 2;
var rollingLife = 300;
var rollingParticles = 8000;

function drawExploreMap() {
    var canvas = document.getElementById('canvas');
    canvas.style.display = "block";

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0,0,0)';
    var w = canvas.width ;
    var h = canvas.height;

    // fill background 
    ctx.fillRect(0,0, w, h);

    noise.setLayers(10, .4, .07);

    w = w - w % (size + offset);
    h = h - h % (size + offset);

    for (var x = 0; x * (size + offset) < w; x++)
    {
        for (var y = 0; y * (size + offset) < h; y++)
        {
            //generates a value from 0 to 100
            var val = (noise.layerSimplex((x_loc + x) * res, (y_loc + y) * res) + 1) / 2 * 100;
            val = parseInt(val);

            ctx.fillStyle = getrgbColor(val);
            // ctx.strokeStyle = 'rgb(100,100,100)';
            // ctx.fillStyle = 'green';
            ctx.fillRect(x * (size + offset) , y * (size + offset), size, size);
        }
    }
}

/* 
 * Draws a map in grayscale on a single canvas.
 * Assumes that the map height values range from 0 to 1
 */
function drawGrayMap(mapId, map, width, height, pixelSize) {
    var can = document.getElementById(mapId);
    can.style.display = "inline-block";
    can.style.width  = width*pixelSize + "px";
    can.style.height = height*pixelSize + "px";
    can.width = width*pixelSize;
    can.height = height*pixelSize;
    var ctx = can.getContext('2d');
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var val = Math.floor(map[x][y]*255);
            //console.log(val);
            ctx.fillStyle = "rgb(" + val + "," + val + "," + val + ")";
            ctx.fillRect(x*pixelSize,y*pixelSize,1*pixelSize,1*pixelSize);
        }
    }
}

/* 
 * Draws a map in grayscale on a single canvas.
 * Assumes that the map height values range from 0 to 1
 */
function drawColorMap(mapId, map, width, height, pixelSize) {
    var can = document.getElementById(mapId);
    can.style.display = "block";
    can.style.width  = width*pixelSize + "px";
    can.style.height = height*pixelSize + "px";
    can.width = width*pixelSize;
    can.height = height*pixelSize;
    var ctx = can.getContext('2d');
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var color = getrgbColor(map[x][y]);
            ctx.fillStyle = color;
            ctx.fillRect(x*pixelSize,y*pixelSize,1*pixelSize,1*pixelSize);
        }
    }
}

function randomIsland()
{
    console.log(x_loc);
    x_loc = Math.random()*1000;
    y_loc = Math.random()*1000 ;
    mMap = createMiniMap(w,h);
    cMap = createCombinedMap(w,h, rMap, mMap);
    drawColorMap('color', cMap, w, h, pixelSize);
}

/* 
 * Beginning function. Used to create/draw the maps
 */
function drawGrid() 
{
    
//    var rMap;
//    var mMap;
//    var cMap;
//    var coMap;

    if (showRollingMap) {
        rMap = rollingAlgorithm(w, h, rollingLife, rollingParticles);
        drawGrayMap('rolling', rMap, w, h, pixelSize);    
    }

    if (showMiniMap) {
        mMap = createMiniMap(w,h);
        drawGrayMap('minimap', mMap, w, h, pixelSize);
    }
    
    if (showCombinedMap) {
        cMap = createCombinedMap(w,h, rMap, mMap);
        drawGrayMap('combined', cMap, w, h, pixelSize);
    }
    
    if (showColorMap) {
        drawColorMap('color', cMap, w, h, pixelSize);
    }

    if (showExploreMap)
        drawExploreMap();
}
