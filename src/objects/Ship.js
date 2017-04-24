import PlayerSpeechBox from 'objects/PlayerSpeechBox';

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
      new PlayerSpeechBox().alert('Goodbye my mole-looking friends!\nOff to more adventures!').then(function(){
        game.state.start('WonState');
        console.log('win')
      })
    }
  }
}

export default Ship;
