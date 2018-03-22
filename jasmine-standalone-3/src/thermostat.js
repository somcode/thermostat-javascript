'use strict';
function Thermostat() {
  this.temprature = 20;
}

Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}

Thermostat.prototype.up = function() {
  this.temprature += 1;
}

Thermostat.prototype.down = function() {
  this.temprature -= 1;
}
