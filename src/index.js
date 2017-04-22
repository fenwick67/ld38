import LoadingState from 'states/LoadingState';
import PlayingState from 'states/PlayingState';

import FullscreenController  from 'controllers/FullscreenController'
import LevelController from 'controllers/LevelController'

class Game extends Phaser.Game {

	constructor() {
		var config = {
		    width: 320,
		    height: 240,
		    renderer: Phaser.AUTO,
		    antialias: false,
				resolution:2,
		    multiTexture: true,
				parent:'content'
		}
		super(config);
		this.fullscreenController = new FullscreenController(this);

		this.state.add('LoadingState', LoadingState, false);
		this.state.add('PlayingState', PlayingState, false);

		this.state.start('LoadingState');
		window.debug = true;

	}

}

window.game = new Game();
