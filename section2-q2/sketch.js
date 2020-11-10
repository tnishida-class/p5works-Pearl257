// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
     fill(255);
     if(i % 2 == 0 && j % 2 != 0){
       fill(128);
       }
       if(i % 2!=0 && j % 2==0){
       fill(128);

     }

     rect(size * i, size * j, size, size);
    }
  }
    for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){
    if(i % 2!=0 && j % 2 == 0){
    fill(255,0,0);
    ellipse(size*i+size/2,size*j+size/2,size-5,size-5);}
}

  }
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 3; j++){
  if(i % 2==0 && j % 2 != 0){
  fill(255,0,0);
  ellipse(size*i+size/2,size*j+size/2,size-5,size-5);}
}

}
    for(let i = 0; i < 8; i++){
    for(let j = 5; j < 8; j++){
    if(i % 2!=0 && j % 2 == 0){
    fill(0);
    ellipse(size*i+size/2,size*j+size/2,size-5,size-5);}
}
}
    for(let i = 0; i < 8; i++){
    for(let j = 5; j < 8; j++){
    if(i % 2==0 && j % 2 != 0){
    fill(0);
    ellipse(size*i+size/2,size*j+size/2,size-5,size-5);}
}
}
}
