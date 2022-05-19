var currentDay = moment().format('dddd') + ", " + moment().format('ll');
    $("#currentDay").append(currentDay);

var dayStart = "9"; // use 12 time, must be AM
    var  formattedDayStart = moment(dayStart, "h").format('h:mm A');
    console.log(formattedDayStart);