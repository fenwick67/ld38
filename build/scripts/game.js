(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var FullscreenController = function () {
    function FullscreenController(game) {
        var _this = this;

        _classCallCheck(this, FullscreenController);

        this.game = game;

        //add element
        this.el = document.createElement('span');
        this.el.classList.add("fullscreen-button");

        var text = document.createElement('span');
        text.textContent = "Go Fullscreen";
        this.el.appendChild(text);

        var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svg.setAttribute("width", "30px");
        svg.setAttribute("height", "30px");
        svg.setAttribute('viewBox', "0 0 50 50");
        svg.setAttribute("version", "1.1");
        svg.innerHTML = '\n    <polygon points="0 0 30 0 0 30 0 0" />\n    <polygon points="50 50 20 50 50 20 50 50" />\n    ';
        this.el.appendChild(svg);

        this.el.addEventListener('click', function () {
            return _this.gofull();
        });
        document.getElementById('content-after').appendChild(this.el);
    }

    _createClass(FullscreenController, [{
        key: 'gofull',
        value: function gofull() {
            if (this.game.scale.isFullScreen) {
                this.game.scale.stopFullScreen();
                this.game.canvas.classList.add('fullscreen');
            } else {
                this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.startFullScreen(false);
                this.game.canvas.classList.remove('fullscreen');
            }
        }
    }]);

    return FullscreenController;
}();

exports.default = FullscreenController;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var LevelController = function LevelController(game) {
  _classCallCheck(this, LevelController);

  this.game = game;
};

exports.default = LevelController;

},{}],3:[function(require,module,exports){
'use strict';

var _LoadingState = require('states/LoadingState');

var _LoadingState2 = _interopRequireDefault(_LoadingState);

var _PlayingState = require('states/PlayingState');

var _PlayingState2 = _interopRequireDefault(_PlayingState);

var _FullscreenController = require('controllers/FullscreenController');

var _FullscreenController2 = _interopRequireDefault(_FullscreenController);

var _LevelController = require('controllers/LevelController');

var _LevelController2 = _interopRequireDefault(_LevelController);

function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
		}
}

function _possibleConstructorReturn(self, call) {
		if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
		_inherits(Game, _Phaser$Game);

		function Game() {
				_classCallCheck(this, Game);

				var config = {
						width: 320,
						height: 240,
						renderer: Phaser.AUTO,
						antialias: false,
						resolution: 4,
						multiTexture: true,
						parent: 'content'
				};

				var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, config));

				_this.fullscreenController = new _FullscreenController2.default(_this);

				_this.state.add('LoadingState', _LoadingState2.default, false);
				_this.state.add('PlayingState', _PlayingState2.default, false);

				_this.state.start('LoadingState');
				window.debug = true;

				return _this;
		}

		return Game;
}(Phaser.Game);

window.game = new Game();

},{"controllers/FullscreenController":1,"controllers/LevelController":2,"states/LoadingState":8,"states/PlayingState":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CurvyShader = function (_Phaser$Filter) {
    _inherits(CurvyShader, _Phaser$Filter);

    function CurvyShader(game) {
        _classCallCheck(this, CurvyShader);

        var _this = _possibleConstructorReturn(this, (CurvyShader.__proto__ || Object.getPrototypeOf(CurvyShader)).call(this, game));

        _this.game = game;
        _this.uniforms.invert = { type: '1f', value: 0 };
        _this.uniforms.pixelSize = { type: '2f', value: { x: 1.0, y: 1.0 } };
        _this.uniforms.dimensions = { type: '2f', value: { x: 1000.0, y: 1000.0 } };

        _this.uniforms.warp = { type: '1f', value: 0 };
        _this.uniforms.offset = { type: '1f', value: 0 };

        _this.fragmentSrc = '\n\n          #define PI 3.14159\n          #define SQRT2 1.4142135623730951\n          precision mediump float;\n          varying vec2 vTextureCoord;\n          uniform vec2 dimensions;\n          uniform vec2 pixelSize;\n          uniform float offset;\n          uniform float warp;\n          uniform sampler2D uSampler;\n          void main(void){\n              // coords are 0..1.  Don\'t exceed that.\n              // zoom out the Y coords based on warp\n              float sc = warp*1./SQRT2;\n\n              vec2 zoomCoords = vec2(\n                 0.5+(vTextureCoord.x-0.5)*(1.0 - abs(sc)),\n                 0.5+(vTextureCoord.y-0.5)*(1.0 - abs(sc))\n               );\n              // now sample the middle up higher and outsides down lower\n              // TODO: determine the actual math for this\n\n              float moveUp = (0.9 -cos((vTextureCoord.x - 0.5) * PI/2.0 )) * warp ;\n              vec2 coord = zoomCoords + vec2(0.0,moveUp);\n              vec2 color =  coord ;\n              gl_FragColor = texture2D(uSampler, color);\n          }\n      ';

        return _this;
    }

    return CurvyShader;
}(Phaser.Filter);

/**
* An object with visible x and y properties that are used to define the size of the filter effect per pixel.
*
* @property size
* @type Phaser.Point
*/

Object.defineProperty(CurvyShader.prototype, 'size', {
    get: function get() {

        return this.uniforms.pixelSize.value;
    },

    set: function set(value) {

        this.dirty = true;
        this.uniforms.pixelSize.value = value;
    }
});

/**
* A value that defines the horizontal size of the filter effect per pixel.
*
* @property sizeX
* @type number
*/
Object.defineProperty(CurvyShader.prototype, 'sizeX', {
    get: function get() {
        return this.uniforms.pixelSize.value.x;
    },

    set: function set(value) {
        this.dirty = true;
        this.uniforms.pixelSize.value.x = value;
    }
});

/**
* A value that defines the vertical size of the filter effect per pixel.
*
* @property sizeY
* @type number
*/
Object.defineProperty(CurvyShader.prototype, 'sizeY', {
    get: function get() {
        return this.uniforms.pixelSize.value.y;
    },
    set: function set(value) {
        this.dirty = true;
        this.uniforms.pixelSize.value.y = value;
    }
});

/**
* A value that defines the vertical size of the filter effect per pixel.
*
* @property sizeY
* @type number
*/
Object.defineProperty(CurvyShader.prototype, 'warp', {
    get: function get() {
        return this.uniforms.warp.value;
    },
    set: function set(value) {
        this.dirty = true;
        this.uniforms.warp.value = value;
    }
});

/**
* A value that defines the vertical size of the filter effect per pixel.
*
* @property sizeY
* @type number
*/
Object.defineProperty(CurvyShader.prototype, 'offset', {
    get: function get() {
        return this.uniforms.offset.value;
    },
    set: function set(value) {
        this.dirty = true;
        this.uniforms.offset.value = value;
    }
});

exports.default = CurvyShader;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Follower = function (_Phaser$Sprite) {
  _inherits(Follower, _Phaser$Sprite);

  function Follower(game, key) {
    _classCallCheck(this, Follower);

    var _this = _possibleConstructorReturn(this, (Follower.__proto__ || Object.getPrototypeOf(Follower)).call(this, game, 0, 0, key || 'character', 0));

    _this.key = key || 'character';
    _this.game = game;

    //animations
    _this.animations.add('walk', [2, 3, 4, 5, 4, 3], 10, true);

    // settings
    _this.speed = 150;
    _this.jumpSpeed = 200;
    _this.mass = .00000000001;
    _this.size = 14;
    _this.bodyY = -2;
    _this.maxDistance = 300;
    _this.stopDistance = 100;

    // physics stuffs
    game.physics.p2.enable(_this);
    _this.body.mass = _this.mass;
    game.physics.p2.enable(_this);
    _this.anchor.setTo(0.5, 0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
    _this.body.setCircle(_this.size, 0, 0);
    _this.body.offset.set(0, _this.bodyY);
    _this.body.fixedRotation = true;

    // create cursors
    _this.cursors = _this.game.input.keyboard.createCursorKeys();

    return _this;
  }

  _createClass(Follower, [{
    key: 'follow',
    value: function follow(target) {
      this.target = target;
      target.followers = target.followers || [];
      target.followers.push(this);
    }
  }, {
    key: 'update',
    value: function update() {
      if (!this.target) {
        return;
      }

      var d = Phaser.Point.distance(this.target.position, this.body);
      var dx = Math.abs(this.target.x - this.body.x);

      if (d < this.stopDistance || dx < this.stopDistance) {
        /// close enough
        this.body.velocity.x = 0;
        this.loadTexture(this.key, 1);
        return;
      }

      // teleport to above player if too far away
      else if (d > this.maxDistance) {
          this.body.x = this.target.x;
          this.body.y = this.target.y - this.target.size * 3;
          return;
        } else {
          // move to player organically
          if (this.target.x < this.position.x) {
            //  Move to the left
            this.scale.x = -1; // a little trick.. flips the image to the left
            this.body.velocity.x = -1 * this.speed;
            this.animations.play('walk');
          } else {
            //  Move to the right
            this.scale.x = 1;
            this.body.velocity.x = this.speed;
            this.animations.play('walk');
          }
        }
    }
  }, {
    key: 'spawnTo',
    value: function spawnTo(x, y) {
      this.body.x = x;
      this.body.y = y;

      if (this.game.playerGroup) {
        console.log('add to player group');
        this.game.playerGroup.addChild(this);
      } else {
        console.log('no player group');
        this.game.world.addChild(this);
      }
    }
  }]);

  return Follower;
}(Phaser.Sprite);

exports.default = Follower;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Player = function (_Phaser$Sprite) {
  _inherits(Player, _Phaser$Sprite);

  function Player(game, key, frame) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, 0, 0, 'character', 0));

    _this.game = game;

    //animations
    _this.animations.add('walk', [2, 3, 4, 5], 10, true);

    // settings
    _this.speed = 150;
    _this.jumpSpeed = 200;
    _this.mass = .01;
    _this.size = 14;
    _this.bodyY = -2;

    // physics stuffs
    game.physics.p2.enable(_this);
    _this.body.mass = _this.mass;
    game.physics.p2.enable(_this);
    _this.anchor.setTo(0.5, 0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
    _this.body.setCircle(_this.size, 0, 0);
    _this.body.offset.set(0, _this.bodyY);
    _this.body.fixedRotation = true;

    // create cursors
    _this.cursors = _this.game.input.keyboard.createCursorKeys();

    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update() {
      var cursors = this.cursors;
      var player = this;
      var touching = touchingDown(player);
      var desiredX = null;
      // update the player

      if (cursors.left.isDown) {
        //  Move to the left
        player.scale.x = -1; // a little trick.. flips the image to the left
        desiredX = -1 * player.speed;
        player.animations.play('walk');
      } else if (cursors.right.isDown) {
        //  Move to the right
        player.scale.x = 1;
        desiredX = player.speed;
        player.animations.play('walk');
      } else {
        // pressing neither dir
        if (touching) {
          desiredX = 0; // stop on the ground
          player.loadTexture('character', 0); // this loads the frame 0 of my mario spritesheet  (stand)
        }
        // apply drag in the air
      }

      if (cursors.up.isDown) {
        //player.loadTexture('mario', 5);   // this loads the frame 5 (jump) of my mario spritesheet
        if (touching) {
          // this checks if the player is on the floor (we don't allow airjumps)
          player.body.velocity.y = -1 * player.jumpSpeed; // change the y velocity to -800 means "jump!"
        }
      }

      // show jump if airborne
      if (!touching) {
        player.loadTexture('character', 1);
      }

      // approach desiredX velocity
      if (desiredX !== null) {
        player.body.velocity.x = player.body.velocity.x * 0.5 + 0.5 * desiredX;
      }
    }
  }, {
    key: 'spawnTo',
    value: function spawnTo(x, y) {
      this.body.x = x;
      this.body.y = y;

      if (this.game.playerGroup) {
        console.log('add to player group');
        this.game.playerGroup.addChild(this);
      } else {
        console.log('no player group');
        this.game.world.addChild(this);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.game.world.remove(this);
    }
  }]);

  return Player;
}(Phaser.Sprite);

function touchingDown(someone) {
  var yAxis = p2.vec2.fromValues(0, 1);
  var result = false;
  for (var i = 0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++) {
    var c = game.physics.p2.world.narrowphase.contactEquations[i]; // cycles through all the contactEquations until it finds our "someone"
    if (c.bodyA === someone.body.data || c.bodyB === someone.body.data) {
      var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
      if (c.bodyA === someone.body.data) d *= -1;
      if (d > 0.5) result = true;
    }
  }return result;
}

exports.default = Player;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RainbowText = function (_Phaser$Text) {
	_inherits(RainbowText, _Phaser$Text);

	function RainbowText(game, x, y, text) {
		_classCallCheck(this, RainbowText);

		var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: "2em Arial", fill: "#ff0044", align: "center" }));

		_this._speed = 125; //ms
		_this._colorIndex = 0;
		_this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

		_this.colorize();
		_this.startTimer();

		_this.game.stage.addChild(_this);

		return _this;
	}

	_createClass(RainbowText, [{
		key: "startTimer",
		value: function startTimer() {
			this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
		}
	}, {
		key: "colorize",
		value: function colorize() {

			for (var i = 0; i < this.text.length; i++) {

				if (this._colorIndex === this._colors.length) {
					this._colorIndex = 0;
				}

				this.addColor(this._colors[this._colorIndex], i);
				this._colorIndex++;
			}
		}
	}]);

	return RainbowText;
}(Phaser.Text);

exports.default = RainbowText;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require('objects/RainbowText');

var _RainbowText2 = _interopRequireDefault(_RainbowText);

var _PlayingState = require('states/PlayingState');

var _PlayingState2 = _interopRequireDefault(_PlayingState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LoadingState = function (_Phaser$State) {
	_inherits(LoadingState, _Phaser$State);

	function LoadingState() {
		_classCallCheck(this, LoadingState);

		return _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).apply(this, arguments));
	}

	_createClass(LoadingState, [{
		key: 'preload',
		value: function preload() {

			// assets go here
			game.load.tilemap('world', 'maps/world.json', null, Phaser.Tilemap.TILED_JSON);
			game.load.image('paint_tiles', 'img/paint_tiles-sheet.png');
			game.load.spritesheet('character', 'img/character-sheet.png', 64, 64);

			console.log('loading');
			game.load.onLoadComplete.add(this.loadComplete, this);
			game.load.onFileComplete.add(this.fileComplete, this);

			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			this.text = new _RainbowText2.default(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
			this.text.anchor.set(0.5);
		}
	}, {
		key: 'loadComplete',
		value: function loadComplete() {
			this.text.text = 'Loaded.\nPress ENTER to start';
			this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
			if (window.debug) {
				this.whenDone();
			}
		}
	}, {
		key: 'fileComplete',
		value: function fileComplete(progress) {
			this.text.text = Math.round(progress) + '% loaded';
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.enter && this.enter.isDown) {
				this.whenDone();
			}
		}
	}, {
		key: 'whenDone',
		value: function whenDone() {
			this.text.destroy();
			// transition to playing state
			game.state.start('PlayingState');
		}
	}]);

	return LoadingState;
}(Phaser.State);

exports.default = LoadingState;

},{"objects/RainbowText":7,"states/PlayingState":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () {
		function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
		}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
}();

var _RainbowText = require('objects/RainbowText');

var _RainbowText2 = _interopRequireDefault(_RainbowText);

var _Player = require('objects/Player');

var _Player2 = _interopRequireDefault(_Player);

var _CurvyShader = require('objects/CurvyShader');

var _CurvyShader2 = _interopRequireDefault(_CurvyShader);

var _Follower = require('objects/Follower');

var _Follower2 = _interopRequireDefault(_Follower);

function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
		}
}

function _possibleConstructorReturn(self, call) {
		if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PlayingState = function (_Phaser$State) {
		_inherits(PlayingState, _Phaser$State);

		function PlayingState() {
				_classCallCheck(this, PlayingState);

				return _possibleConstructorReturn(this, (PlayingState.__proto__ || Object.getPrototypeOf(PlayingState)).apply(this, arguments));
		}

		_createClass(PlayingState, [{
				key: 'create',
				value: function create() {

						var center = { x: this.game.world.centerX, y: this.game.world.centerY };
						this.game.stage.backgroundColor = '#787878';
						var self = this;

						//create maps

						var map = this.map = window.map = this.game.add.tilemap('world');
						map.addTilesetImage('tiles', 'paint_tiles');

						game.physics.startSystem(Phaser.Physics.P2JS);
						game.physics.p2.gravity.y = 1400;

						this.physicsLayer = null;
						// render each layer of the map
						map.layers.forEach(function (l) {
								var layer = map.createLayer(l.name);
								if (l.name == 'physical') {
										self.physicsLayer = layer;
										layer.debug = false;
										layer.resizeWorld();
										// now add the layer for the player
										game.playerGroup = game.add.group();
								}
						});

						// create filter

						this.warpFilter = new _CurvyShader2.default(game);
						this.warpFilter.sizeX = 10;
						this.warpFilter.sizeY = 10;
						this.warpFilter.warp = 0;
						this.world.filters = [this.warpFilter];

						// init physics
						// enable collision on all tiles in the physical layer
						map.setCollisionByExclusion([], true, 'physical', true);

						this.layermain_tiles = game.physics.p2.convertTilemap(map, this.physicsLayer);
						this.layerobjects_tiles = game.physics.p2.convertCollisionObjects(map, "collisions"); // this converts the polylines of the tiled - object layer into physics bodies.. make sure to use the "polyline" tool and not the "polygon" tool - otherwise it will not work!!

						// create player
						this.player = new _Player2.default(this.game, 0, 0);
						game.camera.follow(this.player);
						game.camera.deadzone = new Phaser.Rectangle(320 / 2 - 20, 240 / 2 - 40, 20, 40);
						game.physics.p2.gravity.y = 500;

						// player physics
						var worldMaterial = this.game.physics.p2.createMaterial('worldMaterial');
						// apply to world tiles
						this.layerobjects_tiles.forEach(function (t) {
								t.setMaterial(worldMaterial);
						});
						this.layermain_tiles.forEach(function (t) {
								t.setMaterial(worldMaterial);
						});

						var spriteMaterial = this.game.physics.p2.createMaterial('spriteMaterial', this.player.body);
						this.game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

						var groundPlayerCM = this.game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { friction: 10000000.0 });

						//spawn player
						this.player.spawnTo(40, 40);

						// create followers
						this.follower = new _Follower2.default(this.game, 0, 0);
						//this.follower.follow(this.player);
						this.follower.spawnTo(300, 100);
				}
		}, {
				key: 'update',
				value: function update() {
						this.warpFilter.warp = Math.max(Math.min((this.game.camera.y - 100) / 3000, 0.7), 0);
				}
		}]);

		return PlayingState;
}(Phaser.State);

exports.default = PlayingState;

},{"objects/CurvyShader":4,"objects/Follower":5,"objects/Player":6,"objects/RainbowText":7}]},{},[3])
//# sourceMappingURL=game.js.map
