DROP DATABASE IF EXISTS greenacres_db;

CREATE DATABASE greenacres_db;

\c greenacres_db;

-- CREATE TABLE clients (
--  client_id INTEGER PRIMARY KEY, --put to client id on jobs
--  first_name VARCHAR(75),
-- last_name VARCHAR(250)

-- );

-- CREATE TABLE employees (
--  employee_id INTEGER PRIMARY KEY, --put to user id on jobs
--  first_name VARCHAR(75),
-- last_name VARCHAR(250)

-- );

-- CREATE TABLE tasks (
--  task_id INTEGER PRIMARY KEY,
--  task_name VARCHAR(100),
-- task_description VARCHAR(250)

-- );

-- CREATE TABLE jobs (
--     job_id INTEGER PRIMARY KEY,
--     client_id INTEGER,
--     employee_id INTEGER,
--     job_date VARCHAR(40),
--     comments VARCHAR(200),
--     FOREIGN KEY (client_id) REFERENCES clients(client_id),
--     FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
-- );

