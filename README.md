# Let's Go, Retro! Project
This is an app designed around the needs and wants of the vintage and pinup communities.
Many of my friends have said they have struggled to find events and friends who share similar interests related to these communities. My goal was to design an app that does just that. There will be an event page that allows users to find events and connect them to to others who share the love for vintage and pinup communities.  In the future, there will be a feature that will show users who have registered with the app and allow them to connect with others. Eventually I would like there to be a search function to allow users to find others based on similarities such as, preferred category, era, and/or location.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create a database and the tables(if downloading)

Create a new database called `prime_app` and create the necessary tables listed in the database.sql file.

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

