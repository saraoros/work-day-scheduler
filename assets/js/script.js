var hour = moment().hours();
var currentHour = moment().format('h:mm:ss a');
var currentDay =
  moment().format('dddd') + ' ' + moment().format('MMMM DD YYYY');
var hourSpan;

var userInput= " ";
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



function timeSlots() {
    var slotEight = JSON.parse(localStorage.getItem('#eight')); eight.val(slotEight);

    var slotNine = JSON.parse(localStorage.getItem('#nine')); nine.val(slotNine);

    var slotTen = JSON.parse(localStorage.getItem('#ten')); ten.val(slotTen);

    var slotEleven = JSON.parse(localStorage.getItem('#eleven')); eleven.val(slotEleven);

    var slotTwelve = JSON.parse(localStorage.getItem('#twelve')); twelve.val(slotTwelve);

    var slotOne = JSON.parse(localStorage.getItem('#one')); one.val(slotOne);

    var slotTwo = JSON.parse(localStorage.getItem('#two')); two.val(slotTwo);

    var slotThree = JSON.parse(localStorage.getItem('#three')); three.val(slotThree);

    var slotFour = JSON.parse(localStorage.getItem('#four')); four.val(slotFour);

    var slotFive = JSON.parse(localStorage.getItem('#five')); five.val(slotFive);

    var slotSix = JSON.parse(localStorage.getItem('#six')); six.val(slotSix);

    var slotSeven = JSON.parse(localStorage.getItem('#seven')); seven.val(slotSeven);

console.log("currentHour" + hour + userInput);
}


$(document).ready(function(){
  timeSlots();
  // formFunction();


$(".btn").on("click", function(){
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
})







var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
  + momentNow.format('dddd'));
  $('#currentDay').html(currentDay + " " + momentNow.format('hh:mm:ss A'));
}, 100);





//Button for clear tasks
$("#clearTasks").on("click", function() {
    localStorage.clear();
    timeSlots();
})

});