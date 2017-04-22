class Follower extends Phaser.Sprite{

  constructor(game,key){
    super(game,0,0,key||'character',0);
    this.key = key||'character';
    this.game = game;

    //animations
    this.animations.add('walk', [2,3,4,5,4,3], 10, true);

    // settings
    this.speed=150;
    this.jumpSpeed = 200;
    this.mass = .00000000001;
    this.size = 14;
    this.bodyY = -2;
    this.maxDistance = 300;
    this.stopDistance = 100;

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

  follow(target){
    this.target = target;
    target.followers = target.followers || [];
    target.followers.push(this);
  }

  update(){
    if (!this.target){return;}

    var d = Phaser.Point.distance(this.target.position,this.body);
    var dx = Math.abs(this.target.x - this.body.x);

    if ( d < this.stopDistance || dx < this.stopDistance){ /// close enough
      this.body.velocity.x = 0;
      this.loadTexture(this.key,1);
      return;
    }

    // teleport to above player if too far away
    else if (d > this.maxDistance){
      this.body.x = this.target.x;
      this.body.y = this.target.y - this.target.size*3;
      return;
    }

    else{
      // move to player organically
      if (this.target.x < this.position.x ){   //  Move to the left
        this.scale.x = -1;  // a little trick.. flips the image to the left
        this.body.velocity.x = -1*this.speed;
        this.animations.play('walk');
      }
      else {//  Move to the right
        this.scale.x = 1;
        this.body.velocity.x = this.speed;
        this.animations.play('walk');
      }

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

}

export default Follower;
