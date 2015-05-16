
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

function drawMiniMap()
{
	console.log("Drawing");
	var mm = document.getElementById("minimap");
        mm.style.display = "block";
	var w = mm.width;
	var h = mm.height;
	var mmctx = mm.getContext('2d');
	var canvasData = mmctx.getImageData(0, 0, w, h);
	console.log(getColor(50));
	for (var x = 0; x < w; x++)
	{
		for (var y = 0; y < h; y++)
		{
			var val = (noise.layerSimplex((x_loc + x) * res, (y_loc + y) * res) + 1) / 2 * 100;
    		val = parseInt(val);
    		var c = getrgbColor(val);
    		//drawPixel(x, y, w, canvasData, c[0], c[1], c[2], c[3]);
    		//drawPixel(x, y, w, canvasData, 141, 115, 96, 0.99);
    		mmctx.fillStyle = getrgbColor(val);
    		mmctx.fillRect(x, y, 1, 1);
		}
	}
}
