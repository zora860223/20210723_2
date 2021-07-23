/*
let slider; //宣告GUI
function setup()
{
  
  createCanvas( 400, 400);
  background(220);
  frameRate(30);
  
  slider = createSilder( 0, 1, 0, 1);
  slider.position( 40, 10);
  slider.style( 'width', '320px');
  slider.style( 'height', '20px');
  rectMode(CENTER);
  
}

function draw()
{
  
  if(mouseIsPressed)
    {
      if(mouseY>40)
        {
          brush(
               frameCount,
               slider.value()
               );
          
        }
      
    }
  
}

function brush(v,ty)
{
  let w = 50+sin(v*PI/30)*20;
  let h = 50-sin(v*PI/30)*20;
  
  if(ty==0)
    {
      
      fill
      (
        mouseX*(255/width),
        mouseY*(255/height),
        0,
        50
      );
      
      ellipse( mouseX, mouseY, w, h);
      
    }
  
    if(ty==1)
    {
      
      fill
      (
        mouseX*(255/width),
        mouseY*(255/height),
        50
      );
      
      rect( mouseX, mouseY, w, h);
      
    }
  
}
*/

/*
function setup()
{
  createCanvas(600,600);
  background(220);
  frameRate(30);
}

function draw()
{
  if(mouseIsPressed)
  {
    brush(frameCount);
  }
}

function brush(v)
{
  
  fill
  (
    mouseX*(255/width),
    mouseY*(255/height),
    0,
    50
  );
  
  // Draw a square with rounded corners, each having a radius of 20.
  square
  (
    mouseX, 
    mouseY, 
    50+sin(v*PI/30)*20, 
    50-sin(v*PI/30)*20
  );
  
}
*/


function setup(){
  createCanvas(600,600);
  background(150,200,255,100);
}

function draw()
{
  
  if(mouseIsPressed)
  {
    fill(
         mouseX*(255/width),
         mouseY*(255/height),
         0,
         50
        );
    // Draw a square with rounded corners, each having a radius of 20.
    square(
          mouseX, 
          mouseY, 
          5+(60*sin(mouseX*(PI/width))),
          5+(60*sin(mouseY*(PI/width)))
          );
  }
  
  else
  {
    
  }
  
}


/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  // Draw a square with rounded corners, each having a radius of 20.
  //square(mouseX, mouseY, mouseX, mouseY);
  if(mouseIsPressed)
    {
    // Draw a circle at location (30, 30) with a diameter of 20.
    circle(mouseX, mouseY, 20);
    }
  else
    {
    line(mouseX, mouseY, 50, 50);
    }
}
*/

