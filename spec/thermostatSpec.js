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

     it('throw an error if temrature is above 25 when PSM is on', function() {
        thermostat.switchPowerSavingModeOn();
       expect( function(){ thermostat.up(6) }).toThrow ('limit is 25 when PSM is on!!');
     });

     it('throw an error if temrature is above 32 when PSM is off', function() {
       thermostat.switchPowerSavingModeOff();
       expect( function(){ thermostat.up(13) }).toThrow ('limit is 32 when PSM is off!!');
     });
   });

   describe('when power saving mode is off', function() {
     it('has a maximum temprature of 32 degrees', function() {
       thermostat.switchPowerSavingModeOff();
       thermostat.up(12)
       expect(thermostat.getCurrentTemprature()).toEqual(32);
     });
   });

   it('can be reset to the default temprature', function() {
     thermostat.up(5);
     thermostat.resetTemprature();
     expect(thermostat.getCurrentTemprature()).toEqual(20);
   });


   describe('displaying usage levels', function() {
     describe('when the temprature is below 18 degrees', function() {
       it('it is considered low-usage', function() {
         thermostat.down(3);
         expect(thermostat.energyUsage()).toEqual('low-usage');
       });
     });

     describe('when the temprature is between 18 and 25 degrees', function() {
       it('it is considered medium-usage', function() {
         expect(thermostat.energyUsage()).toEqual('medium-usage');
       });
     });

     describe('when the temprature is anything else', function() {
       it('it is considered high-usage', function() {
         thermostat.switchPowerSavingModeOff();
         thermostat.up(10);
         expect(thermostat.energyUsage()).toEqual('high-usage');
       });
     });

   });
});
