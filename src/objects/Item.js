class Item extends Phaser.Sprite{

  constructor(game,objData){
    if (!objData.type){console.error(objData);throw new Error('you forgot a sprite name')}
    super(game,objData.x,objData.y-48,objData.type,0);

    // add to game immediately
    if (this.game.itemGroup){
      this.game.itemGroup.addChild(this);
    }else{
      this.game.world.addChild(this);
    }
  }

  update(){
    if (game.player && Phaser.Point.distance(this,game.player) < 32){
      this.onPickup();
    }
  }

  onPickup(){
    // todo
    game.sound.play('pickup');
    this.destroy();
  }

}

export default Item;
