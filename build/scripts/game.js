!function e(t,n,r){function o(i,s){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return o(n?n:e)},u,u.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){var n=this;r(this,e),this.game=t,this.el=document.createElement("span"),this.el.classList.add("fullscreen-button");var o=document.createElement("span");o.textContent="Go Fullscreen",this.el.appendChild(o);var a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width","30px"),a.setAttribute("height","30px"),a.setAttribute("viewBox","0 0 50 50"),a.setAttribute("version","1.1"),a.innerHTML='\n    <polygon points="0 0 30 0 0 30 0 0" />\n    <polygon points="50 50 20 50 50 20 50 50" />\n    ',this.el.appendChild(a),this.el.addEventListener("click",function(){return n.gofull()}),document.getElementById("content-after").appendChild(this.el)}return o(e,[{key:"gofull",value:function(){this.game.scale.isFullScreen?this.game.scale.stopFullScreen():(this.game.scale.fullScreenScaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.startFullScreen(!1))}}]),e}();n["default"]=a},{}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function a(e){r(this,a),this.game=e};n["default"]=o},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){for(var t=p2.vec2.fromValues(0,1),n=!1,r=0;r<game.physics.p2.world.narrowphase.contactEquations.length;r++){var o=game.physics.p2.world.narrowphase.contactEquations[r];if(o.bodyA===e.body.data||o.bodyB===e.body.data){var a=p2.vec2.dot(o.normalA,t);o.bodyA===e.body.data&&(a*=-1),a>.5&&(n=!0)}}return n}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(e,n,a){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,0,0,"paint_tiles",0));return i.game=e,i.speed=200,i.jumpSpeed=200,i.mass=1,i.size=32,e.physics.p2.enable(i),i.body.mass=i.mass,e.physics.p2.enable(i),i.anchor.setTo(.5,.5),i.body.setCircle(i.size,0,0),i.body.fixedRotation=!0,i.cursors=i.game.input.keyboard.createCursorKeys(),i}return a(t,e),s(t,[{key:"update",value:function(){var e=this.cursors,t=this,n=i(t),r=null;e.left.isDown?(t.scale.x=-1,r=-1*t.speed):e.right.isDown?(t.scale.x=1,r=t.speed):n&&(r=0),e.up.isDown&&n&&(t.body.velocity.y=-1*t.jumpSpeed),null!==r&&(t.body.velocity.x=.5*t.body.velocity.x+.5*r)}},{key:"spawnTo",value:function(e,t){this.body.x=e,this.body.y=t,this.game.playerGroup?(console.log("add to player group"),this.game.playerGroup.addChild(this)):(console.log("no player group"),this.game.world.addChild(this))}},{key:"remove",value:function(){this.game.world.remove(this)}}]),t}(Phaser.Sprite);n["default"]=l},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=e("states/LoadingState"),l=r(s),c=e("states/PlayingState"),u=r(c),f=e("controllers/FullscreenController"),p=r(f),h=e("controllers/LevelController"),y=(r(h),function(e){function t(){o(this,t);var e={width:320,height:240,renderer:Phaser.AUTO,antialias:!1,resolution:2,multiTexture:!0,parent:"content"},n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.fullscreenController=new p["default"](n),n.state.add("LoadingState",l["default"],!1),n.state.add("PlayingState",u["default"],!1),n.state.start("LoadingState"),n}return i(t,e),t}(Phaser.Game));window.game=new y},{"controllers/FullscreenController":1,"controllers/LevelController":2,"states/LoadingState":6,"states/PlayingState":7}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(e,n,a,i){r(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,a,i,{font:"2em Arial",fill:"#ff0044",align:"center"}));return s._speed=125,s._colorIndex=0,s._colors=["#ee4035","#f37736","#fdf498","#7bc043","#0392cf"],s.colorize(),s.startTimer(),s.game.stage.addChild(s),s}return a(t,e),i(t,[{key:"startTimer",value:function(){this.game.time.events.loop(this._speed,this.colorize,this).timer.start()}},{key:"colorize",value:function(){for(var e=0;e<this.text.length;e++)this._colorIndex===this._colors.length&&(this._colorIndex=0),this.addColor(this._colors[this._colorIndex],e),this._colorIndex++}}]),t}(Phaser.Text);n["default"]=s},{}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("objects/RainbowText"),c=r(l),u=e("states/PlayingState"),f=(r(u),function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"preload",value:function(){game.load.tilemap("world","maps/world.json",null,Phaser.Tilemap.TILED_JSON),game.load.image("paint_tiles","vendor/platformer_deluxe/Tiles/paint_tiles.png"),console.log("loading"),game.load.onLoadComplete.add(this.loadComplete,this),game.load.onFileComplete.add(this.fileComplete,this);var e={x:this.game.world.centerX,y:this.game.world.centerY};this.text=new c["default"](this.game,e.x,e.y,"- phaser -\nwith a sprinkle of\nES6 dust!"),this.text.anchor.set(.5)}},{key:"loadComplete",value:function(){this.text.text="Loaded.\nPress ENTER to start",this.enter=game.input.keyboard.addKey(Phaser.Keyboard.ENTER)}},{key:"fileComplete",value:function(e){this.text.text=Math.round(e)+"% loaded"}},{key:"update",value:function(){this.enter&&this.enter.isDown&&this.whenDone()}},{key:"whenDone",value:function(){this.text.destroy(),game.state.start("PlayingState")}}]),t}(Phaser.State));n["default"]=f},{"objects/RainbowText":5,"states/PlayingState":7}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("objects/RainbowText"),c=(r(l),e("controllers/Player")),u=r(c),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"create",value:function(){({x:this.game.world.centerX,y:this.game.world.centerY});this.game.stage.backgroundColor="#787878";var e=this,t=this.map=window.map=this.game.add.tilemap("world");t.addTilesetImage("tiles","paint_tiles"),game.physics.startSystem(Phaser.Physics.P2JS),game.physics.p2.gravity.y=1400,this.physicsLayer=null,t.layers.forEach(function(n){var r=t.createLayer(n.name);"physical"==n.name&&(e.physicsLayer=r,r.debug=!1,r.resizeWorld(),game.playerGroup=game.add.group())}),t.setCollisionByExclusion([],!0,"physical",!0),this.layermain_tiles=game.physics.p2.convertTilemap(t,this.physicsLayer),this.layerobjects_tiles=game.physics.p2.convertCollisionObjects(t,"collisions"),this.player=new u["default"](this.game,0,0),game.camera.follow(this.player,Phaser.Camera.FOLLOW_PLATFORMER),game.physics.p2.gravity.y=300;var n=this.game.physics.p2.createMaterial("worldMaterial");this.layerobjects_tiles.forEach(function(e){e.setMaterial(n)}),this.layermain_tiles.forEach(function(e){e.setMaterial(n)});var r=this.game.physics.p2.createMaterial("spriteMaterial",this.player.body);this.game.physics.p2.setWorldMaterial(n,!0,!0,!0,!0);this.game.physics.p2.createContactMaterial(r,n,{friction:1e7});this.player.spawnTo(40,40)}},{key:"update",value:function(){}}]),t}(Phaser.State);n["default"]=f},{"controllers/Player":3,"objects/RainbowText":5}]},{},[4]);