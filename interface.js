$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temprature').text(thermostat.temprature);

  $('#temprature-up').on('click', function() {
    thermostat.up(1);
    $('#temprature').text(thermostat.temprature);
  })

  $('#temprature-down').click(function() {
    thermostat.down(1);
    $('#temprature').text(thermostat.temprature);
  })

})
