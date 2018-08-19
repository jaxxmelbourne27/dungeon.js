var grid = new Array();
var resources = [];
var a;
var px, py;
var files = [];

function preload() {
  px = 5;
  py = 5;
  files[0] = "maps/map1.csv";
  files[1] = "maps/map2.csv";
  files[2] = "maps/map3.csv";
  files[3] = "maps/map4.csv";
  for(var i = 1; i < 8; i++) {
    resources[i] = loadImage("tiles/" + i + ".png");
  }
}

function read() {
  // Console: "Uncaught TypeError: Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'"
  // Canvas is not shown when the error above occurs
  var reader = new FileReader();
  reader.readAsText(files[0], "utf8");
  file.Input.addEventListener("change", readFile);
}

function setup() {
  background(25);
  createCanvas(window.innerWidth, window.innerHeight);
  read();
  initiate2DArray(16, grid);
  setScreen();
  resetScreen();
}

function initiate2DArray(x, grid) {
  for(var y = 0; y < x; y++) {
    grid[y] = new Array(x);
  }
}

function setScreen() {
  for(var y = 0; y < 16; y++) {
    for(var x = 0; x < 16; x++) {
      grid[x][y] = ceil(random(0, 7));
    }
  }
}

function resetScreen() {
  for(var y = 0; y < 16; y++) {
    for(var x = 0; x < 16; x++) {
      image(resources[grid[x][y]], x * 32, y * 32, 32, 32);
    }
  }
  // image(resources[1], px * 32, py * 32, 32, 32)
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    py -= 1;
  } else if(keyCode === DOWN_ARROW) {
    py += 1;
  } else if(keyCode === LEFT_ARROW) {
    px -= 1;
  } else if(keyCode === RIGHT_ARROW) {
    px += 1;
  }
  setScreen();
  resetScreen();
}
