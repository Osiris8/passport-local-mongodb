## About

Username and password authentication strategy for Passport and Node.js.

https://www.passportjs.org/packages/passport-local/

## Usage

Install dependencies: npm install
Start the server: npm start
Access the project in your browser or via Postman.

## Technologies Used

Node.js
Express.js
MongoDB (or any other database of your choice)
Passport.js

## Project Structure

/controllers: Route controllers
/models: Data models

## Configuration

Put the link to your MongoDB access in App.js

## Features

Registration: /register - Allows users to sign up with a username and password.
Login: /login - User authentication and generation of a JWT token.
Access to Protected Resources: Using the JWT token to access certain protected routes.
Password Change: /change-password - Allows a logged-in user to change their password.
Account Deletion: /delete-account - Allows a logged-in user to delete their account.

## Contributing

All contributions are welcome! Feel free to open issues or pull requests.

## License

The MIT License
