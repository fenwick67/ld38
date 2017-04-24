class Player extends Phaser.Sprite{

  constructor(game,key,frame){
    super(game,0,0,'character',0);
    this.game = game;

    //animations
    this.animations.add('walk', [2,3,4,5,6,7], 10, true);
    this.animations.add('dig', [8,9,10,8,15,16], 10, true);
    // 11 down, 12 blink, 13 look left, 14 look right
    this.animations.add('idle', [0,0,0,11,0,0,0,11,0,12,0,11,0,0,0,11,0,0,0,11,13,13,13,11,0,0,0,11,14,14,14,11], 5, true);
    this.animations.add('jet', [17,18], 10, true);

    this.jetpackSound = game.sound.play('jetpack')
    this.jetpackSound.pause();

    this.inventory = [];
    this.touchingLastFrame = true;

    // settings
    this.speed=150;
    this.jumpSpeed = 200;
    this.mass = .01;
    this.size = 14;
    this.bodyY = -2;
    this.maxJetpackFuel = 100;
    this.jetpackFuel = this.maxJetpackFuel;

    // physics stuffs
    game.physics.p2.enable(this);

    this.body.mass = this.mass;
		this.anchor.setTo(0.5,0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
		this.body.setCircle(this.size,0,0);
    this.body.offset.set(0,this.bodyY)
		this.body.fixedRotation=true;

		this.body.setCollisionGroup(game.playerCollisionGroup);
		this.body.collides([game.worldCollisionGroup,game.playerCollisionGroup,game.physics.p2.boundsCollisionGroup])


    // create cursors
    this.cursors = this.game.input.keyboard.createCursorKeys();

  }

  dig(){
    // TODO
  }

  update(){
    let cursors = this.cursors;
    let player = this;
    let touching = touchingDown(player)
    let desiredX = null;
    // update the player

    if (cursors.down.isDown){
      desiredX=0;
      player.animations.play('dig');// dig!
      player.dig();
    }
    else if (cursors.left.isDown ){   //  Move to the left
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
        player.animations.play('idle');
      }

    }

    if (cursors.up.isDown&& !player.jumpedLastFrame){

        if(touching){  // this checks if the player is on the floor (we don't allow airjumps)
            player.body.velocity.y = -1*player.jumpSpeed;   //
            game.sound.play('jump');
            player.jumpedLastFrame = true;
        }
    }else{player.jumpedLastFrame = false;}

   if (!touching && cursors.up.isDown && player.hasJetpack && player.jetpackFuel > 0){
      player.jetpackFuel --;
      player.body.velocity.y = -1*player.jumpSpeed;
      player.animations.play('jet');
      if (!player.jetpackSound.isPlaying){
        player.jetpackSound.play()
      }

    }else if (!touching && !this.touchingLastFrame){
      player.loadTexture('character',1);
    }

    if(player.jetpackFuel<=0 || player.hasJetpack && !player.cursors.up.isDown){
      if (player.jetpackSound){player.jetpackSound.stop()}
    }

    if (touching){
      player.jetpackFuel = player.maxJetpackFuel;
    }

    // approach desiredX velocity
    if (desiredX !== null){
      player.body.velocity.x = player.body.velocity.x *0.5 + 0.5 * desiredX;
    }

    // handle falling beneath the map
    if (game.world && game.world.bounds && this.y > game.world.bounds.y+game.world.bounds.height){
      this.respawn();
    }

    this.touchingLastFrame = touching;

  }

  spawnToCheckpoint(p){
    this.body.x = p.x+p.size/2;
    this.body.y = p.y;
    this.body.velocity.y = 0
    this.body.velocity.x = 0;
  }

  spawnTo(x,y){
    this.body.x=x;
    this.body.y=y;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    if (this.game.playerGroup){
      console.log('add to player group');
      this.game.playerGroup.addChild(this);
    }else{
      console.log('no player group');
      this.game.world.addChild(this);
    }
  }

  respawn(){
    // get last checkpoint
    var pt = game.lastCheckpoint|| {x:0,y:0};
    this.spawnTo(pt.x,pt.y);
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
