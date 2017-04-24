import PlayerSpeechBox from 'objects/PlayerSpeechBox';

class Item extends Phaser.Sprite{

  constructor(game,objData){
    if (!objData.type){console.error(objData);throw new Error('you forgot a sprite name')}
    super(game,objData.x,objData.y-48,objData.type,0);

    this.tilemapData = objData;
    this.pickedUp = false;

    // add to game immediately
    if (this.game.itemGroup){
      this.game.itemGroup.addChild(this);
    }else{
      this.game.world.addChild(this);
    }
  }

  update(){
    if (!this.pickedUp && game.player && Phaser.Point.distance(this,game.player) < 32){
      this.onPickup();
    }
  }

  onPickup(){

    // give jetpack to player
    if (this.tilemapData.type && this.tilemapData.type == "jetpack"){
      game.player.hasJetpack = true;
      game.sound.play('pickup');
      this.pickedUp = true;
      this.destroy();
      new PlayerSpeechBox().alert('I can take this myself.\nNow I can finally fly \n on this planet!');
      return;
    }

    // pick up if there's a follower to give it to

    if (game.player && game.player.followers && game.player.followers.length > 0){
      this.pickedUp = true;
      game.sound.play('pickup');
      var follower = game.player.followers.pop();
      follower.giveItem(this);
    }

  }

}

export default Item;
