import RainbowText from 'objects/RainbowText';
import Player from 'controllers/Player'

class PlayingState extends Phaser.State {

	create() {

		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.game.stage.backgroundColor = '#787878';
		let self = this;

		var map = this.map = window.map = this.game.add.tilemap('world');
		map.addTilesetImage('tiles','paint_tiles');

		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.gravity.y = 1400;

		this.physicsLayer = null;
		// render each layer of the map
		map.layers.forEach(function(l){
			let layer = map.createLayer(l.name);
			if (l.name == 'physical'){
				self.physicsLayer = layer;
				layer.debug=false;
				layer.resizeWorld();
				// now add the layer for the player
				game.playerGroup = game.add.group();
			}
		});


		// init physics
		// enable collision on all tiles in the physical layer
		map.setCollisionByExclusion([], true, 'physical', true)

		this.layermain_tiles = game.physics.p2.convertTilemap(map, this.physicsLayer);
		this.layerobjects_tiles = game.physics.p2.convertCollisionObjects(map,"collisions");   // this converts the polylines of the tiled - object layer into physics bodies.. make sure to use the "polyline" tool and not the "polygon" tool - otherwise it will not work!!

		// create player
		this.player = new Player(this.game,0,0);
    game.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);
		game.physics.p2.gravity.y = 300;

		// player physics
		var worldMaterial = this.game.physics.p2.createMaterial('worldMaterial');
		// apply to world tiles
		this.layerobjects_tiles.forEach(function(t){t.setMaterial(worldMaterial);});
		this.layermain_tiles.forEach(function(t){t.setMaterial(worldMaterial);});

		var spriteMaterial = this.game.physics.p2.createMaterial('spriteMaterial', this.player.body);
		this.game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

		var groundPlayerCM = this.game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { friction: 10000000.0 });


		//spawn player
		this.player.spawnTo(40,40);


	}

	update(){


	}



}



export default PlayingState;
