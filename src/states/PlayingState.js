import RainbowText from 'objects/RainbowText';
import Player from 'objects/Player';
import CurvyShader from 'objects/CurvyShader'
import Follower from 'objects/Follower';
import Checkpoint from 'objects/Checkpoint'
import Item from 'objects/Item'
import Sky from 'objects/Sky';
import SpeechBox from 'objects/SpeechBox';
import FixedSpeechBox from 'objects/FixedSpeechBox';
import PlayerSpeechBox from 'objects/PlayerSpeechBox';
import Ship from 'objects/Ship'

class PlayingState extends Phaser.State {

	create() {

		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.game.stage.backgroundColor = '#000000';
		let self = this;

		// add bg
		this.sky = new Sky(this.game,this.game.stage);
		game.world.addChild(this.sky);

		//create maps

		var map = this.map = window.map = this.game.add.tilemap('world');
		map.addTilesetImage('tiles','paint_tiles');
		map.addTilesetImage('huge_tiles',"huge_tiles")

		game.physics.startSystem(Phaser.Physics.P2JS);
		// create default collision group
		this.game.physics.p2.defaultCollisionGroup = this.game.physics.p2.collisionGroups[0];


		this.physicsLayer = null;
		// render each layer of the map
		map.layers.forEach(function(l){
			let layer = map.createLayer(l.name);
			if (l.name == 'physical'){
				self.physicsLayer = layer;
				layer.debug=false;
				layer.resizeWorld();
				// now add the layer for the player + followers
				game.itemGroup = game.add.group();
				game.followerGroup = game.add.group();
				game.playerGroup = game.add.group();
			}else if (l.name == "hazards"){
					self.hazardLayer = layer;
			}

		});

		// create filter

		this.warpFilter = new CurvyShader(game);
		this.warpFilter.sizeX = 10;
		this.warpFilter.sizeY = 10;
		this.warpFilter.warp = 0;
		this.world.filters = [this.warpFilter];

		// init physics

		// collision groups
		game.worldCollisionGroup = game.physics.p2.createCollisionGroup();
		game.playerCollisionGroup = game.physics.p2.createCollisionGroup();
		game.npcCollisionGroup = game.physics.p2.createCollisionGroup();

		// enable collision on all tiles in the physical layer
		map.setCollisionByExclusion([], true, 'physical', true)

		this.layermain_tiles = game.physics.p2.convertTilemap(map, this.physicsLayer);
		this.layerhazard_tiles = game.physics.p2.convertTilemap(map, this.hazardLayer);
		this.layerobjects_tiles = game.physics.p2.convertCollisionObjects(map,"collisions");   // this converts the polylines of the tiled - object layer into physics bodies.. make sure to use the "polyline" tool and not the "polygon" tool - otherwise it will not work!!

		//load the checkpoints
		map.objects.checkpoints.forEach(function(pt){
			var checkPt = new Checkpoint(game,pt);
		});

		//load the items
		map.objects.items.forEach(function(pt){
			var item = new Item(game,pt);
		});

		map.objects.followers.forEach(function(pt){
			var follower = new Follower(game,0,0);
			follower.spawnTo(pt.x,pt.y);
			if (pt.properties.sayOnFollow){
				follower.sayOnFollow = pt.properties.sayOnFollow.split('\n\n');
			}
		});


		this.layerobjects_tiles.forEach(makeWorldObjectCollide);
		this.layermain_tiles.forEach(makeWorldObjectCollide);
		this.layerhazard_tiles.forEach(makeWorldObjectCollide);

		function makeWorldObjectCollide(t){
			t.setCollisionGroup(game.worldCollisionGroup);
			t.collides([game.playerCollisionGroup,game.npcCollisionGroup,game.worldCollisionGroup]);
		}

		// TODO: make the hazard tiles kill the player

		// create player
		this.player = new Player(this.game,0,0);
		game.player = this.player;
		game.camera.follow(this.player);
		game.camera.deadzone = new Phaser.Rectangle(320/2-20,240/2-40,20,40);
		game.physics.p2.gravity.y = 800;


		//spawn player

		var spawned = false;

		map.objects.entities.forEach(function(e){
			if (e.type == 'spawn'){
				self.player.spawnTo(e.x,e.y);
				spawned = true;
			}
		});
		if (!spawned){
			console.warn('spawn point not deinfes');
			self.player.spawnTo(0,0);
		}

		// create speech box
			var b = new PlayerSpeechBox().alertSequence([
					'Where am I?',
					'Did my ship crash?',
					'Oh no! Pieces are\n strewn about everywhere!',
					'And to top it all off,\nThis gravity is so high!',
					'I can\'t fly, and the\nparts are too heavy to carry!'
			]);


		// play music
		if (!window.debug){
			game.music = game.add.audio('music-1');
			game.music.loopFull()
		}

		// create ship
		this.ship = game.ship = new Ship(game,176,208);

	}

	update(){
		// h = 1120
		this.warpFilter.warp = Math.max(Math.min((  game.camera.y/game.camera.bounds.height)  ,0.5),0.2)
	}



}



export default PlayingState;
