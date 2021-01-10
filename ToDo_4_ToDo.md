## Much To Do about To Do - the app ##

# Set-Up #

[x] - .gitignore
[x] - database.sql
[x] - server folder
    [x] - server.js
    [x] - modules folder
        [x] - pool.js
    [x] - routes folder
        [x] - table.router.js
    [x] - public folder
        [x] - index.html
        [x] - styles folder
            [x] - style.css
        [x] - scripts
            [x] - client.js
        [x] - vendors
            [x] - bootstrap
            [x] - jquery
        [x] - favicon
[x] - npm init
[x] - npm install express
[x] - npm install pg
[x] - script text


# Database #

[x] - data schema
[x] - create table
    [x] - columns ("id", "task", "priority", "label", "date", "time", "completed")
[x] - populate with dummy data

# server.js #

[x] - require 
    [x] - express
    [x] - body parser
    [x] - router
[x] - declare app
[x] - app.use bodyParser
[x] - app.use router
[x] - declare port
[x] - app.listen

# index.html #

[x] - boilerplate
[x] - jquery
[x] - client
[x] - bootstrap
[x] - style
[x] - header
[x] - form
    [x] - task input
    [x] - dropdown of field
    [x] - date input
[x] - ul / div's?
[x] - material icons

# pool #

[x] - pg require 
[x] - declare DB in varaible
[x] - pool.on connect
[x] - pool.on error
[x] - export pool

# router #

[x] - require express
[x] - require pool
[x] - declare router
[x] - GET
[x] - POST
[x] - PUT
[x] - DELETE
[x] - export router

# client.js #

[x] - onReady
[x] - function displayList
    [x] - ajax get
[x] - function addTask
    [x] - ajax post
[x] - function editTask
    [x] - ajax put
[x] - function deleteTask
    [x] - ajax delete

# css #

[x] - Font = roboto condensed
[x] - background color = rgb(171,2,2)
[x] - grid classes

# stretch #
[ ] - edit tasks in same container
    [ ] - put route
    [ ] - ajax on client
[x] - display by dropdown
[x] - sweet alert when deleting
[ ] - style inputs