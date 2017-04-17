(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _FullscreenController = require('objects/FullscreenController');

var _FullscreenController2 = _interopRequireDefault(_FullscreenController);

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

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 640, 480, Phaser.AUTO, 'content', null));

		_this.state.add('GameState', _GameState2.default, false);
		_this.state.start('GameState');

		_this.fullscreenController = new _FullscreenController2.default(_this);

		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"objects/FullscreenController":2,"states/GameState":4}],2:[function(require,module,exports){
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
            console.log(this);
            if (this.game.scale.isFullScreen) {
                this.game.scale.stopFullScreen();
            } else {
                this.game.scale.startFullScreen(false);
            }
        }
    }]);

    return FullscreenController;
}();

exports.default = FullscreenController;

},{}],3:[function(require,module,exports){
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

				var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" }));

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

},{}],4:[function(require,module,exports){
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

var _RainbowText = require("objects/RainbowText");

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

var GameState = function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
	}

	_createClass(GameState, [{
		key: "create",
		value: function create() {
			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			var text = new _RainbowText2.default(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
			text.anchor.set(0.5);
		}
	}]);

	return GameState;
}(Phaser.State);

exports.default = GameState;

},{"objects/RainbowText":3}]},{},[1])
//# sourceMappingURL=game.js.map
