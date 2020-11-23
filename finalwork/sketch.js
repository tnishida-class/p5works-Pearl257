// 最終課題を制作しよう

let x, y, vx, vy;
let grabbed;


function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
  star(x,y,50);
}

function reset(){
  x = width / 2;
  y = height / 2;
  vx = 4;
  vy = 4;
  grabbed = false;
}

  function draw(){
  fill(255, 255, 0);
  star(x, y, 50, 0);
  fill(0)
  textSize(30);
  textFont('arial black')
  for(let i = 0; i < 100; i++){
  text("DREAM", i*50, i*50);
  }
  fill(255)
  textSize(30);
  textFont('arial black')
  text("DREAM", 700, 130);
  // 跳ね返り
  if(!grabbed){  x += vx; y += vy;  }
  if( x < 0 || x > width){vx = -1 * vx};  // 横
  if(y < 0 || y > height){ vy = -1 * vy; } // 縦
// x座標, y座標を画面内にする
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}


function keyPressed(){
  if(key == " "){ reset(); } // スペースキーを押したらリセット
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
