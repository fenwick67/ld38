// same as FixedSpeechBox BUT it has a brown color
import FixedSpeechBox from 'objects/FixedSpeechBox';

class PlayerSpeechBox extends FixedSpeechBox{

  constructor(a,r,g,s){
    super(a,r,g,s);

    var s = {};
    var currStyle = this.todoText.style
    var k = Object.keys(currStyle);
    for (var i = 0; i < k.length; i ++){
      s[k[i]] = currStyle[k[i]];
    }
    s.fill = '#aaaa00';

    this.todoText.setStyle(s);
  }

}

export default PlayerSpeechBox;
