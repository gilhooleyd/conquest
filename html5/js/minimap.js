
// That's how you define the value of a pixel //
function drawPixel (x, y, w, d, r, g, b, a) {
    var index = (x + y * w) * 4;

    d.data[index + 0] = r;
    d.data[index + 1] = g;
    d.data[index + 2] = b;
    d.data[index + 3] = a;
}

// That's how you update the canvas, so that your //
// modification are taken in consideration //
function updateCanvas(ctx, canvasData) {
    ctx.putImageData(canvasData, 0, 0);
}

/* 
 * Takes a map that has a min value of 0
 * and it will normalize it so that values 
 * are from 0 to 1
 */
function normalizeMap(w, h, map) {
    var max = min = map[0][0];
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            var val = map[i][j];
            if (val > max) max = val;
            if (val < min) min = val;
        }
    }
    console.log("Max: " + max);
    var mult = 1.0/max;
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            map[i][j] *= mult;
        }
    }
    return map; 
}

function createMiniMap(w, h)
{
        // creates the empty map
        var map = [];
        for (var i = 0; i < w; i++) {
            map[i] = [];
            for (var j = 0; j < h; j++) {
                map[i][j] = 0;
            }
        }

        // populates it with noise
        for (var x = 0; x < w; x++)
        {
            for (var y = 0; y < h; y++)
            {
                // values are returned as being from 0 to 1
                var val = (noise.layerSimplex((x_loc + x) * res, (y_loc + y) * res) + 1) / 2;
                map[x][y] = val;
            }
        }
        return map;
}

function createCombinedMap(w, h, map1, map2) {
        // creates the empty map as a combination of the two
        var map = [];
        for (var i = 0; i < w; i++) {
            map[i] = [];
            for (var j = 0; j < h; j++) {
                map[i][j] =  map1[i][j]  * map2[i][j];
            }
        }
        map = normalizeMap(w, h, map);
        return map;
}

