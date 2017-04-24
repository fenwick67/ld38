import FixedSpeechBox from 'objects/FixedSpeechBox';
import Sky from 'objects/Sky';

class LoadingState extends Phaser.State {

	create(){
    let center = { x: this.game.world.centerX, y: this.game.world.centerY }

    let s = `And with that, our hero
flew off into the sunset

Credits:
Everything: Fenwick67
`.split('\n\n')
    //let sky = new Sky(this.game,this.game.stage);

    let box = new FixedSpeechBox();
    box.alertSequence(s);

	}


}

export default LoadingState;
