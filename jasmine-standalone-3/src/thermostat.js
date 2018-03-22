'use strict';
function Thermostat() {
  this.temprature = 20;
  this.minimum = 10;
}

Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}

Thermostat.prototype.up = function(number) {
  this.temprature += number;
}

Thermostat.prototype.down = function(number) {
  if(this.temprature - number < this.minimum) {
    throw('is too cold!!');
  }
  else {
  this.temprature -= number;
  }
}
