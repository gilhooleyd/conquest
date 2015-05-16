
function rollingAlgorithm(w, h, life, particles) {
    // creates the empty map
    var map = [];
    for (var i = 0; i < w; i++) {
        map[i] = [];
        for (var j = 0; j < h; j++) {
            map[i][j] = 0;
        }
    }
    
    //console.log(map); 
    while (particles > 0) {
        particles--;
        var x = Math.floor(Math.random()*w/2 + w/4);
        var y = Math.floor(Math.random()*h/2 + h/4);

        var thisLife = life;
        while (thisLife > 0) {
            thisLife--;
            map[x][y] += 1;
            var adjPos = getAdjPos(x, y, w, h, map);
            if (!adjPos)
                break;
            x += adjPos[0];
            y += adjPos[1];
            //console.log( x + "  " + y);
        }
    }

    // normalize the map
    var max = min = map[0][0];
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            var val = map[i][j];
            if (val > max) max = val;
            if (val < min) min = val;
        }
    }
    console.log("Max: " + max);
    var mult = 255.0/max;
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            map[i][j] *= mult;
        }
    }
  
    return map; 
}

function getAdjPos(x, y, w, h, map) {
    var height = map[x][y];
    var nearPos = [[-1,-1], [0,-1], [1,-1],
                             [-1,0], [1,0],
                             [ -1,1], [0,1], [1,1]];
    var nearHeight = [];
    var minHeight = height;
    for (var i = 0; i < nearPos.length; i++) {
        var pos = nearPos[i]; 
        var newX = x + pos[0];
        var newY = y + pos[1];
        if (newX < w && newX >= 0 && newY < h && newY >= 0) {
            var newHeight = map[newX][newY];
            nearHeight.push([newHeight, pos]);
        }
    }
    while (nearHeight.length > 0) {
        //console.log("length: " + nearHeight.length);
        num = Math.floor(Math.random()*nearHeight.length);
        //console.log("num: " + num);
        item = nearHeight.splice(num, 1)[0];
        //console.log(item[1][0] + "  " + item[1][1]);
        if (item[0] <= height) 
            return item[1];
    }
    //console.log("Could not get adj pos");
    return false;
}
