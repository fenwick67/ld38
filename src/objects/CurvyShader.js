class CurvyShader extends Phaser.Filter{
  constructor(game){
      super(game);

      this.game = game;
      this.uniforms.invert = { type: '1f', value: 0 };
      this.uniforms.pixelSize = { type: '2f', value: { x: 1.0, y: 1.0 } };
      this.uniforms.dimensions = { type: '2f', value: { x: 1000.0, y: 1000.0 } };

      this.uniforms.warp = { type: '1f', value: 0 };
      this.uniforms.offset = { type: '1f', value: 0 };

      this.fragmentSrc = `

          #define PI 3.14159
          #define SQRT2 1.4142135623730951
          precision mediump float;
          varying vec2 vTextureCoord;
          uniform vec2 dimensions;
          uniform vec2 pixelSize;
          uniform float offset;
          uniform float warp;
          uniform sampler2D uSampler;
          void main(void){
              // coords are 0..1.  Don't exceed that.
              // zoom out the Y coords based on warp
              float sc = warp*1./SQRT2;

              vec2 zoomCoords = vec2(
                 0.5+(vTextureCoord.x-0.5)*(1.0 - abs(sc)),
                 0.5+(vTextureCoord.y-0.5)*(1.0 - abs(sc))
               );
              // now sample the middle up higher and outsides down lower
              // TODO: determine the actual math for this

              float moveUp = (0.9 -cos((vTextureCoord.x - 0.5) * PI/2.0 )) * warp ;
              vec2 coord = zoomCoords + vec2(0.0,moveUp);
              vec2 color =  coord ;
              gl_FragColor = texture2D(uSampler, color);
          }
      `;

  }

}

/**
* An object with visible x and y properties that are used to define the size of the filter effect per pixel.
*
* @property size
* @type Phaser.Point
*/
Object.defineProperty(CurvyShader.prototype, 'size', {
    get: function() {

        return this.uniforms.pixelSize.value;

    },

    set: function(value) {

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
    get: function() {
        return this.uniforms.pixelSize.value.x;
    },

    set: function(value) {
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
    get: function() {
        return this.uniforms.pixelSize.value.y;
    },
    set: function(value) {
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
    get: function() {
        return this.uniforms.warp.value;
    },
    set: function(value) {
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
    get: function() {
        return this.uniforms.offset.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.offset.value = value;
    }
});





export default CurvyShader;
