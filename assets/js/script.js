// start of global variables
var hour = moment().hours();
var currentHour = moment().format('h:mm:ss a');
var currentDay =
  moment().format('dddd') + ' ' + moment().format('MMMM DD YYYY');
var hourSpan;
var userInput = '';

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




// time slot function to save tasks to localStorage
function timeSlots() {
  var slotEight = JSON.parse(localStorage.getItem('08:00 AM'));
  eight.val(slotEight);

  var slotNine = JSON.parse(localStorage.getItem('09:00 AM'));
  nine.val(slotNine);

  var slotTen = JSON.parse(localStorage.getItem('10:00 AM'));
  ten.val(slotTen);

  var slotEleven = JSON.parse(localStorage.getItem('11:00 AM'));
  eleven.val(slotEleven);

  var slotTwelve = JSON.parse(localStorage.getItem('12:00 PM'));
  twelve.val(slotTwelve);

  var slotOne = JSON.parse(localStorage.getItem('01:00 PM')); 
  one.val(slotOne);

  var slotTwo = JSON.parse(localStorage.getItem('02:00 PM'));
  two.val(slotTwo);

  var slotThree = JSON.parse(localStorage.getItem('03:00 PM'));
  three.val(slotThree);

  var slotFour = JSON.parse(localStorage.getItem('04:00 PM'));
  four.val(slotFour);

  var slotFive = JSON.parse(localStorage.getItem('05:00 PM'));
  five.val(slotFive);

  var slotSix = JSON.parse(localStorage.getItem('06:00 PM'));
  six.val(slotSix);

  var slotSeven = JSON.parse(localStorage.getItem('07:00 PM'));
  seven.val(slotSeven);

  console.log('currentHour' + hour + userInput);
}

// moment time and date
  var interval = setInterval(function () {
    var momentNow = moment();
    $('#currentDay').html(
      momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd')
    );
    $('#currentDay').html(currentDay + ' ' + momentNow.format('hh:mm:ss A'));
  }, 100);




function timeCheck() {
  $('.form-control').each(function() {
     var time = parseInt($(this).attr('slots'));
     if (hour > time) {
       $(this).addClass('past');

     } else if (hour < time) {
       $(this).addClass('future');

     } else {
       $(this).addClass('present');
     }
  });
}




  $('.btn').on('click', function () {
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
    localStorage.getItem(hourSpan, JSON.stringify(userInput));
    userInput = $(this).siblings('.form-control').val().trim();
    hourSpan = $(this).siblings('.input-group-prepend').text().trim();
    console.log(hourSpan);
    console.log(userInput);
  });



$(document).ready(function() {
  timeSlots();
  timeCheck();



  //Button for clear tasks
  $("#clearTasks").on("click", function() {
   localStorage.clear();
    timeSlots();
  
  });
});
