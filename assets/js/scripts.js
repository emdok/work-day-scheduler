/*
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

var currentDateEl = $("#currentDay");
var currentDate = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().format('H');
var tasksArray = [];

// add current date to the page
currentDateEl.text(currentDate);

//grab all of the timeblocks data attributes
tasksArray = $.map($('.hours'), function(el) {
    return {hour: 'timeBlock', value: parseInt($(el).attr('data-hour'))}
});

// write function to check if the time is in the past present or future
for (i=0; i < tasksArray.length; i++) {

    if (currentTime == tasksArray[i].value) {
        //set className to corresponding element
        var dataValue = tasksArray[i].value;
        var taskEl = $('ul').find("[data-hour='" + dataValue +"']")
        taskEl.parent().children().addClass('bg-warning');
    }
    
    if (currentTime > tasksArray[i].value) {
        var dataValue = tasksArray[i].value;
        var taskEl = $('ul').find("[data-hour='" + dataValue +"']")
        taskEl.parent().children().addClass('bg-secondary');
    } 

    if(currentTime < tasksArray[i].value) {
        var dataValue = tasksArray[i].value;
        var taskEl = $('ul').find("[data-hour='" + dataValue +"']")
        taskEl.parent().children().addClass('bg-info');
    }
}

// write function to listen for a click on specific element to save data in text area to local storage
$('button').on("click", function() {
    event.preventDefault();

    var data = $(this).closest('textarea').val();
    console.log(data);
});


