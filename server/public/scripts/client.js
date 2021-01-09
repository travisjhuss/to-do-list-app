$(document).ready(onReady);


function onReady() {
    console.log('jQuery loaded');
    clickListeners();
    
} // end onReady

function clickListeners() {
    $('#submitBtn').on('click', addTask);
} // end clickListeners


function addTask() {
    console.log('clicked submit');
    const newTask = {
        task: $('#taskInput').val(),
        priority: $('#priorityInput').val(),
        label: $('#labelInput').val(),
        date: $('#dateInput').val(),
        time: $('#timeInput').val()
    }

    console.log(newTask);
    
    
} // addTask