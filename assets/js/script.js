// elements on page
containerEl = document.querySelector(".container");

// display current day
var currentDay = moment().format('dddd') + ", " + moment().format('ll');
    $("#currentDay").append(currentDay);

// color code time blocks starting with 9 am
var auditTime = function() {

    // define the current hour in 24h-format, this aligns with #task-*
    var currentHour = moment().hour();
    console.log(">>> currentHour >>>", currentHour);

    // start of workday
    var startHour = 9;

    // duration of workday
    var dayDuration = 8;

    // if the currentHour = task-, add .present
    // dayDuration+1 to look perform the last hour
    for (var i = startHour; i < dayDuration+startHour ; i++) {
        // find the area to look at
        var taskArea = $("#task-"+i);

        // if currentHour is greater, it's late
        // notice jQuery selector with a the variable
            if(currentHour > i) {
                $(taskArea).addClass("past");
            } else if (currentHour === i) {
                $(taskArea).addClass("present");
            } else {
                $(taskArea).addClass("future");
            }
    }
};
auditTime();

// event listener that .textarea was clicked and turn that into a text area
// jquery event listen will listen to all instances, not just the first
$(".textarea").on("click" , "p" , function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);
        textInput.trigger("focus");
});
// having a p element is screwing up the formatting, dk why
// this text area also looks terrible

// save task
$(".saveBtn").on("click" , function() {
    console.log("SAVE BTN CLICKED");
})