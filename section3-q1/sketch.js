// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(500, 500);
  background(255);
  balloon("One in a million ONCE for TWICE!!!");
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
