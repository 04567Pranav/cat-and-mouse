var mouse, mouse1,mouse2,mouse3
var cat,cat1,cat2,cat3
var bg
function preload() {
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
    bg=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
   
    cat=createSprite(900,700,10,10);
    cat.addAnimation("cat1", cat1);
    cat.scale=0.2

   mouse=createSprite(200,700,10,10);
   mouse.addAnimation("mouse1", mouse1);
   mouse.scale=0.2

}

function draw() {
    background(bg);

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catstop",cat3)
        cat.x=300
        cat.changeAnimation("catstop")
        cat.scale=0.2

        mouse.addAnimation("mousetickle", mouse3)
        mouse.changeAnimation("mousetickle")
        mouse.scale=0.2
    }
    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX =-5;
      cat.addAnimation("catrunning",cat2)
      cat.changeAnimation("catrunning")

    mouse.addAnimation("mousedancing",mouse2)
    mouse.changeAnimation("mousedancing")
  }


}
