var hour = moment().format('h:mm:ss a');
var todaysDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");




















 // Button for clear tasks
 $("#clearTasks").on("click", function(){
    localStorage.clear();
    // this is where the hourly function should be called : functionName)
  }) 