import RainbowText from 'objects/RainbowText';
import Player from 'controllers/Player'

class PlayingState extends Phaser.State {

	create() {

		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.game.stage.backgroundColor = '#787878';
		let self = this;

		var map = this.map = window.map = this.game.add.tilemap('world');
		map.addTilesetImage('tiles','paint_tiles');


		this.physicsLayer = null;
		// render each layer of the map
		map.layers.forEach(function(l){
			let layer = map.createLayer(l.name);
			if (l.name == 'physical'){
				self.physicsLayer = layer;
				layer.debug=true;
			}
		});

		//this.physicsLayer = map.layers[map.getLayer('physical')];

		// init physics
		// enable collision on all tiles in the physical layer
		map.setCollisionByExclusion([], true, 'physical', true)

		this.player = new Player(this,0,0);
		game.physics.enable(this.player);

		this.player.body.bounce.set(0.1);
		this.player.body.tilePadding.set(32);
		//game.physics.enable(this.physicsLayer);

		this.player.spawnTo(16,16);

    game.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);
		game.physics.arcade.gravity.y = 300;

	}

	update(){
		game.physics.arcade.collide(this.player, this.physicsLayer, this.collisionHandler, null, this);
	}

	collisionHandler(b1,b2){
		//console.log(arguments);
	}

}

export default PlayingState;
