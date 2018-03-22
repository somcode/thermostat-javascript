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

  it('has power saving mode on by default', function() {
     expect(thermostat.isPowerSavingModeOn()).toBe(true);
   });

   it('can switch PSM off', function() {
     thermostat.switchPowerSavingModeOff();
     expect(thermostat.isPowerSavingModeOn()).toBe(false);
   });

   it('can switch PSM back on', function() {
     thermostat.switchPowerSavingModeOff();
     expect(thermostat.isPowerSavingModeOn()).toBe(false);
     thermostat.switchPowerSavingModeOn();
     expect(thermostat.isPowerSavingModeOn()).toBe(true);
   });

   describe('when power saving mode is on', function() {
     it('has a maximum temprature of 25 degrees', function() {
       thermostat.up(5);
       expect(thermostat.getCurrentTemprature()).toEqual(25);
     });

     it('throw an error if temrature is above 25', function() {
        thermostat.switchPowerSavingModeOn();
       expect( function(){ thermostat.up(6) }).toThrow ('limit is 25 when PSM is on!!');
     });

     it('throw an error if temrature is above 32', function() {
       thermostat.switchPowerSavingModeOff();
       expect( function(){ thermostat.up(13) }).toThrow ('limit is 32 when PSM is off!!');
     });
   });
});
