class Game {
constructor(){
}

getState(){

var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
});

}

update(State){

database.ref('/').update({
gameState: State
});

}

async start(){

if(gameState === 0){
player = new Player();
var playerCountRef = database.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();
}
form = new Form();
form.display();
}
}

play(){

form.hide();
textSize(30);
text("Game Start", 120,100);
Player.getPlayerinfo();

if(allPlayers !== undefined){
var playerPosition = 130;
for(var plr in allPlayers){

playerPosition = playerPosition + 20;
textSize(15);
if(plr === player.Index){
fill("red");
}
else{
fill("black");    
}
text(allPlayers[plr].name + allPlayers[plr].distance,120,playerPosition);
}

}

if(keyDown(UP_ARROW)&& player.Index !== null){

player.distance = player.distance+50;
player.update();

}
}
}