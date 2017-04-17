import GameState from 'states/GameState';
import FullscreenController from 'controllers/FullscreenController'
import LevelController from 'controllers/LevelController'

class Game extends Phaser.Game {

	constructor() {
		super(640, 480, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');

		this.fullscreenController = new FullscreenController(this);

	}

}

new Game();
