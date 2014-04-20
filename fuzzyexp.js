

var FuzzyExp = function(regex, options){
  this.regex                = regex;
  this.patternRaw           = regex.toString();
  this.pattern              = this.patternRaw.slice(1,this.patternRaw.length-1);
  this.pArray               = this.pattern.split("");
  this.fuzzies              = {};


  var genFuzzies = function(stringy){
    var fuzzyHolder,
        fuzzies       = [];

    for (var i = 0; i < stringy.pArray.length; i++){
      fuzzyHolder = stringy.pArray.slice(0,i) + ['.'] + stringy.pArray.slice(i,stringy.pArray.length);
      fuzzyHolder = fuzzyHolder.split("");
      fuzzies.push(fuzzyHolder);
    }
    debugger;
    return fuzzies;
  };

  var genStrings = function(arraything){

    for (i in arraything) {
      arraything[i] = arraything[i];
    }
  };


  this.fuzzies.arrays      = genFuzzies(this);
  this.fuzzies.strings     = genStrings(this.fuzzies.arrays);

/*
  this.splitters = {};
  this.splitters.parentheses      = ['(',')'];
  this.splitters.curlyBrackets    = ['{','}'];
  this.splitters.squareBrackets   = ['[',']'];
  this.splitters.forwardSlashes   = ['/'];
  this.splitters.backSlashes      = ['\\']; //does this work?
  this.splitters.or               = ['|'];
  this.splitters.not              = ['^'];
  this.splitters.dash             = ['-'];
*/


};

var jason = new FuzzyExp(/jason/, '');
debugger;