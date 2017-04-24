import FixedSpeechBox from 'objects/FixedSpeechBox';

class Ship extends Phaser.Sprite{
  constructor(game,x,y){
    super(game,x,y,null,0);
    this.itemsNeeded = 6;
    this.items = [];
    game.world.addChild(this);
  }

  addItem(i){
    this.items.push(i);
  }

  update(){
    // get player, check if it's close
    if (this.items.length >= this.itemsNeeded && Phaser.Point.distance(this,game.player) < 32){
      //WIN!
      game.state.start('WonState');
      console.log('win')
    }
  }
}

export default Ship;
