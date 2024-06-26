<h1 align = "center"> Book Search Engine </h1>

This project focuses on creating an intuitive book search engine tailored for avid readers who are eager to discover new books and manage a list of potential purchases. The application offers a user-friendly interface that includes options for searching books, as well as functionalities for user authentication. Users can browse through extensive search results, displaying detailed information about each book, and have the ability to save their favorite finds for later review. The system supports account creation and login, allowing for a personalised and secure way to keep track of both past searches and saved books, ensuring a tailored browsing experience for every user.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation Instruction](#installation-instruction)
- [Test Instruction](#test-instruction)
- [Screenshot](#screenshot)
- [Video](#video)
- [Output](#output)
- [Deployed Application](#deployed-application)
- [License](#license)

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Installation Instruction

- [Install nodeJs and npm](https://nodejs.org/en/download)
- [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)

## Test Instruction

To use this project:

- Get a copy of this repo to your local machine.
- Install the `Node Module`

```
npm install
```

- Type in the following to run the project:

```
npm run develop
```

## Deployed Application

The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/Book-Search-Engine/](https://github.com/yukitoshi12345/Book-Search-Engine)

You can access the deployed application here: [book-search-engine-lqyw.onrender.com](book-search-engine-lqyw.onrender.com)

## License

This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/Book-Search-Engine/blob/main/LICENSE).
