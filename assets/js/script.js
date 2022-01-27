var hour = moment().format('h:mm:ss a');
var todaysDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");


var eight = $("#eight");
var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");
var six = $("#six");
var seven = $("#seven");









 // Button for clear tasks
 $("#clearTasks").on("click", function() {
    localStorage.clear();
  }) 