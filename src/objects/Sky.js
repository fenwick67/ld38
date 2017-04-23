class Sky extends Phaser.Group{
  constructor(game,parent){
    super(game, parent, null);

    this.game = game;
    this.tileSprite = new Phaser.TileSprite(this.game, 0, 0, 640, 480, 'bg');
    this.tileSprite.fixedToCamera = true;

    this.addChild(this.tileSprite);

  }

  update(){
    this.tileSprite.anchor.setTo((game.camera.x/(640*4))%0.5,(game.camera.y/6400)%0.5);
  }



}

export default Sky;
