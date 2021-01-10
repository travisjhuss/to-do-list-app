
$(document).ready(onReady);


function onReady() {
    console.log('jQuery loaded');
    addListeners();
    getTasks();

} // end onReady

function addListeners() {
    $('#submitBtn').on('click', addTask);
    $('#taskList').on('click', '.deleteBtn', deleteTask);
    $('#taskList').on('change', '.checkbox', markDone)
    $('#displayInput').on('change', orderTasks)
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
        // check completed status
        if (task.completed === false) {
            $tr.append(`
                        <div class="done-grid-item">
                            <label class="switch">
                                <input type="checkbox" class="checkbox">
                                <span class="slider round"></span>
                            </label>
                            <p>Done</p>
                        </div>
                        `);
        } else if (task.completed === true) {
            $tr = $(`<div class="grid-container completed" data-id=${task.id}>`);
            $tr.append(`
                        <div class="done-grid-item">
                            <label class="switch">
                                <input type="checkbox" class="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                            <p>Done</p>
                        </div>
                        `);
        } else {
            console.log('ERROR');
        };

        $tr.append(`<div class="task-grid-item">${task.task}</div>`);
        $tr.append(`<div class="label-grid-item">${task.label}</div>`);
        // add buttons to task container
        $tr.append(`<div class="delete-grid-item">
                        <button class="mdc-icon-button material-icons deleteBtn">delete</button>
                        <button class="mdc-icon-button material-icons editBtn">edit</button>
                    </div>`);

        // convert time
        let time = convertTime(task.time);
        $tr.append(`<div class="time-grid-item">${time}</div>`);

        // convert date
        let date = convertDate(task.date);
        $tr.append(`<div class="date-grid-item">${date}</div>`);

        // check completed status
        if (task.completed === false) {
            $tr.append(`
                        <div class="done-grid-item">
                            <label class="switch">
                                <input type="checkbox" class="checkbox">
                                <span class="slider round"></span>
                            </label>
                            <p>Done</p>
                        </div>
                        `);
        } else if (task.completed === true) {
            $tr.append(`
                        <div class="done-grid-item">
                            <label class="switch">
                                <input type="checkbox" class="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                            <p>Done</p>
                        </div>
                        `);
        } else {
            console.log('ERROR');
        };

        // check priority
        if (task.priority === 1) {
            $tr.append(`<div class="priority-grid-item low-priority">
                            <p>Priority</p>
                            <i class="mdc-icon-button material-icons">star</i>
                        </div>`);
        } else if (task.priority === 2) {
            $tr.append(`<div class="priority-grid-item med-priority">
                            <p>Priority</p>
                            <i class="mdc-icon-button material-icons">star</i>
                            <i class="mdc-icon-button material-icons">star</i>
                        </div>`);
        } else if (task.priority === 3) {
            $tr.append(`<div class="priority-grid-item high-priority">
                            <p>Priority</p>
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

    // switching priority to an integer
    switch (newTask.priority) {
        case 'low':
            newTask.priority = 1;
            break;
        case 'medium':
            newTask.priority = 2;
            break;
        case 'high':
            newTask.priority = 3;
            break;
        default:
            console.log('error');
            break;
    }; // end switch

    // check for no date
    if (newTask.date === '') {
        newTask.date = undefined;
    };

    // check for no time
    if (newTask.time === '') {
        newTask.time = undefined;
    };

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask,
    }).then(function (response) {
        console.log('Response from server.', response);
        clearFields();
        getTasks();
    }).catch(function (error) {
        console.log('Error in POST', error)
        alert('Unable to add task at this time.');
    });


} // addTask

function clearFields() {
    $('#taskInput').val('');
    $('#priorityInput').val('');
    $('#labelInput').val('');
    $('#dateInput').val('');
    $('#timeInput').val('');
} // end clearFields

function deleteTask() {
    console.log('clicked delete');
    const id = $(this).parent().parent().data('id');
    swal({
        title: "Delete",
        text: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal('Task Deleted', {
                icon: "success",
            });
            $.ajax({
                type: 'DELETE',
                url: `/tasks/${id}`
            }).then(function (response) {
                getTasks();
            }).catch(function (error) {
                alert('error in delete');
            }); // end ajax
        } else {
            swal("Task kept");
        }
    });

} // end deleteTask

function markDone() {
    console.log('checked done');
    const id = $(this).parent().parent().parent().data('id');
    console.log(id);
    const dataToSend = {};

    if (this.checked) {
        console.log('checked working');
        dataToSend.completed = 'true';
    } else {
        dataToSend.completed = 'false';
    }

    $.ajax({
        type: 'PUT',
        url: `/tasks/${id}`,
        data: dataToSend

    }).then(function (response) {
        console.log('updated');
        getTasks();

    }).catch(function (error) {
        alert('error updating');
    }) // end ajax

} // end markDone

function orderTasks() {
    console.log('changed order by');
    const orderByData = $('#displayInput').val();
    console.log(orderByData);

    const dataToSend = {
        orderBy: orderByData
    };

    console.log(dataToSend);


    $.ajax({
        type: 'PUT',
        url: `/tasks`,
        data: dataToSend

    }).then(function (response) {
        console.log(response);
        renderTasks(response);
    }).catch(function (error) {
        alert('error updating');
    }) // end ajax

} // end orderTasks
