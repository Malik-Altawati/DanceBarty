// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this,top, left, timeBetweenSteps)
 
// };

// MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer


// MakeBlinkyDancer.prototype.step = function() {
//   MakeDancer.prototype.step.call(this)

//   this.$node.toggle();
// };
///////////////////////////


class MakeBlinkyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps){
  	super(top, left, timeBetweenSteps)

  }
  step(){
    super.step()
    this.$node.toggle();
  }

}
 
window.MakeBlinkyDancer = MakeBlinkyDancer
