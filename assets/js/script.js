var hour = moment().hours();
var currentHour = moment().format('h:mm:ss a');
var todaysDate = moment().format('dddd') + " " + moment().format("MMMM DD YYYY");
var hourSpan;

var userInput;
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

var date = setInterval (function() {
 var currentTime = moment();
 $("#todaysDate").html(currentTime.format("MMMM DD YYYY") + " " + currentTime.format("dddd").substring(0,3).toUpperCase());
 //$("#todaysDate").html(currentHour + '' + currentTime.format('hh:mm:ss A'));
  }, 100);





//  // Button for clear tasks
//  $("#clearTasks").on("click", function() {
//     localStorage.clear();
//   }) 