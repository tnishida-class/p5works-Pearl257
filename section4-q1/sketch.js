// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  if(count<=50 );


}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  size +=10

  ellipse(width / 2, height / 2, size / 2 );
}
