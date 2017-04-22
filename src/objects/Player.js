class Player extends Phaser.Sprite{

  constructor(game,key,frame){
    super(game,0,0,'character',0);
    this.game = game;

    //animations
    this.animations.add('walk', [2,3,4,5], 10, true);

    // settings
    this.speed=150;
    this.jumpSpeed = 200;
    this.mass = .01;
    this.size = 14;
    this.bodyY = -2;

    // physics stuffs
    game.physics.p2.enable(this);
    this.body.mass = this.mass;
		game.physics.p2.enable(this);
		this.anchor.setTo(0.5,0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
		this.body.setCircle(this.size,0,0);
    this.body.offset.set(0,this.bodyY)
		this.body.fixedRotation=true;

    // create cursors
    this.cursors = this.game.input.keyboard.createCursorKeys();

  }

  update(){
    let cursors = this.cursors;
    let player = this;
    let touching = touchingDown(player)
    let desiredX = null;
    // update the player

    if (cursors.left.isDown ){   //  Move to the left
            player.scale.x = -1;  // a little trick.. flips the image to the left
            desiredX = -1*player.speed;
            player.animations.play('walk');

    }
    else if (cursors.right.isDown) {//  Move to the right
            player.scale.x = 1;
            desiredX= player.speed;
            player.animations.play('walk');
    }
    else {// pressing neither dir
      if(touching){
        desiredX=0;  // stop on the ground
        player.loadTexture('character', 0);   // this loads the frame 0 of my mario spritesheet  (stand)

      }
      // apply drag in the air

    }

    if (cursors.up.isDown){
        //player.loadTexture('mario', 5);   // this loads the frame 5 (jump) of my mario spritesheet
        if(touching){  // this checks if the player is on the floor (we don't allow airjumps)
            player.body.velocity.y = -1*player.jumpSpeed;   // change the y velocity to -800 means "jump!"
        }
    }

    // show jump if airborne
    if (!touching){
      player.loadTexture('character',1)
    }

    // approach desiredX velocity
    if (desiredX !== null){
      player.body.velocity.x = player.body.velocity.x *0.5 + 0.5 * desiredX;
    }

  }

  spawnTo(x,y){
    this.body.x=x;
    this.body.y=y;

    if (this.game.playerGroup){
      console.log('add to player group');
      this.game.playerGroup.addChild(this);
    }else{
      console.log('no player group');
      this.game.world.addChild(this);
    }
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
