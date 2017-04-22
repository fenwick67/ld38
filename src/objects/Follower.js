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
    this.mass = .01;
    this.size = 18;
    this.bodyY = 2;
    this.maxDistance = 300;
    this.stopDistance = 100;
    this.followOffset = 32;

    // physics stuffs
    game.physics.p2.enable(this);
    this.body.mass = this.mass;
    this.anchor.setTo(0.5,0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
    this.body.setCircle(this.size,0,0);
    this.body.offset.set(0,this.bodyY)
    this.body.fixedRotation=true;

    // create cursors
    this.cursors = this.game.input.keyboard.createCursorKeys();

		this.body.setCollisionGroup(game.npcCollisionGroup);
		this.body.collides([game.worldCollisionGroup,game.physics.p2.boundsCollisionGroup]);

  }

  follow(target){
    this.target = target;
    target.followers = target.followers || [];
    target.followers.push(this);
    this.stopCollidingWithPlayer();
    this.stopDistance += this.followOffset*(target.followers.length-1);
    this.maxDistance += this.followOffset*(target.followers.length-1);
  }


  stopCollidingWithPlayer(){
    // todo
  }

  update(){
    if (!this.target){return;}// don't move

    var d = Phaser.Point.distance(this.target.position,this.body);
    var dx = Math.abs(this.target.x - this.body.x);

    if ( d < this.stopDistance || dx < this.stopDistance){ /// close enough, slow down
      this.body.velocity.x = this.body.velocity.x * 0.9;
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
        this.body.velocity.x = -1*this.speed;
        this.animations.play('walk');
      }
      else {//  Move to the right
        this.body.velocity.x = this.speed;
      }

    }

    // now pick animation
    if (this.body.velocity.x  > this.speed * 0.5){
      this.scale.x = 1;
      this.animations.play('walk');
    }else if (this.body.velocity.x < this.speed * -0.5){
      this.scale.x = -1;
      this.animations.play('walk');
    }else{
      this.loadTexture(this.key,0);
    }


  }

  spawnTo(x,y){
    this.body.x=x;
    this.body.y=y;

    if (this.game.followerGroup){
      console.log('add to follower group');
      this.game.followerGroup.addChild(this);
    }else{
      console.log('no follower group');
      this.game.world.addChild(this);
    }
  }

}

export default Follower;
