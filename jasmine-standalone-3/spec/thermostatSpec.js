'use strict';
describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemprature()).toEqual(20);
  });

  it('increases in temprature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemprature()).toEqual(21);
  });

  it('decreases in temprature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemprature()).toEqual(19);
  });
});
