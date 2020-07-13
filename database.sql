
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


CREATE TABLE "era"(
	"id" SERIAL PRIMARY KEY,
    "timeframe" VARCHAR (30)
);

CREATE TABLE "favorites"(
	"id" SERIAL PRIMARY KEY,
    "event_id"  INT REFERENCES events,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "category" ("type")
VALUES ('weekender'), ('meetup'), ('swing dance'), ('car show'), ('music'), ('dance'), ('pinup contest'), ('other');

INSERT INTO "category" ("style")
VALUES ('true vintage'), ('reproduction'), ('pinup'), ('rockabilly'), ('modern'), ('other');

INSERT INTO "era" ("timeframe")
VALUES ('true vintage'), ('reproduction'), ('pinup'), ('rockabilly'), ('modern'), ('other');

INSERT INTO "events" ("event_name", "description", "category_id", "link", "user_id")
VALUES ('Viva Las Vegas', 'The Viva Las Vegas Rockabilly Weekender is the largest and most respected Rockabilly festival in the world and is now the longest-running music festival in Las Vegas, having just celebrated its 20th anniversary.', 'Las Vegas, NV, USA', 'https://www.vivalasvegas.net/');