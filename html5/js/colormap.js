shallow = "rgb(71, 178, 238)";
deep = "rgb(32, 118, 167)";
beach = "rgb(245, 250, 117)";
grass = "rgb(110, 184, 107)";
tree = "rgb(103, 131, 102)";
mountain = "rgb(160, 160, 160)";
snow = "rgb(230, 230, 230)";

// takes a number from 0 to 100 and assigns a color to it
function getColor(val)
{
	if (val < 20) return deep;
	if (val < 40) return shallow;
	if (val < 50) return beach;
	if (val < 70) return grass;
	if (val < 80) return tree;
	if (val < 90) return mountain;
	if (val <= 100) return snow;
}