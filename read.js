var grid = [];
var filePath = "maps/map1.csv";
var requirejs = require("requirejs");
var csv = require("csv");
var http = require("http");
//require('csv', function(csv) {});

function initiate2DArray(x, grid) {
  for(var y = 0; y < x; y++) {
    grid[y] = new Array(x);
  }
}

initiate2DArray(15, grid);
