

var currentDateEl = $("#currentDay");
var currentDate = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().format('H');
var tasksArray = [];
var storageArray = [];

// add current date to the page
currentDateEl.text(currentDate);

//grab all of the timeblocks data attributes
tasksArray = $.map($('.hours'), function (el) {
    console.log(el);
    return { hour: 'timeBlock', value: parseInt($(el).attr('data-hour')) }
});

// write function to check if the time is in the past present or future
for (i = 0, j = 9; i < tasksArray.length; i++, j++) {

    // check local storage to see if any data exists to print to page
    if (localStorage.getItem(j)) {
        $('#textArea' + j).val(localStorage.getItem(j));
    }
     
    if (currentTime == tasksArray[i].value) {
        //set Present class name to task in present time
        var dataValue = tasksArray[i].value;
        var taskEl = $('ul').find("[data-hour='" + dataValue + "']")
        $('#textArea' + j).addClass('present text-dark');
        $('#textArea' + j).parent().addClass('present text-dark')
    }

    //set Present class name to task in past time
    if (currentTime > tasksArray[i].value) {
        var dataValue = tasksArray[i].value;
        var taskEl = $('ul').find("[data-hour='" + dataValue + "']")
        $('#textArea' + j).addClass('past text-dark');
        $('#textArea' + j).parent().addClass('past text-dark')
    }

    //set Present class name to task in future time
    if (currentTime < tasksArray[i].value) {
        var dataValue = tasksArray[i].value;
        var taskEl = $('ul').find("[data-hour='" + dataValue + "']")
        $('#textArea' + j).addClass('future text-dark');
        $('#textArea' + j).parent().addClass('future text-dark')
    }
}

// list for click on specific element to save data in text area to local storage
for (let i = 9; i < 18; i++) {

    $("#" + i).on("click", function () {
        event.preventDefault();
        var data = $("#textArea" + i).val();
        localStorage.setItem(i, data);
        console.log(i);
    });
};


