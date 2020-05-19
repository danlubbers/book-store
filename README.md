<p align="center">
  <img src="https://github.com/danlubbers/book-store/tree/master/src/assets/bookstore-media-screens.jpg" alt="book store">
</p>

## Description
Create a book store web application similar to Barnes & Nobles or Amazon. Users who visit the book store will have to sign in and once credentials are validated they can then go to their book shelf, search for new books in the database or see detailed information of a specific book on a separate page. They can save or move any book to one of three shelves: "Want to Read", "Currently Reading", or "Read."

## Setup
---
1. Clone this repo: `https://github.com/danlubbers/book-store`
2. CD into `book-store/server`
3. `npm install` dependencies for the backend. ( Running on localhost:7000 )
4. `npm start` the backend server.
5. Open a new terminal and CD into the book-store.
6. `npm install` dependencies for the front-end.
7. `npm start` the frontend server.
8. Everything should now be up and running.
9. There are three different login credentials you can use:
    > Username: alex \
    > Password: grey

    > Username: harry \
    > Password: potter

    > Username: hermione \
    > Password: granger


## UI Requirements
---
1. Signin:
    * [x] Users should be able to signin with a username and password.
    * [x] If a user enters the wrong credentials, display a message telling the user that their credentials are not correct.
    * [x] When a user successfully signs in, they should be redirected to their bookshelf.
    * [x] The user must be logged in to view the Search, Book Details or Bookshelf screens. If they are not, redirect them to the Signin screen. (Hint: use protected routes.)

2. Search:
    * [x] Users should be able to search for different book titles. An onChange event should trigger the search.
    * [x] At least the book title, author(s) and a thumbnail of the book cover should appear in the search results. The API does not include the same information every time, so use conditional rendering; check to see if the data is there before displaying it on the screen.
    * [x] If there are no matching titles, display a message on the screen telling the user that no search results are found.
    * [x] Each book should link to the Book Details screen.

3. Book Details:
    * [x] Users will be able to view more detailed information on a single book.
    * [x] You will be getting the book information from an API. In addition to the book title, author(s) and cover image, include at least three other types of information about the book. Again, the API does not include the same information every time, so use conditional rendering; check to see if the data is there before displaying it on the screen.
    * [x] Users should be able to change which "shelf" a book belongs to.

4. Bookshelf:
    * [x] This page should contain three book lists or “shelves”:
        1. Want to Read
        2. Currently Reading
        3. Read
    * [x] Users should be able to see which shelf each book belongs to.
    * [x] Users should be able to move a book from one shelf to another.
    * [x] Users should be able to remove a book from their bookshelf.
    * [x] Each book should link to the Book Details screen.




## Bonus Requirements
  * [x] App is fully responsive for mobile, tablet, laptop and desktop screens

## Coding Requirements
---
  * [x] This application should contain at least four React components. Each of the four screens outlined earlier should be a separate, high-level React Component. (You can choose to use hooks, extend the React Component class, or mix and match. It is up to you.)
  * [x] You must use the React Router library.
  * [x] You must have a signin form and authenticate users with either JWT style or session UUID style authentication tokens.
  * [x] You must store your authentication tokens as either a secure cookies or inside local storage.
  * [x] You must have protected routes (routes that the user must be logged in to see).
  * [x] If the user has logged in, and refreshes the page, they should still be logged in. If the user has not logged in yet and refreshes the page, they should not be able to access any protected content.
  * [x] You must use the Context API (recommended) or Redux to store state that is shared universally between most components.
  * [x] For components that are functions, you should handle AJAX calls inside the useEffect() hooks. For components where you extend the React Component class, you should make AJAX requests inside of componentDidMount() and other lifecycle hooks.
  * [x] AJAX errors should be caught.


## Author

* **Dan Lubbers**   [danlubbers.com](https://danlubbers.com)