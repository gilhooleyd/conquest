console.log("draw");

x_loc = 0;
y_loc = 0;

size = 20;
offset = 3;
var res = .05;

function drawGrid() 
{
	noise.seed(0);
    
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) 
  {
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
  //drawMiniMap();
}