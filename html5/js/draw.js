console.log("draw");

x_loc = 0;
y_loc = 0;

size = 20;
offset = 3;
var res = .05;

var showExploreMap = false;
var showMiniMap = true;
var showRollingMap = true;

// set the layers for the noise
noise.setLayers(10, .4, .07);
noise.seed(0);

function drawRollingMap() {
    var w = 88;
    var h = 32;
    var life = 50;
    var particles = 3000;
    var pixelSize = 8;
    var map = rollingAlgorithm(w, h, life, particles);
    console.log(map);
    var can = document.getElementById('rolling');
    can.style.display = "block";
    can.style.width  = w*pixelSize + "px";
    can.style.height = h*pixelSize + "px";
    can.width = w*pixelSize;
    can.height = h*pixelSize;
    var ctx = can.getContext('2d');
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            var val = Math.floor(map[x][y]);
            //console.log(val);
            ctx.fillStyle = "rgb(" + val + "," + val + "," + val + ")";
            ctx.fillRect(x*pixelSize,y*pixelSize,1*pixelSize,1*pixelSize);
        }
    }
}

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

function drawGrid() 
{
    if (showRollingMap)
        drawRollingMap();    
    if (showMiniMap)
        drawMiniMap();
    if (showExploreMap)
        drawExploreMap();
}
