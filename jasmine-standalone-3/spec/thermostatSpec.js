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
    thermostat.up(1);
    expect(thermostat.getCurrentTemprature()).toEqual(21);
  });

  it('decreases in temprature with down()', function() {
    thermostat.down(1);
    expect(thermostat.getCurrentTemprature()).toEqual(19);
  });

  it('has a minimum of 10 degree', function() {
    thermostat.down(10)
    expect(thermostat.getCurrentTemprature()).toEqual(10);
  });

  it('throw an error if temrature is below 10', function() {

    expect( function(){ thermostat.down(11) }).toThrow ('is too cold!!');
  });
});
