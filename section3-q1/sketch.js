// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(500, 500);
  background(255);
  balloon("One in a million ONCE for TWICE!!!");
  star(211,32,10)
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(255,105,180);
  rect(0, 5, w + p * 2, h + p * 2);
  fill(0);
  text(t, p, h + p);
}
function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 3; i++){
    fill(255,105,180);
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
