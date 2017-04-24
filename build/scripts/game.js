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

var _WonState = require('states/WonState');

var _WonState2 = _interopRequireDefault(_WonState);

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
				_this.state.add('WonState', _WonState2.default, false);

				_this.state.start('LoadingState');

				// debug when devtools open
				window.debug = false;
				return _this;
		}

		return Game;
}(Phaser.Game);

window.game = new Game();

},{"controllers/FullscreenController":1,"controllers/LevelController":2,"states/LoadingState":15,"states/PlayingState":16,"states/WonState":17}],4:[function(require,module,exports){
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

var Checkpoint = function (_Phaser$Sprite) {
  _inherits(Checkpoint, _Phaser$Sprite);

  function Checkpoint(game, objData) {
    _classCallCheck(this, Checkpoint);

    var _this = _possibleConstructorReturn(this, (Checkpoint.__proto__ || Object.getPrototypeOf(Checkpoint)).call(this, game, objData.x, objData.y - 32, 'checkpoint', 0));

    _this.active = false;
    _this.game = game;
    _this.size = 32;

    //animations
    _this.animations.add('spin', [0, 1, 2, 3, 4, 3, 2, 1], 10, true);
    _this.animations.play('spin');
    _this.animations.currentAnim.paused = true;

    if (!_this.game.checkpoints) {
      _this.game.checkpoints = [];
    }

    _this.game.checkpoints.push(_this);

    // add to game immediately
    if (_this.game.itemGroup) {
      _this.game.itemGroup.addChild(_this);
    } else {
      _this.game.world.addChild(_this);
    }
    return _this;
  }

  _createClass(Checkpoint, [{
    key: 'update',
    value: function update() {
      if (game.lastCheckpoint !== this && game.player && Phaser.Point.distance(this, game.player) < 32) {
        var self = this;

        game.checkpoints.forEach(function (pt) {
          if (pt != self) {
            pt.active = false;
            pt.animations.currentAnim.paused = true;
          }
        });

        game.lastCheckpoint = this;

        this.active = true;
        this.animations.currentAnim.paused = false;
        game.sound.play('checkpoint');
      }
    }
  }]);

  return Checkpoint;
}(Phaser.Sprite);

exports.default = Checkpoint;

},{}],5:[function(require,module,exports){
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

var _SpeechBox2 = require('objects/SpeechBox');

var _SpeechBox3 = _interopRequireDefault(_SpeechBox2);

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

var FixedSpeechBox = function (_SpeechBox) {
  _inherits(FixedSpeechBox, _SpeechBox);

  function FixedSpeechBox(x, y, str) {
    _classCallCheck(this, FixedSpeechBox);

    var _this = _possibleConstructorReturn(this, (FixedSpeechBox.__proto__ || Object.getPrototypeOf(FixedSpeechBox)).call(this, x, y, str));
    // fit to center


    _this.fixedToCamera = true;
    _this.todoText.x = 640 / 4 - 64;
    _this.todoText.y = 480 / 4 - 64;
    _this.todoText.anchor.set(0.5);

    _this.cameraOffset.set(64, 64);
    return _this;
  }

  _createClass(FixedSpeechBox, [{
    key: 'alert',
    value: function alert(str, hideAfter) {
      var hideAfter = hideAfter;
      if (typeof hideAfter == 'undefined') {
        hideAfter = true;
      }
      return this.showUntilButtonPress(str, hideAfter);
    }
  }, {
    key: 'alertSequence',
    value: function alertSequence(strs) {
      var self = this;

      if (typeof strs == 'string') {
        return this.alert(strs);
      }

      // http://stackoverflow.com/questions/29880715/how-to-synchronize-a-sequence-of-promises

      var index = 0;
      function next() {
        if (index < strs.length) {
          self.alert(strs[index++], false).then(next);
        } else {
          //end
          self.destroy();
        }
      }
      next();
    }
  }]);

  return FixedSpeechBox;
}(_SpeechBox3.default);

exports.default = FixedSpeechBox;

window.FixedSpeechBox = FixedSpeechBox;

},{"objects/SpeechBox":14}],7:[function(require,module,exports){
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

var _FixedSpeechBox = require('objects/FixedSpeechBox');

var _FixedSpeechBox2 = _interopRequireDefault(_FixedSpeechBox);

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

var Follower = function (_Phaser$Sprite) {
  _inherits(Follower, _Phaser$Sprite);

  function Follower(game, key) {
    _classCallCheck(this, Follower);

    var _this = _possibleConstructorReturn(this, (Follower.__proto__ || Object.getPrototypeOf(Follower)).call(this, game, 0, 0, key || 'follower', 0));

    _this.key = key || 'follower';
    _this.game = game;
    _this.autoFollow = true;
    _this.item = null;

    // home position
    _this.shipPosition = { x: 100, y: 200 };

    //animations
    _this.animations.add('walk', [4, 0, 5, 0], 10, true);
    _this.animations.add('idle', [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3], 10, true);

    // settings
    _this.speed = 150;
    _this.jumpSpeed = 200;
    _this.mass = .01;
    _this.size = 18;
    _this.bodyY = 2;
    _this.maxDistance = 300;
    _this.stopDistance = 64;
    _this.followOffset = 32;

    // physics stuffs
    game.physics.p2.enable(_this);
    _this.body.mass = _this.mass;
    _this.anchor.setTo(0.5, 0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
    _this.body.setCircle(_this.size, 0, 0);
    _this.body.offset.set(0, _this.bodyY);
    _this.body.fixedRotation = true;

    // create cursors
    _this.cursors = _this.game.input.keyboard.createCursorKeys();

    _this.body.setCollisionGroup(game.npcCollisionGroup);
    _this.body.collides([game.worldCollisionGroup, game.physics.p2.boundsCollisionGroup]);
    _this.animations.play('idle');

    return _this;
  }

  _createClass(Follower, [{
    key: 'follow',
    value: function follow(target) {
      this.target = target;
      target.followers = target.followers || [];
      target.followers.push(this);
      this.stopDistance += this.followOffset * (target.followers.length - 1);
      this.maxDistance += this.followOffset * (target.followers.length - 1);
    }
  }, {
    key: 'update',
    value: function update() {

      if (this.item) {
        this.item.x = this.x;
        this.item.y = this.y - 16;
      }

      // follow the player if we found him
      if (!this.item && this.autoFollow && !this.target && game.player && Phaser.Point.distance(this.body, game.player) < 32) {
        this.follow(game.player);
        game.sound.play('hello');
        if (this.sayOnFollow) {
          new _FixedSpeechBox2.default().alertSequence(this.sayOnFollow);
        }
      }

      if (this.target) {
        var d = Phaser.Point.distance(this.target.position, this.body);
        var dx = Math.abs(this.target.x - this.body.x);

        if (d < this.stopDistance || dx < this.stopDistance) {
          /// close enough, slow down
          this.body.velocity.x = this.body.velocity.x * 0.9;
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
              this.body.velocity.x = -1 * this.speed;
              this.animations.play('walk');
            } else {
              //  Move to the right
              this.body.velocity.x = this.speed;
            }
          }
      } else {
        // no target
        // stand still
        this.body.velocity.x = this.body.velocity.x * 0.9;
      }

      // now pick animation
      if (this.body.velocity.x > this.speed * 0.5) {
        this.scale.x = 1;
        this.animations.play('walk');
      } else if (this.body.velocity.x < this.speed * -0.5) {
        this.scale.x = -1;
        this.animations.play('walk');
      } else {
        this.animations.play('idle');
      }
    }
  }, {
    key: 'spawnTo',
    value: function spawnTo(x, y) {
      this.body.x = x;
      this.body.y = y;
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      if (this.game.followerGroup) {
        console.log('add to follower group');
        this.game.followerGroup.addChild(this);
      } else {
        console.log('no follower group');
        this.game.world.addChild(this);
      }
    }
  }, {
    key: 'giveItem',
    value: function giveItem(i) {
      this.item = i;
      // find and remove this from the players followers
      var idx = game.player.followers.indexOf(this);
      if (idx > -1) {
        game.player.followers.splice(idx, 1);
      } else {
        console.log('!!!!!');
      }

      game.ship.addItem(i);

      this.body.x = game.ship.x + game.ship.items.length * 32;
      this.body.y = game.ship.y;
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
      this.target = null;

      if (game.ship.items.length >= game.ship.itemsNeeded) {
        new _FixedSpeechBox2.default().alert("Hey owl guy!\nYour ship is ready!");
      } else {
        new _FixedSpeechBox2.default().alert("I'll take this " + i.tilemapData.type + "\nto the ship for you!");
      }
    }
  }]);

  return Follower;
}(Phaser.Sprite);

exports.default = Follower;

},{"objects/FixedSpeechBox":6}],8:[function(require,module,exports){
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

var _PlayerSpeechBox = require('objects/PlayerSpeechBox');

var _PlayerSpeechBox2 = _interopRequireDefault(_PlayerSpeechBox);

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

var Item = function (_Phaser$Sprite) {
  _inherits(Item, _Phaser$Sprite);

  function Item(game, objData) {
    _classCallCheck(this, Item);

    if (!objData.type) {
      console.error(objData);throw new Error('you forgot a sprite name');
    }

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, game, objData.x, objData.y - 48, objData.type, 0));

    _this.tilemapData = objData;
    _this.pickedUp = false;

    // add to game immediately
    if (_this.game.itemGroup) {
      _this.game.itemGroup.addChild(_this);
    } else {
      _this.game.world.addChild(_this);
    }
    return _this;
  }

  _createClass(Item, [{
    key: 'update',
    value: function update() {
      if (!this.pickedUp && game.player && Phaser.Point.distance(this, game.player) < 32) {
        this.onPickup();
      }
    }
  }, {
    key: 'onPickup',
    value: function onPickup() {

      // give jetpack to player
      if (this.tilemapData.type && this.tilemapData.type == "jetpack") {
        game.player.hasJetpack = true;
        game.sound.play('pickup');
        this.pickedUp = true;
        this.destroy();
        new _PlayerSpeechBox2.default().alert('I can take this myself.\nNow I can finally fly \n on this planet!');
        return;
      }

      // pick up if there's a follower to give it to

      if (game.player && game.player.followers && game.player.followers.length > 0) {
        this.pickedUp = true;
        game.sound.play('pickup');
        var follower = game.player.followers.pop();
        follower.giveItem(this);
      }
    }
  }]);

  return Item;
}(Phaser.Sprite);

exports.default = Item;

},{"objects/PlayerSpeechBox":10}],9:[function(require,module,exports){
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
    _this.animations.add('walk', [2, 3, 4, 5, 6, 7], 10, true);
    _this.animations.add('dig', [8, 9, 10, 8, 15, 16], 10, true);
    // 11 down, 12 blink, 13 look left, 14 look right
    _this.animations.add('idle', [0, 0, 0, 11, 0, 0, 0, 11, 0, 12, 0, 11, 0, 0, 0, 11, 0, 0, 0, 11, 13, 13, 13, 11, 0, 0, 0, 11, 14, 14, 14, 11], 5, true);
    _this.animations.add('jet', [17, 18], 10, true);

    _this.inventory = [];
    _this.touchingLastFrame = true;

    // settings
    _this.speed = 150;
    _this.jumpSpeed = 200;
    _this.mass = .01;
    _this.size = 14;
    _this.bodyY = -2;
    _this.maxJetpackFuel = 100;
    _this.jetpackFuel = _this.maxJetpackFuel;

    // physics stuffs
    game.physics.p2.enable(_this);

    _this.body.mass = _this.mass;
    _this.anchor.setTo(0.5, 0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
    _this.body.setCircle(_this.size, 0, 0);
    _this.body.offset.set(0, _this.bodyY);
    _this.body.fixedRotation = true;

    _this.body.setCollisionGroup(game.playerCollisionGroup);
    _this.body.collides([game.worldCollisionGroup, game.playerCollisionGroup, game.physics.p2.boundsCollisionGroup]);

    // create cursors
    _this.cursors = _this.game.input.keyboard.createCursorKeys();

    return _this;
  }

  _createClass(Player, [{
    key: 'dig',
    value: function dig() {
      // TODO
    }
  }, {
    key: 'update',
    value: function update() {
      var cursors = this.cursors;
      var player = this;
      var touching = touchingDown(player);
      var desiredX = null;
      // update the player

      if (cursors.down.isDown) {
        desiredX = 0;
        player.animations.play('dig'); // dig!
        player.dig();
      } else if (cursors.left.isDown) {
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
          player.animations.play('idle');
        }
      }

      if (cursors.up.isDown && !player.jumpedLastFrame) {

        if (touching) {
          // this checks if the player is on the floor (we don't allow airjumps)
          player.body.velocity.y = -1 * player.jumpSpeed; //
          game.sound.play('jump');
          player.jumpedLastFrame = true;
        }
      } else {
        player.jumpedLastFrame = false;
      }

      if (!touching && cursors.up.isDown && player.hasJetpack && player.jetpackFuel > 0) {
        player.jetpackFuel--;
        player.body.velocity.y = -1 * player.jumpSpeed;
        player.animations.play('jet');
      } else if (!touching && !this.touchingLastFrame) {
        player.loadTexture('character', 1);
      }

      if (touching) {
        player.jetpackFuel = player.maxJetpackFuel;
      }

      // approach desiredX velocity
      if (desiredX !== null) {
        player.body.velocity.x = player.body.velocity.x * 0.5 + 0.5 * desiredX;
      }

      // handle falling beneath the map
      if (game.world && game.world.bounds && this.y > game.world.bounds.y + game.world.bounds.height) {
        this.respawn();
      }

      this.touchingLastFrame = touching;
    }
  }, {
    key: 'spawnToCheckpoint',
    value: function spawnToCheckpoint(p) {
      this.body.x = p.x + p.size / 2;
      this.body.y = p.y;
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
    }
  }, {
    key: 'spawnTo',
    value: function spawnTo(x, y) {
      this.body.x = x;
      this.body.y = y;
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      if (this.game.playerGroup) {
        console.log('add to player group');
        this.game.playerGroup.addChild(this);
      } else {
        console.log('no player group');
        this.game.world.addChild(this);
      }
    }
  }, {
    key: 'respawn',
    value: function respawn() {
      // get last checkpoint
      var pt = game.lastCheckpoint || { x: 0, y: 0 };
      this.spawnTo(pt.x, pt.y);
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

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FixedSpeechBox2 = require('objects/FixedSpeechBox');

var _FixedSpeechBox3 = _interopRequireDefault(_FixedSpeechBox2);

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
} // same as FixedSpeechBox BUT it has a brown color


var PlayerSpeechBox = function (_FixedSpeechBox) {
  _inherits(PlayerSpeechBox, _FixedSpeechBox);

  function PlayerSpeechBox(a, r, g, s) {
    _classCallCheck(this, PlayerSpeechBox);

    var _this = _possibleConstructorReturn(this, (PlayerSpeechBox.__proto__ || Object.getPrototypeOf(PlayerSpeechBox)).call(this, a, r, g, s));

    var s = {};
    var currStyle = _this.todoText.style;
    var k = Object.keys(currStyle);
    for (var i = 0; i < k.length; i++) {
      s[k[i]] = currStyle[k[i]];
    }
    s.fill = '#aaaa00';

    _this.todoText.setStyle(s);
    return _this;
  }

  return PlayerSpeechBox;
}(_FixedSpeechBox3.default);

exports.default = PlayerSpeechBox;

},{"objects/FixedSpeechBox":6}],11:[function(require,module,exports){
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

		var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: "1em Arial", fill: "#ffffff", align: "center" }));

		_this._speed = 125; //ms
		_this._colorIndex = 0;
		_this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

		//this.colorize();
		_this.startTimer();

		_this.game.stage.addChild(_this);

		return _this;
	}

	_createClass(RainbowText, [{
		key: "startTimer",
		value: function startTimer() {
			//this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
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

},{}],12:[function(require,module,exports){
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

var _FixedSpeechBox = require('objects/FixedSpeechBox');

var _FixedSpeechBox2 = _interopRequireDefault(_FixedSpeechBox);

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

var Ship = function (_Phaser$Sprite) {
  _inherits(Ship, _Phaser$Sprite);

  function Ship(game, x, y) {
    _classCallCheck(this, Ship);

    var _this = _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this, game, x, y, null, 0));

    _this.itemsNeeded = 6;
    _this.items = [];
    game.world.addChild(_this);
    return _this;
  }

  _createClass(Ship, [{
    key: 'addItem',
    value: function addItem(i) {
      this.items.push(i);
    }
  }, {
    key: 'update',
    value: function update() {
      // get player, check if it's close
      if (this.items.length >= this.itemsNeeded && Phaser.Point.distance(this, game.player) < 32) {
        //WIN!
        game.state.start('WonState');
        console.log('win');
      }
    }
  }]);

  return Ship;
}(Phaser.Sprite);

exports.default = Ship;

},{"objects/FixedSpeechBox":6}],13:[function(require,module,exports){
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

var Sky = function (_Phaser$Group) {
  _inherits(Sky, _Phaser$Group);

  function Sky(game, parent) {
    _classCallCheck(this, Sky);

    var _this = _possibleConstructorReturn(this, (Sky.__proto__ || Object.getPrototypeOf(Sky)).call(this, game, parent, null));

    _this.game = game;
    _this.tileSprite = new Phaser.TileSprite(_this.game, 0, 0, 640, 480, 'bg');
    _this.tileSprite.fixedToCamera = true;

    _this.addChild(_this.tileSprite);

    return _this;
  }

  _createClass(Sky, [{
    key: 'update',
    value: function update() {
      this.tileSprite.anchor.setTo(game.camera.x / (640 * 4) % 0.5, game.camera.y / 6400 % 0.5);
    }
  }]);

  return Sky;
}(Phaser.Group);

exports.default = Sky;

},{}],14:[function(require,module,exports){
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

var SpeechBox = function (_Phaser$Group) {
  _inherits(SpeechBox, _Phaser$Group);

  function SpeechBox(x, y, str) {
    _classCallCheck(this, SpeechBox);

    var _this = _possibleConstructorReturn(this, (SpeechBox.__proto__ || Object.getPrototypeOf(SpeechBox)).call(this, game, game.world, null));

    _this.str = str || '';
    _this.x = x;
    _this.y = y;

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ'; // + '0123456789-*!©"\'?.…,'';
    _this.retroFont = new Phaser.RetroFont(game, 'smallfont', 8, 8, chars, 8);

    _this.box = new Phaser.Sprite(game, 0, 0, 'textbox');
    _this.addChild(_this.box);

    _this.textTexture = new Phaser.Image(game, 0, 0);
    _this.textTexture.anchor.set(0.5, 1);
    _this.addChild(_this.textTexture);

    _this.todoText = new _RainbowText2.default(_this.game, 0, 0, _this.str);
    _this.addChild(_this.todoText);

    _this.updateText(_this.str);
    return _this;
  }

  _createClass(SpeechBox, [{
    key: 'updateText',
    value: function updateText(str) {
      this.str = str;
      this.retroFont.text = str;
      this.todoText.text = str;
      this.retroFont.renderXY(this.textTexture);
    }
  }, {
    key: 'show',
    value: function show(str) {
      if (typeof str == 'string') {
        this.updateText(str);
      }
      game.world.addChild(this);
      game.sound.play('speech');
    }
  }, {
    key: 'showUntilButtonPress',
    value: function showUntilButtonPress(str, destroyAfter) {
      this.show(str);
      var self = this;

      game.paused = true;
      game.sound.mute = false;

      var p = new Promise(function (resolve, reject) {

        window.addEventListener('keydown', function (e) {
          if (e.key == "Enter") {
            window.removeEventListener('keydown', this);
            game.paused = false;
            setTimeout(resolve, 0);
            if (destroyAfter) {
              self.destroy();
            }
          }
        });
      });

      return p;
    }
  }, {
    key: 'hide',
    value: function hide() {
      game.world.remove(this);
    }
  }]);

  return SpeechBox;
}(Phaser.Group);

exports.default = SpeechBox;

},{"objects/RainbowText":11}],15:[function(require,module,exports){
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
			game.load.image('huge_tiles', 'img/huge_tiles.png');

			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			this.text = new _RainbowText2.default(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
			this.text.anchor.set(0.5);

			['jetpack', 'battery', 'booster', 'steeringwheel', 'bg', 'textbox', 'smallfont'].forEach(function (name) {
				game.load.image(name, 'img/' + name + '.png');
			});

			['die', 'dig', 'hello', 'jump', 'pickup', 'speech', 'checkpoint', 'music-1'].forEach(function (name) {
				game.load.audio(name, 'sounds/' + name + '.wav');
			});

			game.load.spritesheet('character', 'img/character-sheet.png', 64, 64);
			game.load.spritesheet('follower', 'img/follower.png', 64, 64);
			game.load.spritesheet('checkpoint', 'img/checkpoint.png', 32, 32);

			console.log('loading');
			game.load.onLoadComplete.add(this.loadComplete, this);
			game.load.onFileComplete.add(this.fileComplete, this);
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

},{"objects/RainbowText":11,"states/PlayingState":16}],16:[function(require,module,exports){
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

var _Checkpoint = require('objects/Checkpoint');

var _Checkpoint2 = _interopRequireDefault(_Checkpoint);

var _Item = require('objects/Item');

var _Item2 = _interopRequireDefault(_Item);

var _Sky = require('objects/Sky');

var _Sky2 = _interopRequireDefault(_Sky);

var _SpeechBox = require('objects/SpeechBox');

var _SpeechBox2 = _interopRequireDefault(_SpeechBox);

var _FixedSpeechBox = require('objects/FixedSpeechBox');

var _FixedSpeechBox2 = _interopRequireDefault(_FixedSpeechBox);

var _PlayerSpeechBox = require('objects/PlayerSpeechBox');

var _PlayerSpeechBox2 = _interopRequireDefault(_PlayerSpeechBox);

var _Ship = require('objects/Ship');

var _Ship2 = _interopRequireDefault(_Ship);

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

						// add bg
						this.sky = new _Sky2.default(this.game, this.game.stage);
						game.world.addChild(this.sky);

						//create maps

						var map = this.map = window.map = this.game.add.tilemap('world');
						map.addTilesetImage('tiles', 'paint_tiles');
						map.addTilesetImage('huge_tiles', "huge_tiles");

						game.physics.startSystem(Phaser.Physics.P2JS);
						// create default collision group
						this.game.physics.p2.defaultCollisionGroup = this.game.physics.p2.collisionGroups[0];

						this.physicsLayer = null;
						// render each layer of the map
						map.layers.forEach(function (l) {
								var layer = map.createLayer(l.name);
								if (l.name == 'physical') {
										self.physicsLayer = layer;
										layer.debug = false;
										layer.resizeWorld();
										// now add the layer for the player + followers
										game.itemGroup = game.add.group();
										game.followerGroup = game.add.group();
										game.playerGroup = game.add.group();
								} else if (l.name == "hazards") {
										self.hazardLayer = layer;
								}
						});

						// create filter

						this.warpFilter = new _CurvyShader2.default(game);
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
						map.setCollisionByExclusion([], true, 'physical', true);

						this.layermain_tiles = game.physics.p2.convertTilemap(map, this.physicsLayer);
						this.layerhazard_tiles = game.physics.p2.convertTilemap(map, this.hazardLayer);
						this.layerobjects_tiles = game.physics.p2.convertCollisionObjects(map, "collisions"); // this converts the polylines of the tiled - object layer into physics bodies.. make sure to use the "polyline" tool and not the "polygon" tool - otherwise it will not work!!

						//load the checkpoints
						map.objects.checkpoints.forEach(function (pt) {
								var checkPt = new _Checkpoint2.default(game, pt);
						});

						//load the items
						map.objects.items.forEach(function (pt) {
								var item = new _Item2.default(game, pt);
						});

						map.objects.followers.forEach(function (pt) {
								var follower = new _Follower2.default(game, 0, 0);
								follower.spawnTo(pt.x, pt.y);
								if (pt.properties.sayOnFollow) {
										follower.sayOnFollow = pt.properties.sayOnFollow.split('\n\n');
								}
						});

						this.layerobjects_tiles.forEach(makeWorldObjectCollide);
						this.layermain_tiles.forEach(makeWorldObjectCollide);
						this.layerhazard_tiles.forEach(makeWorldObjectCollide);

						function makeWorldObjectCollide(t) {
								t.setCollisionGroup(game.worldCollisionGroup);
								t.collides([game.playerCollisionGroup, game.npcCollisionGroup, game.worldCollisionGroup]);
						}

						// TODO: make the hazard tiles kill the player

						// create player
						this.player = new _Player2.default(this.game, 0, 0);
						game.player = this.player;
						game.camera.follow(this.player);
						game.camera.deadzone = new Phaser.Rectangle(320 / 2 - 20, 240 / 2 - 40, 20, 40);
						game.physics.p2.gravity.y = 800;

						//spawn player

						var spawned = false;

						map.objects.entities.forEach(function (e) {
								if (e.type == 'spawn') {
										self.player.spawnTo(e.x, e.y);
										spawned = true;
								}
						});
						if (!spawned) {
								console.warn('spawn point not deinfes');
								self.player.spawnTo(0, 0);
						}

						// create speech box
						var b = new _PlayerSpeechBox2.default().alertSequence(['Where am I?', 'Did my ship crash?', 'Oh no! Pieces are\n strewn about everywhere!', 'And to top it all off,\nThis gravity is so high!', 'I can\'t fly, and the\nparts are too heavy to carry!']);

						// play music
						if (!window.debug) {
								game.music = game.add.audio('music-1');
								game.music.loopFull();
						}

						// create ship
						this.ship = game.ship = new _Ship2.default(game, 176, 208);
				}
		}, {
				key: 'update',
				value: function update() {
						// h = 1120
						this.warpFilter.warp = Math.max(Math.min(game.camera.y / game.camera.bounds.height, 0.5), 0.2);
				}
		}]);

		return PlayingState;
}(Phaser.State);

exports.default = PlayingState;

},{"objects/Checkpoint":4,"objects/CurvyShader":5,"objects/FixedSpeechBox":6,"objects/Follower":7,"objects/Item":8,"objects/Player":9,"objects/PlayerSpeechBox":10,"objects/RainbowText":11,"objects/Ship":12,"objects/Sky":13,"objects/SpeechBox":14}],17:[function(require,module,exports){
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

var _FixedSpeechBox = require('objects/FixedSpeechBox');

var _FixedSpeechBox2 = _interopRequireDefault(_FixedSpeechBox);

var _Sky = require('objects/Sky');

var _Sky2 = _interopRequireDefault(_Sky);

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
        key: 'create',
        value: function create() {
            var center = { x: this.game.world.centerX, y: this.game.world.centerY };

            var s = 'And with that, our hero\nflew off into the sunset\n\nCredits:\nEverything: Fenwick67\n'.split('\n\n');
            //let sky = new Sky(this.game,this.game.stage);

            var box = new _FixedSpeechBox2.default();
            box.alertSequence(s);
        }
    }]);

    return LoadingState;
}(Phaser.State);

exports.default = LoadingState;

},{"objects/FixedSpeechBox":6,"objects/Sky":13}]},{},[3])
//# sourceMappingURL=game.js.map
