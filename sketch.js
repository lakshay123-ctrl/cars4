var gameState = 0;
var playerCount;
var form,player,game;
var database;
var allPlayers;
var car1,car2,cars,car3,car4;
var cars1i,cars2i,cars3i,cars4i,trackImg,track;

function preload(){
    cars1i = loadImage("images/car1.png");
    cars2i = loadImage("images/car2.png");
    cars3i = loadImage("images/car3.png");
    cars4i = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");
    
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4){
        game.update(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }

if (gameState === 2){
    game.end();
}



    
}



