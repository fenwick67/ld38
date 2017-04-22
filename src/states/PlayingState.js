import RainbowText from 'objects/RainbowText';
import Player from 'objects/Player';
import CurvyShader from 'objects/CurvyShader'
import Follower from 'objects/Follower';
import Checkpoint from 'objects/Checkpoint'
import Item from 'objects/Item'

class PlayingState extends Phaser.State {

	create() {

		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.game.stage.backgroundColor = '#787878';
		let self = this;


		//create maps

		var map = this.map = window.map = this.game.add.tilemap('world');
		map.addTilesetImage('tiles','paint_tiles');

		game.physics.startSystem(Phaser.Physics.P2JS);
		// create default collision group
		this.game.physics.p2.defaultCollisionGroup = this.game.physics.p2.collisionGroups[0];

		game.physics.p2.gravity.y = 1400;

		this.physicsLayer = null;
		// render each layer of the map
		map.layers.forEach(function(l){
			let layer = map.createLayer(l.name);
			if (l.name == 'physical'){
				self.physicsLayer = layer;
				layer.debug=false;
				layer.resizeWorld();
				// now add the layer for the player + followers
				game.followerGroup = game.add.group();
				game.playerGroup = game.add.group();
			}

		});

		// create filter

		this.warpFilter = new CurvyShader(game);
		this.warpFilter.sizeX = 10;
		this.warpFilter.sizeY = 10;
		this.warpFilter.warp = 0;
		this.world.filters = [this.warpFilter];

		// init physics
		// enable collision on all tiles in the physical layer
		map.setCollisionByExclusion([], true, 'physical', true)

		this.layermain_tiles = game.physics.p2.convertTilemap(map, this.physicsLayer);
		this.layerobjects_tiles = game.physics.p2.convertCollisionObjects(map,"collisions");   // this converts the polylines of the tiled - object layer into physics bodies.. make sure to use the "polyline" tool and not the "polygon" tool - otherwise it will not work!!

		//load the checkpoints
		map.objects.checkpoints.forEach(function(pt){
			var checkPt = new Checkpoint(game,pt);
		})

		//load the items
		map.objects.items.forEach(function(pt){
			var item = new Item(game,pt);
		})


		// collision groups
		game.worldCollisionGroup = game.physics.p2.createCollisionGroup();
		game.playerCollisionGroup = game.physics.p2.createCollisionGroup();
		game.npcCollisionGroup = game.physics.p2.createCollisionGroup();

		this.layerobjects_tiles.forEach(makeWorldObjectCollide);
		this.layermain_tiles.forEach(makeWorldObjectCollide);

		function makeWorldObjectCollide(t){
			t.setCollisionGroup(game.worldCollisionGroup);
			t.collides([game.playerCollisionGroup,game.npcCollisionGroup,game.worldCollisionGroup]);
		}

		// create player
		this.player = new Player(this.game,0,0);
		game.player = this.player;
		game.camera.follow(this.player);
		game.camera.deadzone = new Phaser.Rectangle(320/2-20,240/2-40,20,40);
		game.physics.p2.gravity.y = 500;


		//spawn player
		this.player.spawnTo(40,40);

		// create followers
		this.follower = new Follower(this.game,0,0);
		this.follower.follow(this.player);
		this.follower.spawnTo(140,140);

		this.follower2 = new Follower(this.game,0,0);
		this.follower2.follow(this.player);
		this.follower2.spawnTo(150,150);

	}

	update(){
		this.warpFilter.warp = Math.max(Math.min((this.game.camera.y) /3000,0.7),0)
	}



}



export default PlayingState;
