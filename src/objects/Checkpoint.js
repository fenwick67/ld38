class Checkpoint extends Phaser.Sprite{

  constructor(game,objData){
    super(game,objData.x,objData.y-32,'checkpoint',0);

    this.active = false;
    this.game = game;
    this.size = 32;

    //animations
    this.animations.add('spin', [0,1,2,3,4,3,2,1], 10, true);
    this.animations.play('spin');
    this.animations.currentAnim.paused = true;

    if (!this.game.checkpoints){
      this.game.checkpoints = [];
    }

    this.game.checkpoints.push(this);

    // add to game immediately
    if (this.game.itemGroup){
      this.game.itemGroup.addChild(this);
    }else{
      this.game.world.addChild(this);
    }
  }

  update(){
    if (game.lastCheckpoint !== this && game.player && Phaser.Point.distance(this,game.player) < 32){
      var self = this;

      game.checkpoints.forEach(function(pt){
        if (pt != self){
          pt.active = false;
          pt.animations.currentAnim.paused = true;
        }
      })

      game.lastCheckpoint = this;

      this.active = true;
      this.animations.currentAnim.paused = false;
      game.sound.play('checkpoint');
    }
  }

}

export default Checkpoint;
