var hour = moment().hours();
var currentHour = moment().format('h:mm:ss a');
var currentDay =
  moment().format('dddd') + ' ' + moment().format('MMMM DD YYYY');
var hourSpan;

var userInput;
var eight = $('#eight');
var nine = $('#nine');
var ten = $('#ten');
var eleven = $('#eleven');
var twelve = $('#twelve');
var one = $('#one');
var two = $('#two');
var three = $('#three');
var four = $('#four');
var five = $('#five');
var six = $('#six');
var seven = $('#seven');

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
  + momentNow.format('dddd'));
  $('#currentDay').html(currentDay + " " + momentNow.format('hh:mm:ss A'));
}, 100);

//  // Button for clear tasks
//  $("#clearTasks").on("click", function() {
//     localStorage.clear();
//   })
