$(document).ready(onReady);


function onReady() {
    console.log('jQuery loaded');
    clickListeners();
    getTasks();

} // end onReady

function clickListeners() {
    $('#submitBtn').on('click', addTask);
} // end clickListeners

function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        // call function to append to DOM
        renderTasks(response);
    }).catch(function (error) {
        console.log('error in GET', error);
    });

} // end getTasks

function renderTasks(tasks) {
    // empty container on DOM
    $('#taskList').empty();
    // loop over array of objects
    for (let task of tasks) {
        let $tr = $(`<div class="grid-container" data-id=${task.id}>`);
        $tr.append(`<div class="task-grid-item">${task.task}</div>`);
        $tr.append(`<div class="label-grid-item">${task.label}</div>`);
        // add buttons to task container
        $tr.append(`<div class="delete-grid-item">
                        <button class="mdc-icon-button material-icons editBtn">edit</button>
                        <button class="mdc-icon-button material-icons deleteBtn">delete</button>
                    </div>`);

        // convert time
        let time = convertTime(task.time);
        $tr.append(`<div class="time-grid-item">${time}</div>`);

        // convert date
        let date = convertDate(task.date);
        $tr.append(`<div class="date-grid-item">${date}</div>`);

        // check completed status
        if (task.completed === false) {
            $tr.append(`<div class="done-grid-item check-done"><input type="checkbox" value="1"></div>`);
        } else if (task.completed === true) {
            $tr.append(`<div class="done-grid-item check-done"><input type="checkbox" value="2" checked></div>`);
        } else {
            console.log('ERROR');
        };

        // check priority
        if (task.priority === 1) {
            $tr.append(`<div class="priority-grid-item low-priority">
                            <i class="mdc-icon-button material-icons">star</i>
                        </div>`);
        } else if (task.priority === 2) {
            $tr.append(`<div class="priority-grid-item med-priority">
                            <i class="mdc-icon-button material-icons">star</i>
                            <i class="mdc-icon-button material-icons">star</i>
                        </div>`);
        } else if (task.priority === 3) {
            $tr.append(`<div class="priority-grid-item high-priority">
                            <i class="mdc-icon-button material-icons">star</i>
                            <i class="mdc-icon-button material-icons">star</i>
                            <i class="mdc-icon-button material-icons">star</i>
                        </div>`);
        } else {
            console.log('ERROR');

        };

        // append everything to the DOM
        $('#taskList').append($tr);
    }; // end for loop

} // end renderTasks

function convertTime(input) {
    if (input === null) {
        return '';
    } else {
        return moment(input, 'HH:mm').format('h:mm A');
    }
} // end convertTime

function convertDate(input) {
    if (input === null) {
        return '';
    } else {
        return moment(input, 'YYYY MM DD').format("MMM Do 'YY");
    }
} // end convertDate


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