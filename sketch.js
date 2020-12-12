//Create variables here

function preload()
{
  if(keyWentDown(UP_ARROW))
  writeStock(foodS);
  dog.addImage(dogHappy);
//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){


  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({

  })
}

display({
  var x=80,y=100;
  
  
  imageMode(CENTRE);
  image(this.imade,720,220,70,70);
  
})
