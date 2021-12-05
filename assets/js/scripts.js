/*
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
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
        $("ul li[data-hour="'+i'").addClass('bg-secondary');
    }
    
    if (currentTime > tasksArray[i].value) {
        console.log('timeGreater');
    } 

    if(currentTime < tasksArray[i].value) {
        console.log('timeLess');
    }
}

// if time is in the past set a color
// if time is current set a color
// if time is in the future set a color

// write function to listen for a click on specific element to save data in text area to local storage

