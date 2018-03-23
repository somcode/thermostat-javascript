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
    $('#temprature').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

});
