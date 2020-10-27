// 小手調べ
function setup(){
noFill();
  for(let i = 0; i < 10; i++){
    let x=i*10+10
  if(i<4){
    stroke(0,0,255)
  }
  else{
      stroke(255,0,0)
  }
  ellipse(50,50,x,x);
  // BLANK[1]
  }
}
