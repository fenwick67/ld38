import RainbowText from 'objects/RainbowText';

class PlayingState extends Phaser.State {

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.game.stage.backgroundColor = '#787878';
		var map = window.map = this.game.add.tilemap('world');

		map.addTilesetImage('tiles','paint_tiles');

		// render each layer
		map.layers.forEach(function(l){
			let layer = map.createLayer(l.name);
		})

	}

}

export default PlayingState;
