!function e(t,o,n){function r(a,s){if(!o[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=o[a]={exports:{}};t[a][0].call(c.exports,function(e){var o=t[a][1][e];return r(o?o:e)},c,c.exports,e,t,o,n)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(t){var o=this;n(this,e),this.game=t,this.el=document.createElement("span"),this.el.classList.add("fullscreen-button");var r=document.createElement("span");r.textContent="Go Fullscreen",this.el.appendChild(r);var i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","30px"),i.setAttribute("height","30px"),i.setAttribute("viewBox","0 0 50 50"),i.setAttribute("version","1.1"),i.innerHTML='\n    <polygon points="0 0 30 0 0 30 0 0" />\n    <polygon points="50 50 20 50 50 20 50 50" />\n    ',this.el.appendChild(i),this.el.addEventListener("click",function(){return o.gofull()}),document.getElementById("content-after").appendChild(this.el)}return r(e,[{key:"gofull",value:function(){this.game.scale.isFullScreen?(this.game.scale.stopFullScreen(),this.game.canvas.classList.add("fullscreen")):(this.game.scale.fullScreenScaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.startFullScreen(!1),this.game.canvas.classList.remove("fullscreen"))}}]),e}();o["default"]=i},{}],2:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var r=function i(e){n(this,i),this.game=e};o["default"]=r},{}],3:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=e("states/LoadingState"),l=n(s),u=e("states/PlayingState"),c=n(u),p=e("states/WonState"),f=n(p),h=e("controllers/FullscreenController"),d=n(h),y=e("controllers/LevelController"),m=(n(y),function(e){function t(){r(this,t);var e={width:320,height:240,renderer:Phaser.AUTO,antialias:!1,resolution:4,multiTexture:!0,parent:"content"},o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.fullscreenController=new d["default"](o),o.state.add("LoadingState",l["default"],!1),o.state.add("PlayingState",c["default"],!1),o.state.add("WonState",f["default"],!1),o.state.start("LoadingState"),window.debug=!1,o}return a(t,e),t}(Phaser.Game));window.game=new m},{"controllers/FullscreenController":1,"controllers/LevelController":2,"states/LoadingState":15,"states/PlayingState":16,"states/WonState":17}],4:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function(e){function t(e,o){n(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o.x,o.y-32,"checkpoint",0));return i.active=!1,i.game=e,i.size=32,i.animations.add("spin",[0,1,2,3,4,3,2,1],10,!0),i.animations.play("spin"),i.animations.currentAnim.paused=!0,i.game.checkpoints||(i.game.checkpoints=[]),i.game.checkpoints.push(i),i.game.itemGroup?i.game.itemGroup.addChild(i):i.game.world.addChild(i),i}return i(t,e),a(t,[{key:"update",value:function(){if(game.lastCheckpoint!==this&&game.player&&Phaser.Point.distance(this,game.player)<32){var e=this;game.checkpoints.forEach(function(t){t!=e&&(t.active=!1,t.animations.currentAnim.paused=!0)}),game.lastCheckpoint=this,this.active=!0,this.animations.currentAnim.paused=!1,game.sound.play("checkpoint")}}}]),t}(Phaser.Sprite);o["default"]=s},{}],5:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var a=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.game=e,o.uniforms.invert={type:"1f",value:0},o.uniforms.pixelSize={type:"2f",value:{x:1,y:1}},o.uniforms.dimensions={type:"2f",value:{x:1e3,y:1e3}},o.uniforms.warp={type:"1f",value:0},o.uniforms.offset={type:"1f",value:0},o.fragmentSrc="\n\n          #define PI 3.14159\n          #define SQRT2 1.4142135623730951\n          precision mediump float;\n          varying vec2 vTextureCoord;\n          uniform vec2 dimensions;\n          uniform vec2 pixelSize;\n          uniform float offset;\n          uniform float warp;\n          uniform sampler2D uSampler;\n          void main(void){\n              // coords are 0..1.  Don't exceed that.\n              // zoom out the Y coords based on warp\n              float sc = warp*1./SQRT2;\n\n              vec2 zoomCoords = vec2(\n                 0.5+(vTextureCoord.x-0.5)*(1.0 - abs(sc)),\n                 0.5+(vTextureCoord.y-0.5)*(1.0 - abs(sc))\n               );\n              // now sample the middle up higher and outsides down lower\n              // TODO: determine the actual math for this\n\n              float moveUp = (0.9 -cos((vTextureCoord.x - 0.5) * PI/2.0 )) * warp ;\n              vec2 coord = zoomCoords + vec2(0.0,moveUp);\n              vec2 color =  coord ;\n              gl_FragColor = texture2D(uSampler, color);\n          }\n      ",o}return i(t,e),t}(Phaser.Filter);Object.defineProperty(a.prototype,"size",{get:function(){return this.uniforms.pixelSize.value},set:function(e){this.dirty=!0,this.uniforms.pixelSize.value=e}}),Object.defineProperty(a.prototype,"sizeX",{get:function(){return this.uniforms.pixelSize.value.x},set:function(e){this.dirty=!0,this.uniforms.pixelSize.value.x=e}}),Object.defineProperty(a.prototype,"sizeY",{get:function(){return this.uniforms.pixelSize.value.y},set:function(e){this.dirty=!0,this.uniforms.pixelSize.value.y=e}}),Object.defineProperty(a.prototype,"warp",{get:function(){return this.uniforms.warp.value},set:function(e){this.dirty=!0,this.uniforms.warp.value=e}}),Object.defineProperty(a.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(e){this.dirty=!0,this.uniforms.offset.value=e}}),o["default"]=a},{}],6:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/SpeechBox"),u=n(l),c=function(e){function t(e,o,n){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o,n));return a.fixedToCamera=!0,a.todoText.x=96,a.todoText.y=56,a.todoText.anchor.set(.5),a.cameraOffset.set(64,64),a}return a(t,e),s(t,[{key:"alert",value:function(e,t){var t=t;return"undefined"==typeof t&&(t=!0),this.showUntilButtonPress(e,t)}},{key:"alertSequence",value:function(e){function t(){n<e.length?o.alert(e[n++],!1).then(t):o.destroy()}var o=this;if("string"==typeof e)return this.alert(e);var n=0;t()}}]),t}(u["default"]);o["default"]=c,window.FixedSpeechBox=c},{"objects/SpeechBox":14}],7:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/FixedSpeechBox"),u=n(l),c=function(e){function t(e,o){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,0,0,o||"follower",0));return n.key=o||"follower",n.game=e,n.autoFollow=!0,n.item=null,n.shipPosition={x:100,y:200},n.animations.add("walk",[4,0,5,0],10,!0),n.animations.add("idle",[0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,0,0,3],10,!0),n.speed=150,n.jumpSpeed=200,n.mass=.01,n.size=18,n.bodyY=2,n.maxDistance=300,n.stopDistance=64,n.followOffset=32,e.physics.p2.enable(n),n.body.mass=n.mass,n.anchor.setTo(.5,.5),n.body.setCircle(n.size,0,0),n.body.offset.set(0,n.bodyY),n.body.fixedRotation=!0,n.cursors=n.game.input.keyboard.createCursorKeys(),n.body.setCollisionGroup(e.npcCollisionGroup),n.body.collides([e.worldCollisionGroup,e.physics.p2.boundsCollisionGroup]),n.animations.play("idle"),n}return a(t,e),s(t,[{key:"follow",value:function(e){this.target=e,e.followers=e.followers||[],e.followers.push(this),this.stopDistance+=this.followOffset*(e.followers.length-1),this.maxDistance+=this.followOffset*(e.followers.length-1)}},{key:"update",value:function(){if(this.item&&(this.item.x=this.x,this.item.y=this.y-16),!this.item&&this.autoFollow&&!this.target&&game.player&&Phaser.Point.distance(this.body,game.player)<32&&(this.follow(game.player),game.sound.play("hello"),this.sayOnFollow&&(new u["default"]).alertSequence(this.sayOnFollow)),this.target){var e=Phaser.Point.distance(this.target.position,this.body),t=Math.abs(this.target.x-this.body.x);if(e<this.stopDistance||t<this.stopDistance)this.body.velocity.x=.9*this.body.velocity.x;else{if(e>this.maxDistance)return this.body.x=this.target.x,void(this.body.y=this.target.y-3*this.target.size);this.target.x<this.position.x?(this.body.velocity.x=-1*this.speed,this.animations.play("walk")):this.body.velocity.x=this.speed}}else this.body.velocity.x=.9*this.body.velocity.x;this.body.velocity.x>.5*this.speed?(this.scale.x=1,this.animations.play("walk")):this.body.velocity.x<this.speed*-.5?(this.scale.x=-1,this.animations.play("walk")):this.animations.play("idle")}},{key:"spawnTo",value:function(e,t){this.body.x=e,this.body.y=t,this.body.velocity.x=0,this.body.velocity.y=0,this.game.followerGroup?(console.log("add to follower group"),this.game.followerGroup.addChild(this)):(console.log("no follower group"),this.game.world.addChild(this))}},{key:"giveItem",value:function(e){this.item=e;var t=game.player.followers.indexOf(this);t>-1?game.player.followers.splice(t,1):console.log("!!!!!"),game.ship.addItem(e),this.body.x=game.ship.x+32*game.ship.items.length,this.body.y=game.ship.y,this.body.velocity.x=0,this.body.velocity.y=0,this.target=null,game.ship.items.length>=game.ship.itemsNeeded?(new u["default"]).alert("Hey owl guy!\nYour ship is ready!"):(new u["default"]).alert("I'll take this "+e.tilemapData.type+"\nto the ship for you!")}}]),t}(Phaser.Sprite);o["default"]=c},{"objects/FixedSpeechBox":6}],8:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/PlayerSpeechBox"),u=n(l),c=function(e){function t(e,o){if(r(this,t),!o.type)throw console.error(o),new Error("you forgot a sprite name");var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o.x,o.y-48,o.type,0));return n.tilemapData=o,n.pickedUp=!1,n.game.itemGroup?n.game.itemGroup.addChild(n):n.game.world.addChild(n),n}return a(t,e),s(t,[{key:"update",value:function(){!this.pickedUp&&game.player&&Phaser.Point.distance(this,game.player)<32&&this.onPickup()}},{key:"onPickup",value:function(){if(this.tilemapData.type&&"jetpack"==this.tilemapData.type)return game.player.hasJetpack=!0,game.sound.play("pickup"),this.pickedUp=!0,this.destroy(),void(new u["default"]).alert("I can take this myself.\nNow I can finally fly \n on this planet!");if(game.player&&game.player.followers&&game.player.followers.length>0){this.pickedUp=!0,game.sound.play("pickup");var e=game.player.followers.pop();e.giveItem(this)}}}]),t}(Phaser.Sprite);o["default"]=c},{"objects/PlayerSpeechBox":10}],9:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){for(var t=p2.vec2.fromValues(0,1),o=!1,n=0;n<game.physics.p2.world.narrowphase.contactEquations.length;n++){var r=game.physics.p2.world.narrowphase.contactEquations[n];if(r.bodyA===e.body.data||r.bodyB===e.body.data){var i=p2.vec2.dot(r.normalA,t);r.bodyA===e.body.data&&(i*=-1),i>.5&&(o=!0)}}return o}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=function(e){function t(e,o,i){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,0,0,"character",0));return a.game=e,a.animations.add("walk",[2,3,4,5,6,7],10,!0),a.animations.add("dig",[8,9,10,8,15,16],10,!0),a.animations.add("idle",[0,0,0,11,0,0,0,11,0,12,0,11,0,0,0,11,0,0,0,11,13,13,13,11,0,0,0,11,14,14,14,11],5,!0),a.animations.add("jet",[17,18],10,!0),a.jetpackSound=e.sound.play("jetpack"),a.jetpackSound.pause(),a.inventory=[],a.touchingLastFrame=!0,a.speed=150,a.jumpSpeed=200,a.mass=.01,a.size=14,a.bodyY=-2,a.maxJetpackFuel=100,a.jetpackFuel=a.maxJetpackFuel,e.physics.p2.enable(a),a.body.mass=a.mass,a.anchor.setTo(.5,.5),a.body.setCircle(a.size,0,0),a.body.offset.set(0,a.bodyY),a.body.fixedRotation=!0,a.body.setCollisionGroup(e.playerCollisionGroup),a.body.collides([e.worldCollisionGroup,e.playerCollisionGroup,e.physics.p2.boundsCollisionGroup]),a.cursors=a.game.input.keyboard.createCursorKeys(),a}return i(t,e),s(t,[{key:"dig",value:function(){}},{key:"update",value:function(){var e=this.cursors,t=this,o=a(t),n=null;e.down.isDown?(n=0,t.animations.play("dig"),t.dig()):e.left.isDown?(t.scale.x=-1,n=-1*t.speed,t.animations.play("walk")):e.right.isDown?(t.scale.x=1,n=t.speed,t.animations.play("walk")):o&&(n=0,t.animations.play("idle")),e.up.isDown&&!t.jumpedLastFrame?o&&(t.body.velocity.y=-1*t.jumpSpeed,game.sound.play("jump"),t.jumpedLastFrame=!0):t.jumpedLastFrame=!1,!o&&e.up.isDown&&t.hasJetpack&&t.jetpackFuel>0?(t.jetpackFuel--,t.body.velocity.y=-1*t.jumpSpeed,t.animations.play("jet"),t.jetpackSound.isPlaying||t.jetpackSound.play()):o||this.touchingLastFrame||t.loadTexture("character",1),(t.jetpackFuel<=0||t.hasJetpack&&!t.cursors.up.isDown)&&t.jetpackSound&&t.jetpackSound.stop(),o&&(t.jetpackFuel=t.maxJetpackFuel),null!==n&&(t.body.velocity.x=.5*t.body.velocity.x+.5*n),game.world&&game.world.bounds&&this.y>game.world.bounds.y+game.world.bounds.height&&this.respawn(),this.touchingLastFrame=o}},{key:"spawnToCheckpoint",value:function(e){this.body.x=e.x+e.size/2,this.body.y=e.y,this.body.velocity.y=0,this.body.velocity.x=0}},{key:"spawnTo",value:function(e,t){this.body.x=e,this.body.y=t,this.body.velocity.x=0,this.body.velocity.y=0,this.game.playerGroup?(console.log("add to player group"),this.game.playerGroup.addChild(this)):(console.log("no player group"),this.game.world.addChild(this))}},{key:"respawn",value:function(){var e=game.lastCheckpoint||{x:0,y:0};this.spawnTo(e.x,e.y)}},{key:"remove",value:function(){this.game.world.remove(this)}}]),t}(Phaser.Sprite);o["default"]=l},{}],10:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=e("objects/FixedSpeechBox"),l=n(s),u=function(e){function t(e,o,n,a){r(this,t);for(var s=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o,n,a)),a={},l=s.todoText.style,u=Object.keys(l),c=0;c<u.length;c++)a[u[c]]=l[u[c]];return a.fill="#aaaa00",s.todoText.setStyle(a),s}return a(t,e),t}(l["default"]);o["default"]=u},{"objects/FixedSpeechBox":6}],11:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function(e){function t(e,o,i,a){n(this,t);var s=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o,i,a,{font:"1em Arial",fill:"#ffffff",align:"center"}));return s._speed=125,s._colorIndex=0,s._colors=["#ee4035","#f37736","#fdf498","#7bc043","#0392cf"],s.startTimer(),s.game.stage.addChild(s),s}return i(t,e),a(t,[{key:"startTimer",value:function(){}},{key:"colorize",value:function(){for(var e=0;e<this.text.length;e++)this._colorIndex===this._colors.length&&(this._colorIndex=0),this.addColor(this._colors[this._colorIndex],e),this._colorIndex++}}]),t}(Phaser.Text);o["default"]=s},{}],12:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/PlayerSpeechBox"),u=n(l),c=function(e){function t(e,o,n){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o,n,null,0));return a.itemsNeeded=6,a.items=[],e.world.addChild(a),a}return a(t,e),s(t,[{key:"addItem",value:function(e){this.items.push(e)}},{key:"update",value:function(){this.items.length>=this.itemsNeeded&&Phaser.Point.distance(this,game.player)<32&&(new u["default"]).alert("Goodbye my mole-looking friends!\nOff to more adventures!").then(function(){game.state.start("WonState"),console.log("win")})}}]),t}(Phaser.Sprite);o["default"]=c},{"objects/PlayerSpeechBox":10}],13:[function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function(e){function t(e,o){n(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o,null));return i.game=e,i.tileSprite=new Phaser.TileSprite(i.game,0,0,640,480,"bg"),i.tileSprite.fixedToCamera=!0,i.addChild(i.tileSprite),i}return i(t,e),a(t,[{key:"update",value:function(){this.tileSprite.anchor.setTo(game.camera.x/2560%.5,game.camera.y/6400%.5)}}]),t}(Phaser.Group);o["default"]=s},{}],14:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/RainbowText"),u=n(l),c=function(e){function t(e,o,n){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,game,game.world,null));a.str=n||"",a.x=e,a.y=o;var s="ABCDEFGHIJKLMNOPQRSTUVQXYZ";return a.retroFont=new Phaser.RetroFont(game,"smallfont",8,8,s,8),a.box=new Phaser.Sprite(game,0,0,"textbox"),a.addChild(a.box),a.textTexture=new Phaser.Image(game,0,0),a.textTexture.anchor.set(.5,1),a.addChild(a.textTexture),a.todoText=new u["default"](a.game,0,0,a.str),a.addChild(a.todoText),a.updateText(a.str),a}return a(t,e),s(t,[{key:"updateText",value:function(e){this.str=e,this.retroFont.text=e,this.todoText.text=e,this.retroFont.renderXY(this.textTexture)}},{key:"show",value:function(e){"string"==typeof e&&this.updateText(e),game.world.addChild(this),game.sound.play("speech")}},{key:"showUntilButtonPress",value:function(e,t){this.show(e);var o=this;game.paused=!0,game.sound.mute=!1;var n=new Promise(function(e,n){window.addEventListener("keydown",function(n){"Enter"==n.key&&(window.removeEventListener("keydown",this),game.paused=!1,setTimeout(e,0),t&&o.destroy())})});return n}},{key:"hide",value:function(){game.world.remove(this)}}]),t}(Phaser.Group);o["default"]=c},{"objects/RainbowText":11}],15:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/RainbowText"),u=n(l),c=e("states/PlayingState"),p=(n(c),function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"preload",value:function(){game.load.tilemap("world","maps/world.json",null,Phaser.Tilemap.TILED_JSON),game.load.image("paint_tiles","img/paint_tiles-sheet.png"),game.load.image("huge_tiles","img/huge_tiles.png");var e={x:this.game.world.centerX,y:this.game.world.centerY};this.text=new u["default"](this.game,e.x,e.y,"- phaser -\nwith a sprinkle of\nES6 dust!"),this.text.anchor.set(.5),["jetpack","battery","booster","steeringwheel","bg","textbox","smallfont"].forEach(function(e){game.load.image(e,"img/"+e+".png")}),["die","dig","hello","jump","pickup","speech","checkpoint","music-1","jetpack"].forEach(function(e){game.load.audio(e,"sounds/"+e+".wav")}),game.load.spritesheet("character","img/character-sheet.png",64,64),game.load.spritesheet("follower","img/follower.png",64,64),game.load.spritesheet("checkpoint","img/checkpoint.png",32,32),console.log("loading"),game.load.onLoadComplete.add(this.loadComplete,this),game.load.onFileComplete.add(this.fileComplete,this)}},{key:"loadComplete",value:function(){this.text.text="Loaded.\nPress ENTER to start",this.enter=game.input.keyboard.addKey(Phaser.Keyboard.ENTER),window.debug&&this.whenDone()}},{key:"fileComplete",value:function(e){this.text.text=Math.round(e)+"% loaded"}},{key:"update",value:function(){this.enter&&this.enter.isDown&&this.whenDone()}},{key:"whenDone",value:function(){this.text.destroy(),game.state.start("PlayingState")}}]),t}(Phaser.State));o["default"]=p},{"objects/RainbowText":11,"states/PlayingState":16}],16:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/RainbowText"),u=(n(l),e("objects/Player")),c=n(u),p=e("objects/CurvyShader"),f=n(p),h=e("objects/Follower"),d=n(h),y=e("objects/Checkpoint"),m=n(y),b=e("objects/Item"),g=n(b),w=e("objects/Sky"),v=n(w),_=e("objects/SpeechBox"),j=(n(_),e("objects/FixedSpeechBox")),x=(n(j),e("objects/PlayerSpeechBox")),O=n(x),P=e("objects/Ship"),k=n(P),S=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"create",value:function(){function e(e){e.setCollisionGroup(game.worldCollisionGroup),e.collides([game.playerCollisionGroup,game.npcCollisionGroup,game.worldCollisionGroup])}({x:this.game.world.centerX,y:this.game.world.centerY});this.game.stage.backgroundColor="#000000";var t=this;this.sky=new v["default"](this.game,this.game.stage),game.world.addChild(this.sky);var o=this.map=window.map=this.game.add.tilemap("world");o.addTilesetImage("tiles","paint_tiles"),o.addTilesetImage("huge_tiles","huge_tiles"),game.physics.startSystem(Phaser.Physics.P2JS),this.game.physics.p2.defaultCollisionGroup=this.game.physics.p2.collisionGroups[0],this.physicsLayer=null,o.layers.forEach(function(e){var n=o.createLayer(e.name);"physical"==e.name?(t.physicsLayer=n,n.debug=!1,
n.resizeWorld(),game.itemGroup=game.add.group(),game.followerGroup=game.add.group(),game.playerGroup=game.add.group()):"hazards"==e.name&&(t.hazardLayer=n)}),this.warpFilter=new f["default"](game),this.warpFilter.sizeX=10,this.warpFilter.sizeY=10,this.warpFilter.warp=0,this.world.filters=[this.warpFilter],game.worldCollisionGroup=game.physics.p2.createCollisionGroup(),game.playerCollisionGroup=game.physics.p2.createCollisionGroup(),game.npcCollisionGroup=game.physics.p2.createCollisionGroup(),o.setCollisionByExclusion([],!0,"physical",!0),this.layermain_tiles=game.physics.p2.convertTilemap(o,this.physicsLayer),this.layerhazard_tiles=game.physics.p2.convertTilemap(o,this.hazardLayer),this.layerobjects_tiles=game.physics.p2.convertCollisionObjects(o,"collisions"),o.objects.checkpoints.forEach(function(e){new m["default"](game,e)}),o.objects.items.forEach(function(e){new g["default"](game,e)}),o.objects.followers.forEach(function(e){var t=new d["default"](game,0,0);t.spawnTo(e.x,e.y),e.properties.sayOnFollow&&(t.sayOnFollow=e.properties.sayOnFollow.split("\n\n"))}),this.layerobjects_tiles.forEach(e),this.layermain_tiles.forEach(e),this.layerhazard_tiles.forEach(e),this.player=new c["default"](this.game,0,0),game.player=this.player,game.camera.follow(this.player),game.camera.deadzone=new Phaser.Rectangle(140,80,20,40),game.physics.p2.gravity.y=800;var n=!1;o.objects.entities.forEach(function(e){"spawn"==e.type&&(t.player.spawnTo(e.x,e.y),n=!0)}),n||(console.warn("spawn point not deinfes"),t.player.spawnTo(0,0));(new O["default"]).alertSequence(["Where am I?","Did my ship crash?","Oh no! Pieces are\n strewn about everywhere!","And to top it all off,\nThis gravity is so high!","I can't fly, and the\nparts are too heavy to carry!"]);window.debug||(game.music=game.add.audio("music-1"),game.music.loopFull()),this.ship=game.ship=new k["default"](game,176,208)}},{key:"update",value:function(){this.warpFilter.warp=Math.max(Math.min(game.camera.y/game.camera.bounds.height,.5),.2)}}]),t}(Phaser.State);o["default"]=S},{"objects/Checkpoint":4,"objects/CurvyShader":5,"objects/FixedSpeechBox":6,"objects/Follower":7,"objects/Item":8,"objects/Player":9,"objects/PlayerSpeechBox":10,"objects/RainbowText":11,"objects/Ship":12,"objects/Sky":13,"objects/SpeechBox":14}],17:[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=e("objects/FixedSpeechBox"),u=n(l),c=e("objects/Sky"),p=(n(c),function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"create",value:function(){var e=({x:this.game.world.centerX,y:this.game.world.centerY},"And with that, our hero\nflew off into the sunset\n\nCredits:\nEverything: Fenwick67\n".split("\n\n")),t=new u["default"];t.alertSequence(e)}}]),t}(Phaser.State));o["default"]=p},{"objects/FixedSpeechBox":6,"objects/Sky":13}]},{},[3]);