// shallow = "rgb(71, 178, 238)";
// deep = "rgb(32, 118, 167)";
// beach = "rgb(245, 250, 117)";
// grass = "rgb(110, 184, 107)";
// tree = "rgb(103, 131, 102)";
// mountain = "rgb(160, 160, 160)";
// snow = "rgb(230, 230, 230)";

shallow = [71, 178, 238, 1];
deep = [32, 118, 167, 1];
beach = [245, 250, 117, 1];
grass = [110, 184, 107, 1];
tree = [103, 131, 102, 1];
mountain = [160, 160, 160, 1];
snow = [230, 230, 230, 1];

// takes a number from 0 to 1 and assigns a color to it
function getColor(val)
{
        val = val*100;
	if (val < 20) return deep;
	if (val < 25) return shallow;
	if (val < 32) return beach;
	if (val < 50) return grass;
	if (val < 75) return tree;
	if (val < 90) return mountain;
	if (val <= 100) return snow;
	return deep;
}

function getrgbColor(val)
{
	var c = getColor(val);
	return "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")";
}

function getrgbaColor(val)
{
	var c = getColor(val);
	return "rgb(" + c[0] + "," + c[1] + "," + c[2] + c[3] + ")";
}
