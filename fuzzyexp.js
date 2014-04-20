

var FuzzyExp = function(regex, options){
  this.pattern        = new RegExp(regex);
  this.options        = options;
  
  var getAtoms = function(){
    var atoms1        = [];
    var patternString = this.pattern.toString();
    

  };

  var splitRegEx = function(stringy, splitter){
    var outStringArray = [];
    outStringArray.push(stringy.split(splitter));
    return outStringArray;
  };

  this.pattern.atoms = getAtoms();



  this.search = function(inString, minimumProb){
    var outStringArray = [];
  };


};

var jason = new FuzzyExp(/jason/);
debugger;