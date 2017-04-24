import SpeechBox from 'objects/SpeechBox';

class FixedSpeechBox extends SpeechBox{
  constructor(a,b,c,d,e,f,g){
    super(a,b,c,d,e,f,g);
    this.fixedToCamera = true;
    this.cameraOffset.set(64,64)
  }

  alert (str,hideAfter){
    var hideAfter = hideAfter;
    if (typeof hideAfter == 'undefined'){
      hideAfter = true;
    }
    return this.showUntilButtonPress(str,hideAfter)
  }

  alertSequence(strs){
    var self = this;

    if (typeof strs == 'string'){return this.alert(strs)}

    // http://stackoverflow.com/questions/29880715/how-to-synchronize-a-sequence-of-promises

    var index = 0;
    function next() {
      if (index < strs.length) {
        self.alert(strs[index++],false).then(next);
      }else{//end
        self.destroy();
      }
    }
    next();

  }

}


export default FixedSpeechBox;
window.FixedSpeechBox = FixedSpeechBox;
