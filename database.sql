
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (50),
    "location" INT,
    "auth_level" INT DEFAULT 0
);

CREATE TABLE "category"(
	"id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30),
    "style" VARCHAR (30)
);

CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "event_name" VARCHAR (80) UNIQUE NOT NULL,
    "description" VARCHAR (1000) NOT NULL,
    "category_id" INT REFERENCES category,
    "location" INT,
    "link" VARCHAR(300) DEFAULT 'N/A',
    "user_id" INT REFERENCES "user",
    "poster" VARCHAR (300),
    "start_date" DATE,
    "end_date" DATE,
    "approved" boolean DEFAULT false
);

CREATE TABLE "stores" (
    "id" SERIAL PRIMARY KEY,
    "store_name" VARCHAR (80) UNIQUE NOT NULL,
    "description" VARCHAR (1000) NOT NULL,
    "category_id" INT REFERENCES category,
    "location" INT,
    "link" VARCHAR(300) DEFAULT 'N/A',
    "user_id" INT REFERENCES "user"
);
