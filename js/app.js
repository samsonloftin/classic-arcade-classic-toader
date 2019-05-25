let appGame = (function () {
	// Enemies our player must avoid
	class Enemy {
		constructor(speed, locationY) {
			let enemyLoc = locationY;
			this.speed = speed;
			this.x = Math.floor(Math.random() * 500);

			// The image/sprite for our enemies, this uses
			// a helper we've provided to easily load images
			this.sprite = "images/enemy-bug.png";
		};

		update(dt) {
			this.x += this.speed * dt + Math.floor(Math.random() * (5 - 1));
		// reset enemy x-axis & speed when it reaches the end of the screen
		if (this.x > 400) {
			this.x = -100;
			this.speed = Math.floor(Math.random() * (5 - 1));
		}

		this.impact();
		};

		// Draw the enemy on the screen, required method for game
		render() {
			ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		};

		// Creates a hit box for the enemy
		impact() {
			if (playerOne.x < this.x + 50 &&
				playerOne.y < this.y + 50 &&
				playerOne.x + 50 > this.x &&
				playerOne.y + 50 > this.y) {
				playerOne.loseLife();
			}
		};
		
		resetGame(enemyLoc) {
			// resets enemy location
			this.x = Math.floor(Math.random() * 500);
			this.y = enemyLoc;
		}
	};

	// This is the default player class
	class Player {
		constructor() {
			this.sprite = "images/char-cat-girl.png";
		};

		update() {
			this.endGame();
			
			// Checks Boundaries
			if (this.x == -101) {
				this.x += 101;
			} else if (this.x == 505) {
				this.x -= 101;
			} else if (this.y == -121) {
				this.y += 83;
			} else if (this.y == 460) {
				this.y -= 83;
			}
		};

		// This function handles inputs from the player & boundaries 
		handleInput(input) {
			switch (input) {
				case "left":
					this.x -= 101;
					break;
				case "right":
					this.x += 101;
					break;
				case "up":
					this.y -= 83;
					break;
				case "down":
					this.y += 83;
					break;
				case "spacebar":
					this.resetGame();
					break;
			}
		};

		// Places character on the field
		render() {
			ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		};

		endGame() {
			// WINNING CONDITION!
			if (this.y == -38) {
				this.y += 83;
				cssDomCreator.winningMessage();
				messageBox = document.getElementById("winner");

				// removes player from the field
				delete this.y;
				delete this.x;
			}
		};
		
		loseLife() {
			// reset player location
			playerOne.x = 202;
			playerOne.y = 377;
		};
		
		resetGame() {
			// Checks if Start or Winner message is in the DOM
			if (messageBody.contains(messageBox)) {
				messageBody.removeChild(messageBox);
				
				// resets player location
				this.x = 202;
				this.y = 377;
				
				// resets enemy location
				enemyRowOne.resetGame(307);
				enemyRowTwo.resetGame(224);
				enemyRowThree.resetGame(141);
				enemyRowFour.resetGame(58);
			}
		};
		
		gameStart() {
			// Displays the game start modal
			cssDomCreator.startMessage();
			messageBox = document.getElementById("start");
		}
	};

	/*
		* VARIABLES SECTION!
		* LET
		* VAR
		* CONST
	*/

	// creates new enemies objects & places them into different rows
	let enemyRowOne = new Enemy(60, 307);
	let enemyRowTwo = new Enemy(72, 224);
	let enemyRowThree = new Enemy(85, 141);
	let enemyRowFour = new Enemy(97, 58);

	// Place all enemy objects in an array called allEnemies
	let allEnemies = [enemyRowOne, enemyRowTwo, enemyRowThree, enemyRowFour];

	// creates a new player object
	let playerOne = new Player()
	
	// Message Box
	let messageBox;
	let messageBody = document.body;

	// This listens for key presses and sends the keys to your
	document.addEventListener("keyup", function(e) {
		let allowedKeys  = {
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			32: "spacebar"
		};

		playerOne.handleInput(allowedKeys[e.keyCode]);
	});

	playerOne.gameStart();

	// returns public variables & functions
	return {
		allEnemies: allEnemies,
		playerOne: playerOne,
	}
})();