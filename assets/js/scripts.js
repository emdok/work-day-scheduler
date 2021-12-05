/*
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
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

// add current date to the page
currentDateEl.text(currentDate);

var nineEl = $('#hour-9');
var tenEl = $('#hour-10');
var elevenEl = $('#hour-11');
var twelveEl = $('#hour-12');
var oneEl = $('#hour-1');
var twoEl = $('#hour-2');
var threeEl = $('#hour-3');
var fourEl = $('#hour-4');
var fiveEl = $('#hour-4');

nineEl.text(moment().set('hour', 9).format('h A'));
tenEl.text(moment().set('hour', 10).format('h A'));
elevenEl.text(moment().set('hour', 11).format('h A'));
twelveEl.text(moment().set('hour', 12).format('h A'));
oneEl.text(moment().set('hour', 13).format('h A'));
twoEl.text(moment().set('hour', 14).format('h A'));
threeEl.text(moment().set('hour', 15).format('h A'));
fourEl.text(moment().set('hour', 16).format('h A'));
fiveEl.text(moment().set('hour', 17).format('h A'));

