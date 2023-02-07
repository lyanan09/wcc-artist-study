let imgList = [];
let noiseScale=0.01;
let cx = 1;
let cy = 5;
let cnv;

function preload() {
  for (var i = 1; i <= cy; i++) {
    let img = loadImage("./images/img_" + i + ".jpg");
    imgList.push(img);
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  responsiveCanvas();
  imageMode(CORNERS);
}

function draw() {
  background(0);
  noStroke();
  
  for (let i = 0; i < width/cx; i++) {
    for (let j = 0; j < cy; j++) {
      let noiseVal = noise(i*noiseScale,j*noiseScale);
      let img = imgList[j];
      let sx = i;
      let sy = j*height/cy;
      // let dx = i+100*noiseVal;
      let dx = i+10*(j+1)*noise(frameCount*noiseScale)+ noiseVal*20;
      let dy = (j+1)*height/cy;
      // console.log(sy)
      image(img, sx, sy, dx, dy);
    }
  }
}

function responsiveCanvas() {
  let x,y;
  if(windowWidth < 600) {
    background(0);
    resizeCanvas(windowWidth, windowWidth);
    y = 0;
  } else {
    y = (windowHeight - height)/2;
  }
   x = (windowWidth - width)/2;
  cnv.position(x,y);
}

function windowResized() {
  responsiveCanvas();
}
