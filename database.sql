-- data schema

-- DB name = 'weekend-to-do-app'

-- table 
    -- ID = serial primary key
    -- task = varchar(200) not null
    -- priority = varchar(10) default low
    -- label = varchar(20) default null
    -- date = varchar(12) default null
    -- time = varchar(10) default null
    -- completed = boolean default false

-- to create table
CREATE TABLE "tasks" (

    "id" SERIAL PRIMARY key,
    "task" VARCHAR(200) NOT NULL,
    "priority" VARCHAR(10) DEFAULT 'low',
    "label" VARCHAR(20) DEFAULT NULL,
    "date" VARCHAR(12) DEFAULT NULL,
    "time" VARCHAR(10) DEFAULT NULL,
    "completed" BOOLEAN DEFAULT false

);

-- dummy data
INSERT INTO "tasks" ("task", "priority", "label", "date", "time")
VALUES ('Take out the trash', 'low', 'home', default, default), 
('Prepare presentation', 'high', 'work', '2021-01-16', '10:30'),
('Buy cake for Katelyn''s birthday', 'medium', 'home', '2021-01-12', '15:00'),
('Complete weekend assignment', 'high', 'school', '2021-01-10', '17:00');