// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x= x;
    this.y= y;
    this.speed= speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    //console.log(dt + "ssa");
    this.x+= this.speed;
    //this.y = this.y + this.speed;
    if(this.x >= 505){
        this.x = -100;
    }
    //console.log([this.x,this.y]);
    return[this.x,this.y];
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    console.log(this);
    //var img = document.createElement("img");
    //img.setAttribute('src',this.sprite);
    //this.playerDiv = document.getElementById('posOfPlayer');
    //this.playerDiv.appendChild(img);
    //this.x = this.playerDiv.offsetLeft;
    //this.y = this.playerDiv.offsetTop;
    //console.log(this.x);
    
}

//images of the available characters to use
var bigOO= [{image:'images/char-boy.png',id:'zeroChar'},{image:'images/char-cat-girl.png',id:'firstChar'},
{image:'images/char-horn-girl.png',id:'secondChar'},
{image:'images/char-pink-girl.png',id:'thirdChar'},
{image:'images/char-princess-girl.png',id:'fourthChar'}];


var defaultChar = "images/char-boy.png";
function addClick(){
    for(let i = 0; i < bigOO.length;i++){
        document.getElementById(bigOO[i].id).addEventListener('click',function(){
            defaultChar = bigOO[i].image;
        })
    }
    return defaultChar;
}


Player.prototype.moo = function(){
    this.sprite =addClick();
    
}

Player.prototype.update =function(){
    for(enemy of allEnemies){
         //console.log([[enemy.update()] + "aaa22"])
        if (enemy.update()[0] == this.x - 40){ 
            //console.log([[enemy.update()] + "aaa11"])
            if(enemy.update()[1] == this.y){
                this.x = 200;
                this.y = 400;
                //console.log([enemy.update()] + "aaa00");

            }
        }
    }
    //console.log([this.x,this.y]);
    //return [this.x,this.y];
}


Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);   
}
 

Player.prototype.handleInput = function(e){
    switch(e){
        case "up":
            this.y = this.y - 40;
            if(this.y < 0){
                this.y = -30;
            }
            break;
        case "down":
            this.y = this.y + 40;
            if(this.y > 400){
                this.y = 400;
            }
            break;
        case "right":
            this.x = this.x + 40;
            if(this.x > 400){
                this.x = 400;
            }
            break;
        case "left":
            this.x = this.x - 40;
            if(this.x < 0){
                this.x = 0;
            }
            break;
    }
    /*if(e === "up"){
        this.y = this.y - 40;
        if(this.y < 0){
            this.y = -30;
        }
    }
    if(e === "down"){
        this.y = this.y + 40;
        if(this.y > 400){
            this.y = 400;
        }
    }
    if(e === "right"){
        this.x = this.x + 40;
        if(this.x > 400){
            this.x = 400;
        }
    }
    if(e === "left"){
        this.x = this.x - 40;
        if(this.x < 0){
            this.x = 0;
        }
    }
*/
}

Player.prototype.cong=function(){
    this.divCong = document.getElementById('cong');
    this.divWin = document.getElementById('win');
    if(this.y == -30){
        this.divCong.classList.remove('temp');
        this.divCong.style.transition = '2s ease-in';
        this.divWin.style.transform = 'rotate(360deg)';
        this.divWin.style.transition = '2s ease-in-out';
    }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
const firstEnemy = new Enemy(1,40,1);
const secondEnemy = new Enemy(1,120,2);
const thirdEnemy = new Enemy(1,160,5);
const fourthEnemy = new Enemy(1,200,1)

var allEnemies =[firstEnemy,secondEnemy,thirdEnemy,fourthEnemy];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


document.getElementById('close').addEventListener('click',function(){
    document.getElementById('cong').classList.add('none');
})