console.log("keybindings");
var canvas = document.getElementById("canvas");


var moveleft = false;
var moveRight = false;
var movement = 10;

function keyDown(e)
{
	var c = e.keyCode;

	if (c == 119) y_loc -= movement;
	else if (c == 97) x_loc -= movement;
	else if (c == 115) y_loc += movement;
	else if (c == 100) x_loc += movement;
	
	drawGrid();
}

window.addEventListener("keypress", keyDown, false);
