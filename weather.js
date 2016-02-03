$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = data.currently.summary +  ". The current temperature is " + data.currently.temperature + " degrees." ;

    // I was not certain the below method was the best way to add the various intervals or if there was a simpler way.  The Javascript coding proved a little tougher to navigate than html but I suspect it will become more natural with additional repititions.

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

$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup0 = data.minutely.summary ;

    // End of your code

    $('.weather-report0').html(markup0);
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

$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup00 = data.daily.data[0].summary + " High of " + data.daily.data[0].temperatureMax + " degrees and low of " + data.daily.data[0].temperatureMin + " degrees." ;

    // End of your code

    $('.weather-report00').html(markup00);
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

$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup1 = data.daily.data[1].summary + " The high will be " + data.daily.data[1].temperatureMax + " degrees and the low will be " + data.daily.data[1].temperatureMin + " degrees.  Winds of up to " + data.daily.data[1].windSpeed + " mph gusts and visibility of up to " + data.daily.data[1].visibility + " mi. " ;

    // End of your code

    $('.weather-report1').html(markup1);
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

$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup2 = data.daily.data[2].summary + " The high will be " + data.daily.data[2].temperatureMax + " degrees and the low will be " + data.daily.data[2].temperatureMin + " degrees.  Winds of up to " + data.daily.data[2].windSpeed + " mph gusts and visibility of up to " + data.daily.data[2].visibility + " mi. " ;

    // End of your code

    $('.weather-report2').html(markup2);
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

$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup3 = data.daily.data[3].summary + " The high will be " + data.daily.data[3].temperatureMax + " degrees and the low will be " + data.daily.data[3].temperatureMin + " degrees.  Winds of up to " + data.daily.data[3].windSpeed + " mph gusts and visibility of up to " + data.daily.data[3].visibility + " mi. " ;

    // End of your code

    $('.weather-report3').html(markup3);
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
