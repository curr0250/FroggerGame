// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    //x posn
    //y posn
    //starting speed
    
    this.x = x;
    this.y = y + 60; //center on first row of stones
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.side = 101;
    this.offScreen = this.side * 5;
    this.resetPos = -this.side;
    
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    //get enemy to stop only when off screen
     if (this.x < this.offScreen) {
        //move forward
        //increment x by speed * dt
         this.x += this.speed * dt;
    } else {
       //reset position to start 
        this.x = this.resetPos;
    }
        

        
   
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player Class
    //Constructor
        //Properites
            // x posn
            // y posn
            //Sprite image
        //Methods
            //update()  which updates posn
                // check collision here
                    //did player's x and y collide with enemy?
                // check for win here
                    //did player's x and y reach final row?
            //render()
                // draw player sprite on current x and y position
            //handleInput()
                //update player's x and y properties according to input
            //reset player
                //set player to starting x and y

class Player {
    constructor() {
        this.sprite = 'images/char-princess-girl.png';
        this.side = 101;
        this.go = 83;
        this.startX = this.side * 2;
        this.startY = (this.go * 4) + 60;
        this.y = this.startY;
        this.x = this.startX;
    }
    update(){
        // check collision here
        for(let enemy of allEnemies) {
            if(this.y === enemy.y && (enemy.x + enemy.side/2 > this.x && enemy.x < this.x + this.side/2) ) {
               alert('collide!'); 
            }
          
        }
                    //did player's x and y collide with enemy?
                // check for win here
                    //did player's x and y reach final row?
    }
    
    // Draw player to screen at current x and y coord
    render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y) 
    }
    
    // update player's x and y properties according to user input
    handleInput(input) {
        switch(input){
            case 'left':
                if (this.x > 0) {
                this.x -= this.side;
                }
                break;
            case 'up':
                if (this.y >= 0) {
                   this.y -= this.go; 
                } 
                break;
            case 'right':
                if (this.x < this.side * 4) {
                    this.x += this.side;
                }
                break;
            case 'down':
                if (this.y < this.go * 4) {
                  this.y += this.go;  
                }
                break;
        }
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// New Player object called player

// Init allEnemies array
//For each enemy create and push new Enemy object into the array

const player = new Player();
const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy(-300, 83, 300);
const bug4 = new Enemy(-101, 166, 250);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3, bug4);
console.log(allEnemies);

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
