// var MakeDancer = function(top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.step();
//   this.setPosition(top, left);
// };
// MakeDancer.prototype.step = function() {
//   console.log(this)
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
// MakeDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

///////////////////////////

class MakeDancer {
  constructor (top, left, timeBetweenSteps) {
	  this.words = ["Amazing", "Fabulous", "cool"]
	  this.$node = $('<span class="dancer">'+"You are " + this.words[Math.floor(Math.random() * Math.floor(this.words.length))] + '</span>');
	  this.top = top;
	  this.left = left;
	  this.timeBetweenSteps = timeBetweenSteps;
	  this.step();
	  this.setPosition(top, left);
   
  }
  step () {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
   this.$node.css(styleSettings);
  }
};

