import RainbowText from 'objects/RainbowText';

class PlayingState extends Phaser.State {

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "Loaded");
		text.anchor.set(0.5);
		this.game.stage.backgroundColor = '#787878';
		map = this.game.add.tilemap('world');
	}

}

export default PlayingState;
