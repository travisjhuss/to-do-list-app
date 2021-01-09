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

[ ] - data schema
[ ] - create table
    [ ] - columns ("id", "task", "priority", "label", "date", "time", "complete_status")
[ ] - populate with dummy data

# server.js #

[ ] - require 
    [ ] - express
    [ ] - body parser
    [ ] - router
[ ] - declare app
[ ] - app.use bodyParser
[ ] - app.use router
[ ] - declare port
[ ] - app.listen

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

[ ] - pg require 
[ ] - declare DB in varaible
[ ] - pool.on connect
[ ] - pool.on error
[ ] - export pool

# router #

[ ] - require express
[ ] - require pool
[ ] - declare router
[ ] - GET
[ ] - POST
[ ] - PUT
[ ] - DELETE
[ ] - export router

# client.js #

[ ] - onReady
[ ] - function displayList
    [ ] - ajax get
[ ] - function addTask
    [ ] - ajax post
[ ] - function editTask
    [ ] - ajax put
[ ] - function deleteTask
    [ ] - ajax delete

# css #

[x] - Font = roboto condensed
[ ] - background color = rgb(171,2,2)
[x] - grid classes