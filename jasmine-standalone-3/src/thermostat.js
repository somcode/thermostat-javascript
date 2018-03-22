'use strict';
function Thermostat() {
  this.temprature = 20;
  this.MINIMUM_TEMPRATOR = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}

Thermostat.prototype.up = function(number) {
  if(this.temprature + number > this.MAX_LIMIT_PSM_ON && this.powerSavingMode === true) {
    throw('limit is 25 when PSM is on!!');
  }
  else if(this.temprature + number > this.MAX_LIMIT_PSM_OFF && this.powerSavingMode === false) {
    throw('limit is 32 when PSM is off!!')
  }
  else
  {
    this.temprature += number;
  }
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
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
