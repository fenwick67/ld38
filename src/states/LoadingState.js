import RainbowText from 'objects/RainbowText';

class LoadingState extends Phaser.State {

	preload(){

		// assets go here
    game.load.tilemap('world', 'maps/world.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'vendor/platformer_deluxe/Tiles/tiles_spritesheet.png');
    console.log('loading');
		game.load.onLoadComplete.add(this.loadComplete,this	);
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		this.text.anchor.set(0.5);
		console.log('preload')
	}

	create() {
		console.log('create')
	}

	loadComplete(){
		console.log('loaded')
		this.text.text = 'loaded, press X to start'
	}

}

export default LoadingState;
