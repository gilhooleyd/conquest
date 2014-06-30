console.log("keybindings");
var canvas = document.getElementById("canvas");
window.addEventListener("keypress", keyDown, false);



function keyDown(e)
{
	var c = e.keyCode;

	if (c == 119) y_loc--;
	else if (c == 97) x_loc--;
	else if (c == 115) y_loc++;
	else if (c == 100) x_loc++;
	
	drawGrid();
}