import RainbowText from 'objects/RainbowText';
import PlayingState from 'states/PlayingState'

class LoadingState extends Phaser.State {

	preload(){

		// assets go here
    game.load.tilemap('world', 'maps/world.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('paint_tiles', 'img/paint_tiles-sheet.png');
		game.load.image('paint_tiles', 'img/paint_tiles-sheet.png');

		['jetpack','battery','booster','steeringwheel'].forEach(function(name){
			game.load.image(name, 'img/'+name+'.png');
		})

		game.load.spritesheet('character', 'img/character-sheet.png',64,64);
		game.load.spritesheet('checkpoint', 'img/checkpoint.png',32,32);

    console.log('loading');
		game.load.onLoadComplete.add(this.loadComplete,this	);
		game.load.onFileComplete.add(this.fileComplete,this	);

		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		this.text.anchor.set(0.5);
	}

	loadComplete(){
		this.text.text = 'Loaded.\nPress ENTER to start';
		this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		if (window.debug){this.whenDone();}
	}

	fileComplete(progress){
		this.text.text = Math.round(progress)+'% loaded';
	}

	update(){
		if (this.enter && this.enter.isDown){
			this.whenDone();
		}
	}

	whenDone(){
		this.text.destroy();
		// transition to playing state
		game.state.start('PlayingState');
	}

}

export default LoadingState;
