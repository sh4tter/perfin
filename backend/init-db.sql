-- Create the finance_tracker_user that the application expects
CREATE USER finance_tracker_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE finance_tracker TO finance_tracker_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO finance_tracker_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO finance_tracker_user;

-- Make sure the user can create tables
ALTER USER finance_tracker_user CREATEDB;

