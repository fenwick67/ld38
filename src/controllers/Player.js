class Player extends Phaser.Sprite{

  constructor(game,key,frame){
    super(game,0,0,'paint_tiles',0);
    this.game = game;

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

export default Player
