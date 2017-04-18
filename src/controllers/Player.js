class Player extends Phaser.Sprite{

  constructor(game,key,frame){
    super(game,0,0,key,frame);

    game.physics.arcade.enable(this);
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;// todo: remove this

  }

  spawn(x,y){
    this.x=x;
    this.y=y;
    this.game.world.addChild(this);
  }

  remove(){
    this.game.world.remove(this);
  }
}
