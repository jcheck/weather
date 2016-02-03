$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = data.currently.summary + " with " + data.currently.icon + " skies. The current temperature is " + data.currently.temperature + " degrees with visibility up to " + data.currently.visibility + " mi " ;

    var markup = data.daily.data[0].summary + " The high will be " + data.daily.data[0].temperatureMax + " degrees and the low will be " + data.daily.data[0].temperatureMin + " degrees.  Winds of up to " + data.daily.data[0].windSpeed + " mph gusts and visibility of up to " + data.daily.data[0].visibility + " mi " ;

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
