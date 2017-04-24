import RainbowText from 'objects/RainbowText';

class SpeechBox extends Phaser.Group{
  constructor(x,y,str){
    super(game, game.world, null);
    this.str = str||'';
    this.x=x;
    this.y=y;

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ'// + '0123456789-*!©"\'?.…,'';
    this.retroFont = new Phaser.RetroFont(game, 'smallfont', 8, 8, chars, 8);

    this.box = new Phaser.Sprite(game,0,0,'textbox');
    this.addChild(this.box);

    this.textTexture = new Phaser.Image(game,0,0);
    this.textTexture.anchor.set(0.5, 1);
    this.addChild(this.textTexture);

		this.todoText = new RainbowText(this.game, 0, 0, this.str);
    this.addChild(this.todoText);

    this.updateText(this.str);
  }

  updateText(str){
    this.str = str;
    this.retroFont.text = str;
    this.todoText.text = str;
    this.retroFont.renderXY(this.textTexture);
  }

  show(str){
    if (typeof str == 'string'){this.updateText(str)}
    game.world.addChild(this);
    game.sound.play('speech')
  }

  showUntilButtonPress(str,destroyAfter){
    this.show(str);
    var self = this;

    game.paused = true;
    game.sound.mute = false;

    var p = new Promise(function(resolve,reject){

      window.addEventListener('keydown',function(e){
        if (e.key == "Enter"){
          window.removeEventListener('keydown',this);
          game.paused = false;
          setTimeout(resolve,0);
          if (destroyAfter){self.destroy()}
        }
      });

    });

    return p;
  }

  hide(){
    game.world.remove(this);
  }


}

export default SpeechBox;
