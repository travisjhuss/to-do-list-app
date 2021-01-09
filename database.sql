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

CREATE TABLE "tasks" (

    "id" SERIAL PRIMARY key,
    "task" VARCHAR(200) NOT NULL,
    "priority" VARCHAR(10) DEFAULT "low",
    "label" VARCHAR(20) DEFAULT NULL,
    "date" VARCHAR(12) DEFAULT NULL,
    "time" VARCHAR(10) DEFAULT NULL,
    "completed" BOOLEAN DEFAULT false

)
