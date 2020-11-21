// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  star(250, 50, 40);
}


function draw(){
  background(160, 192, 255);
    star(cx, cy, r);
    beginShape();
    for(var i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
      fill(0);
    }
      endShape(CLOSE);
}


  function draw(){
  background(160, 192, 255);
  star(cx, cy, r);
  cx += 2;
  cy -= 2;
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    var theta += angle 
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  star(width*2,height*2)
}
