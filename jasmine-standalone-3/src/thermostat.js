'use strict';
function Thermostat() {
  this.temprature = 20;
  this.MINIMUM_TEMPRATOR = 10;
  this.powerSavingModeOn = true;
}

Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}

Thermostat.prototype.up = function(number) {
  this.temprature += number;
}

Thermostat.prototype.isMINIMUMTEMPRATOR = function() {
  return this.temprature === this.MINIMUM_TEMPRATOR;
}

Thermostat.prototype.down = function(number) {
  if(this.temprature - number < this.MINIMUM_TEMPRATOR) {
    throw('is too cold!!');
  }
  else {
  this.temprature -= number;
  }

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingModeOn === true;
}
}
