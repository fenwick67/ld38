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
            } else {
                this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.startFullScreen(false);
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
						resolution: 2,
						multiTexture: true,
						parent: 'content'
				};

				var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, config));

				_this.fullscreenController = new _FullscreenController2.default(_this);

				_this.state.add('LoadingState', _LoadingState2.default, false);
				_this.state.add('PlayingState', _PlayingState2.default, false);

				_this.state.start('LoadingState');

				return _this;
		}

		return Game;
}(Phaser.Game);

window.game = new Game();

},{"controllers/FullscreenController":1,"controllers/LevelController":2,"states/LoadingState":5,"states/PlayingState":6}],4:[function(require,module,exports){
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
			game.load.image('paint_tiles', 'vendor/platformer_deluxe/Tiles/paint_tiles.png');

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

},{"objects/RainbowText":4,"states/PlayingState":6}],6:[function(require,module,exports){
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
			var map = window.map = this.game.add.tilemap('world');

			map.addTilesetImage('tiles', 'paint_tiles');

			// render each layer
			map.layers.forEach(function (l) {
				var layer = map.createLayer(l.name);
			});
		}
	}]);

	return PlayingState;
}(Phaser.State);

exports.default = PlayingState;

},{"objects/RainbowText":4}]},{},[3])
//# sourceMappingURL=game.js.map
