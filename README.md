This project is a way to play with javascript, html5, and procedural generation by trying to create  by trying to create a game. 

# End Goal

The end goal of conquest is to build a turn-based city building game. The rules for building and productivity are based off of cellular automation and the world is procedurally generated. All players have a minute per turn and all turns are taken simultaneously. Up-keep and generated resources are calculated at the end of each turn as well as forest growth. Players must manage wood, stone, and food product.

# Currently implemented

The world is currently generated with 8 octaves of 2D simplex noise. This noise generates values from 1-255 so that a grayscale image can be created. This grayscale image is then fed into a color map that replaces ranges of values with oceans, grass, forrests, and beaches. Each tile is drawn as a square of a single color in an html5 canvas. 

# TODO 
* Implement Forrests using cellular automation for tree growth
* Define costs for city buildings such as farms, factories, houses, storage
* Create UI for resources, upkeep, and productivity

* Implement a second player -- use meteor for server backend
