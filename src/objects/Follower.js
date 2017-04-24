import FixedSpeechBox from 'objects/FixedSpeechBox';

class Follower extends Phaser.Sprite{

  constructor(game,key){
    super(game,0,0,key||'follower',0);
    this.key = key||'follower';
    this.game = game;
    this.autoFollow = true;
    this.item = null;

    // home position
    this.shipPosition = {x:100,y:200};

    //animations
    this.animations.add('walk', [4,0,5,0], 10, true);
    this.animations.add('idle', [0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,0,0,3], 10, true);

    // settings
    this.speed=150;
    this.jumpSpeed = 200;
    this.mass = .01;
    this.size = 18;
    this.bodyY = 2;
    this.maxDistance = 300;
    this.stopDistance = 64;
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
    this.animations.play('idle');

  }

  follow(target){
    this.target = target;
    target.followers = target.followers || [];
    target.followers.push(this);
    this.stopDistance += this.followOffset*(target.followers.length-1);
    this.maxDistance += this.followOffset*(target.followers.length-1);
  }



  update(){

  if (this.item){
    this.item.x = this.x;
    this.item.y = this.y-16;
  }


  // follow the player if we found him
  if ( !this.item && this.autoFollow && !this.target && game.player && Phaser.Point.distance(this.body,game.player) < 32){
    this.follow(game.player);
    game.sound.play('hello');
    if (this.sayOnFollow){
      new FixedSpeechBox().alertSequence(this.sayOnFollow);
    }
  }

  if (this.target){
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


    }else{
      // no target
      // stand still
      this.body.velocity.x = this.body.velocity.x * 0.9;
    }

      // now pick animation
      if (this.body.velocity.x  > this.speed * 0.5){
        this.scale.x = 1;
        this.animations.play('walk');
      }else if (this.body.velocity.x < this.speed * -0.5){
        this.scale.x = -1;
        this.animations.play('walk');
      }else{
        this.animations.play('idle');
      }


  }

  spawnTo(x,y){
    this.body.x=x;
    this.body.y=y;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    if (this.game.followerGroup){
      console.log('add to follower group');
      this.game.followerGroup.addChild(this);
    }else{
      console.log('no follower group');
      this.game.world.addChild(this);
    }
  }

  giveItem(i){
    this.item = i;
    // find and remove this from the players followers
    var idx = game.player.followers.indexOf(this);
    if (idx > -1) {
      game.player.followers.splice(idx, 1);
    }else{console.log('!!!!!')}

    game.ship.addItem(i);

    this.body.x=game.ship.x + game.ship.items.length*32;
    this.body.y=game.ship.y;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.target = null;

    if (game.ship.items.length >= game.ship.itemsNeeded){
      new FixedSpeechBox().alert("Hey owl guy!\nYour ship is ready!");
    }else{
      new FixedSpeechBox().alert("I'll take this "+i.tilemapData.type+"\nto the ship for you!");
    }

  }

}

export default Follower;
