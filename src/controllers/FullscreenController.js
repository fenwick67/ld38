class FullscreenController{
  constructor(game){
    this.game = game;

    //add element
    this.el = document.createElement('span');
    this.el.classList.add("fullscreen-button");

    let text = document.createElement('span');
    text.textContent="Go Fullscreen";
    this.el.appendChild(text);

    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    svg.setAttribute("width", "30px");
    svg.setAttribute("height", "30px");
    svg.setAttribute('viewBox',"0 0 50 50")
    svg.setAttribute("version", "1.1");
    svg.innerHTML = `
    <polygon points="0 0 30 0 0 30 0 0" />
    <polygon points="50 50 20 50 50 20 50 50" />
    `;
    this.el.appendChild(svg);

    this.el.addEventListener('click',()=>this.gofull() );
    document.getElementById('content-after').appendChild(this.el);
  }


  gofull() {
    if (this.game.scale.isFullScreen){
        this.game.scale.stopFullScreen();
    }
    else{
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.startFullScreen(false);
    }
  }


}

export default FullscreenController;
