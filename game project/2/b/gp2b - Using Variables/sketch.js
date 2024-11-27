/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
       // Canyon initialization
    canyon = {x:240,width:60 };

    // Collectable initialization
    collectable = { x:200,y:floorPos_y -50, size: 30};

    // Mountain1 initialization
    mountain1 = {
        x1: 150,
        y1: 256,
        x2: 20,
        y2: 432,
        x3: 250,
        y3: 432
    };
    // Mountain2 initialization triangle(700,256,550,432,800,432);
    mountain2 = {
        x1: 250,
        y1: 256,
        x2: 80,
        y2: 432,
        x3: 350,
        y3: 432
    };

    // Cloud initialization
    cloud = {x: 300,y: 100,size: 80};
    
    
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    //tree
     fill(120,100,40);
    rect(treePos_x,treePos_y,30,150);
    fill(0,155,0);
   // triangle(treePos_x,treePos_y,925,100,605,332);
    triangle(treePos_x -70,treePos_y,treePos_x+15,treePos_y-200,treePos_x +100,treePos_y);
    
  // Canyon
    fill(0);
    rect(canyon.x, floorPos_y, canyon.width, height - floorPos_y);
    
    //mountain
     fill(128, 128, 128);
    triangle(mountain1.x1,mountain1.y1,mountain1.x2,mountain1.y2,mountain1.x3,mountain1.y3);
    triangle(mountain2.x1,mountain2.y1,mountain2.x2,mountain2.y2,mountain2.x3,mountain2.y3);
    
    // Cloud
       fill(255);
    ellipse(cloud.x, cloud.y, cloud.size);
    ellipse(cloud.x+45, cloud.y, cloud.size-15);
    ellipse(cloud.x-40, cloud.y, cloud.size-29);
    
    //collectable    it's a gold coin
    fill(255, 223, 0);
    ellipse(collectable.x, collectable.y, collectable.size);

    
    
    
    //Standing, facing frontwards
     //head
    fill(0,256,0);
    ellipse(gameChar_x,gameChar_y - 63,25,25);
    fill(0);
    //eyes
    ellipse(gameChar_x -4,gameChar_y-67, 5,5);
    ellipse(gameChar_x +4,gameChar_y-67, 5,5);
    
    //mouth
    fill(0);
    rect(gameChar_x-7,gameChar_y-59, 14,3,10);
    //body
 
    fill(0,0,256);
    rect(gameChar_x-12,gameChar_y-49,24,30,10);
    
    //LEGS
    fill(0);
    //right
     rect(gameChar_x + 5, gameChar_y - 21, 5, 23,10);
    //left
     rect(gameChar_x - 10,gameChar_y - 21, 5, 23,10);
    
    //Arms
    fill(0);
    //left
    rect(gameChar_x-15,gameChar_y-45,5,25,5);
    //right
    rect(gameChar_x+10,gameChar_y-45,5,25,5);

}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
