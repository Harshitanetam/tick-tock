var scAngle=(1);
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
 // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background("black");  
  drawSprites();

   hr = hour();
   mn = minute();
   sc = second();

   //scAngle = map(sc, 0, 60, 0, 360)
   translate(width/2, height/2);
   hrAngle=PI/2
   rotate(hrAngle);
   hrAngle = map(sc,0,12,0,360)
   strokeWeight(7);
   stroke(0,0,255);
   noFill();
   line(0,0,100,0);
   arc(50,50,350,350,0,280);

  push();  
   mnAngle=PI/2
   rotate(mnAngle);
   mnAngle = map(mn,0,60,0,360)
    strokeWeight(7);
   stroke("lightgreen");
   noFill();
   line(50,0,170,0)
   arc(50,50,370,380,0,50);
   pop();

   push();
   scAngle=PI/2
   rotate(scAngle);        
   strokeWeight(7);
   stroke("red");
   noFill();
   line(0,0,150,0)
   arc(50,50,390,410,0,110);
   pop();
}
 