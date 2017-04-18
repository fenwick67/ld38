import LoadingState from 'states/LoadingState';
import PlayingState from 'states/PlayingState';

import FullscreenController from 'controllers/FullscreenController'
import LevelController from 'controllers/LevelController'

class Game extends Phaser.Game {

	constructor() {
		super(640, 480, Phaser.AUTO, 'content', null);
		this.fullscreenController = new FullscreenController(this);

		this.state.add('LoadingState', LoadingState, false);
		this.state.add('PlayingState', PlayingState, false);

		this.state.start('LoadingState');


	}

}

window.game = new Game();
