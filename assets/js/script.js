// elements on page
containerEl = document.querySelector(".container");
saveBtnEl = document.querySelector(".saveBtn");
formControlEl = document.querySelector(".form-control");
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
            if(currentHour-8 > i) {
                $(taskArea).addClass("past");
            } else if (currentHour-8 === i) {
                $(taskArea).addClass("present");
            } else {
                $(taskArea).addClass("future");
            }
    }
};
auditTime();

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


// get saved tasks
var getTasks = function() {
    var savedAm9 = localStorage.getItem("task9");
        document.getElementById("task-9").value = savedAm9;
    var savedAm10 = localStorage.getItem("task10");
        document.getElementById("task-10").value = savedAm10;
    var savedAm11 = localStorage.getItem("task11");
        document.getElementById("task-11").value = savedAm11;
    var savedPm12 = localStorage.getItem("task12");
        document.getElementById("task-12").value = savedPm12;
    var savedPm1 = localStorage.getItem("task13");
        document.getElementById("task-13").value = savedPm1;
    var savedPm2 = localStorage.getItem("task14");
        document.getElementById("task-14").value = savedPm2;
    var savedPm3 = localStorage.getItem("task15");
        document.getElementById("task-15").value = savedPm3;
    var savedPm4 = localStorage.getItem("task16");
        document.getElementById("task-16").value = savedPm4;
};
getTasks();

// FUTURE FUNCTIONS
// reset page at midnight

// refresh time audit every x interval of time