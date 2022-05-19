// elements on page
containerEl = document.querySelector(".container");


// display current day
var currentDay = moment().format('dddd') + ", " + moment().format('ll');
    $("#currentDay").append(currentDay);


