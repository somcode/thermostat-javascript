$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemprature();

  $('#temprature-up').on('click', function() {
    thermostat.up(1);
    updateTemprature();
  })

  $('#temprature-down').click(function() {
    thermostat.down(1);
    updateTemprature();
  })

  $('#temprature-reset').click(function() {
    thermostat.resetTemprature();
    updateTemprature();
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemprature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemprature();
  })

  function updateTemprature() {
    $('#temprature').text(thermostat.temprature);
    if(thermostat.energyUsage() === 'low-usage') {
      $('#temprature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'medium-usage') {
      $('#temprature').css('color', 'black')
    } else {
      $('#temprature').css('color', 'red')
    }
  };

});
