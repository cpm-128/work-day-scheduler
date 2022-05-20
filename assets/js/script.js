// elements on page
containerEl = document.querySelector(".container");
saveBtnEl = document.querySelector(".saveBtn");
// start of workday
var startHour = 9;
// duration of workday
var dayDuration = 8;

// display current day
var currentDay = moment().format('dddd') + ", " + moment().format('ll');
    $("#currentDay").append(currentDay);

// color code time blocks starting with 9 am
var auditTime = function() {

    // define the current hour in 24h-format, this aligns with #task-*
    var currentHour = moment().hour();
    console.log(">>> currentHour >>>", currentHour);

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
// ?? is this event needed?
$(".row").on("click" , "input" , function() {
    var text = $(this).text().trim();
    var textInput = $("input").val(text);
    $(this).replaceWith(textInput);
});

// save task with key and value
$(".saveBtn").on("click" , function () {
    var am9 = document.getElementById("task-9").value;
        localStorage.setItem("task9", am9);
    var am10 = document.getElementById("task-10").value;
        localStorage.setItem("task10", am10);
    var am11 = document.getElementById("task-11").value;
        localStorage.setItem("task11", am11);
    var pm12 = document.getElementById("task-12").value;
        localStorage.setItem("task12", pm12);
    var pm1 = document.getElementById("task-13").value;
        localStorage.setItem("task13", pm1);
    var pm2 = document.getElementById("task-14").value;
        localStorage.setItem('task14', pm2);
    var pm3 = document.getElementById("task-15").value;
        localStorage.setItem("task15", pm3);
    var pm4 = document.getElementById("task-16").value;
        localStorage.setItem('task16', pm4);
});


// // get saved tasks
// var getTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     // if empty, create new object to track all saved tasks
//     if (!tasks) {
//         tasks = {}
//     };

//     // print saved tasks on page
//     // loop over object properties
//     $.each(tasks, function(list, arr) {
//         var taskP = $("<p>").textContent(arr)
//         (".textarea").append(taskP);
//     });
// };
// getTasks();







// reset page at midnight

// refresh time audit every x interval of time