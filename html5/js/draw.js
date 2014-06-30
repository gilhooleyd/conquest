console.log("draw");

x_loc = 0;
y_loc = 0;

function drawGrid() 
{
	noise.seed(0);
    
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) 
  {
  	var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0,0,0)';
    var w = canvas.width ;
    var h = canvas.height;

    // fill background 
    ctx.fillRect(0,0, w, h);

    size = 20;
    offset = 3;
    var res = 1;

    noise.setLayers(10, .4, .07);

    w = w - w % (size + offset);
    h = h - h % (size + offset);

    for (var x = 0; x * (size + offset) < w; x++)
    {
    	for (var y = 0; y * (size + offset) < h; y++)
    	{
    		var val = (noise.layerSimplex((x_loc + x) * res, (y_loc + y) * res) + 1) / 2 * 255;
    		val = parseInt(val);

    		ctx.fillStyle = 'rgb(' +val+', '+val+','+ val +')';
    		// ctx.strokeStyle = 'rgb(100,100,100)';
    		// ctx.fillStyle = 'green';
    		ctx.fillRect(x * (size + offset) , y * (size + offset), size, size);
    	}
    }

  }
}