'use strict';
function Thermostat() {
  this.DEFAULT_TEMPRATURE = 20;
  this.temprature = this.DEFAULT_TEMPRATURE;
  this.MINIMUM_TEMPRATOR = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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

Thermostat.prototype.isMinimumTemprature = function() {
  return this.temprature === this.MINIMUM_TEMPRATOR;
}

Thermostat.prototype.isMaximumTemprature = function() {
  if(this.powerSavingMode = true) {
    return this.temprature === this.MAX_LIMIT_PSM_ON;
  }
  else {
    return this.temprature === this.MAX_LIMIT_PSM_OFF;
  }
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

Thermostat.prototype.resetTemprature = function() {
  this.temprature = this.DEFAULT_TEMPRATURE;
}

Thermostat.prototype.energyUsage = function() {
  if(this.temprature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage'
  }
  else if(this.temprature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temprature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage'
  }
  else {
    return 'high-usage'
  }
}
