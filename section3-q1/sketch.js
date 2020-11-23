// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  star(250, 50, 100);
  balloon("One in a million ONCE for TWICE!!");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(0, 0, w + p * 30, h + p * 30);
  fill(255);
  text(t, p, h + p);
}

function star(cx, cy, r){
  beginShape();
  fill(0);    // 点つなぎを始める
  for(let i = 0; i < 3; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
