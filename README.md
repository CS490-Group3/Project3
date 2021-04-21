# Group 3 - Project 3

Heroku Link: https://secure-badlands-86419.herokuapp.com

## Prerequisites

### Google Sign-In

This application uses the Google Sign-In API. You must [create authorization credentials](https://developers.google.com/identity/sign-in/web/sign-in#create_authorization_credentials).

### Database

You need an SQL database for this application to work. At the time of writing, only PostgreSQL has been tested.

## Requirements

After cloning the repository, run the following commands to install the required libraries.

```sh
npm install
python3 -m pip install -r requirements.txt
```

## Local Deployment

Both the React and Flask apps require specific environment variables. There are two approaches to setting environment variables. The traditional way is to use the shell, e.g., in `sh` you would run the following command to set variable `FOO` to `bar`.

```sh
export FOO='bar'
```

The more "modern" way is to use a `.env` file. This is supported in Python via the third-party `python-dotenv` library and is supported natively by React. Both approaches will work for this project. Here are the required environment variables:

- `DATABASE_URL` - The URL of the database to use.
- `FLASK_LOGIN_SECRET_KEY` - Flask-Login uses this key to encrypt session cookies. This key can be any string of characters.
- `REACT_APP_CLIENT_ID` - This is the client ID you created for the Google Sign-In API.

After correctly setting the environment variables, build and run the project. The application should then be visible at [http://localhost:8081](http://localhost:8081).

```sh
npm run build
python3 -m app.app
```

## Setup

1. Run `echo "DANGEROUSLY_DISABLE_HOST_CHECK=true" > .env.development.local` in the project directory

## Deploy to Heroku

1. Create a Heroku app: `heroku create --buildpack heroku/python`
2. Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
3. Push to Heroku: `git push heroku main`
