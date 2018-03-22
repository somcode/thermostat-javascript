'use strict';
function Thermostat() {
  this.temprature = 20;
}

Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}
