class Player extends Phaser.Sprite{

  constructor(game,key,frame){
    super(game,0,0,'paint_tiles',0);
    this.game = game;

    // settings
    this.speed=100;
    this.jumpSpeed = 200;
    this.mass = 1;

    // physics stuffs
    game.physics.p2.enable(this);
    this.body.mass = this.mass;
		game.physics.p2.enable(this);
		this.anchor.setTo(0.5,0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
		this.spawnTo(16,16);
		this.body.setCircle(16,0,0);
		this.body.fixedRotation=true;

    // create cursors
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update(){
    let cursors = this.cursors;
    let player = this;
    // update the player
    if (cursors.left.isDown ){   //  Move to the left
            player.scale.x = -1;  // a little trick.. flips the image to the left
            player.body.velocity.x = -1*player.speed;
            //player.animations.play('walk');  //now play the animation named "walk"
    }
    else if (cursors.right.isDown) {//  Move to the right
            player.scale.x = 1;
            player.body.velocity.x= player.speed;
            //player.animations.play('walk');
    }
    else {
            //player.loadTexture('mario', 0);   // this loads the frame 0 of my mario spritesheet  (stand)
    }

    if (cursors.up.isDown){
        //player.loadTexture('mario', 5);   // this loads the frame 5 (jump) of my mario spritesheet
        if(touchingDown(player)){  // this checks if the player is on the floor (we don't allow airjumps)
            player.body.velocity.y = -1*player.jumpSpeed;   // change the y velocity to -800 means "jump!"
        }
    }

  }

  spawnTo(x,y){
    this.x=x;
    this.y=y;
    this.game.world.addChild(this);
  }

  remove(){
    this.game.world.remove(this);
  }
}

function touchingDown(someone) {
		var yAxis = p2.vec2.fromValues(0, 1);
		var result = false;
		for (var i = 0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++) {
				var c = game.physics.p2.world.narrowphase.contactEquations[i];  // cycles through all the contactEquations until it finds our "someone"
				if (c.bodyA === someone.body.data || c.bodyB === someone.body.data)        {
						var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
						if (c.bodyA === someone.body.data) d *= -1;
						if (d > 0.5) result = true;
				}
		} return result;
}

export default Player
