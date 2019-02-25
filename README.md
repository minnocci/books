# Books

## Outline
Single page application about reading books using a books
API. Documentation for the API must remain secret by now.

## Libraries: Frameworks
I decided to choose Redux for managing the state and React for implementing the UI layer. Redux is a reliable library that provides a predictable, consistent and centralized way of managing the state, decoupling it completely from the UI. Choosing React for the UI of this SPA has been more a matter of experience using it against other alternatives like Angular, Vue, etc, considering that the framework should not be something that I had to learn (at all) to achieve this app within a reasonable time.

## Libraries: Other dependencies
Other than Redux and React, here you can find a list of the other dependencies I have used in this project:
- node-sass: enables SASS stylesheet preprocessor on Node apps [https://github.com/sass/node-sass]
- material UI: material design components for React [https://material-ui.com/]
- react-dom: DOM renderer for React [https://github.com/facebook/react/tree/master/packages/react-dom]
- react-redux: Official React bindings for Redux [https://github.com/reduxjs/react-redux]
- react-router-dom: DOM bindings for React Router [https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom]
- redux-thunk: Thunk middleware for Redux [https://github.com/reduxjs/redux-thunk]
- enzyme: Testing util for React [https://github.com/airbnb/enzyme]
- enzyme-adapter-react-16: adapter for Enzyme and React 16

## Getting started
To run this project, you must first install the dependencies with `npm install`. Then you will be able to use the available scripts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Features
- Home page: allows users to log in to the application. This is the default page for all website visitors and redirects already logged in users to the discovery page.
- Discovery page: list all available books on the application, broken down by category. Book thumbnails link to the book page.
- Book page: displays the book's content to the user. Users with free access can only see the first half of the content, with the second half covered with a sign up CTA. Users with premium access should be able to read the entire content. 

## Additional features
- Logged user storage: logged user is stored during the session using the browser session storage, in order not facilitate the use cases specified.
- Log out: when an user is logged in, can log out by clicking the button on the navigation bar, this is related to the logged user storage.


# Planning

## Break down views and components
- Auth page component (home page) requirements:
  - Is located at /
  - Shows a button to log in if the user isn't logged in, otherwise redirects to the /discovery page
  - Renders a nav component on the top

- Nav component requirements:
  - Displays a logo that ideally works as a link to the home page
  - Shows a button to log out if the user is logged in

- Discovery page component requirements:
  - Is located at /discovery
  - On desktop, displays on the left the categories component and on the right the books component
  - Renders a nav component on the top

- Categories component requirements:
  - Displays a menu-wise list of categories, each of them work as a filter for the adjacent books components
  - Display an all categories item on top
  - Highlights the active category

- Books component requirements:
  - Shows books collection, with every book displayed as a card (book item component)
  - Each book item will show: image, title and a CTA button
  - Clicking on a book item leads the user to the book page

- Book page component requirements:
  - Is located at /book/:id
  - Shows the book detail, consisting of title and content
  - For logged in users, the whole content of the book is displayed
  - For guest users, only the half of the content is displayed, in addition a sign up CTA
  - Renders a nav component on the top

## Determine events in the app
- Auth page component:
  - log in the user (action type: LOGIN_USER)
- Nav component:
  - log out the user (action type: LOGOUT_USER)
- Discovery page component:
  - nothing (functional presentational component)
- Categories component:
  - receive the categories (action type: RECEIVE_CATEGORIES)
  - set / reset the filtering (action types: FILTER_CATEGORY, FILTER_BOOKS)
- Books component:
  - receive the books (action type: RECEIVE_BOOKS)
- Book item component:
  - nothing (functional presentational component)
- Book page component:
  - receive a book (action type: RECEIVE_BOOK)
  - log in the user (action type: LOGIN_USER)

## Store and data
- user: responsible to handle the user state
- book: responsible to handle the books state
- category: responsible to handle the categories state

```
{
  user: {
    userId,
    accessType
  },
  book: {
    books: [
      {image_url, id, category_id, title, content},
      {image_url, id, category_id, title, content},
      ...
    ],
    filteredBooksIds: [
      {id},
      {id},
      ...
    ]
  },
  category: {
    categories: [
      {category_id, title, books_ids: [id, id, ...]},
      {category_id, title, books_ids: [id, id, ...]},
      ...
    ],
    activeCategoryId: category_id
  }
}
```

## Mocks / API mode

Switching between using mocks or using the books API can be done in `/utils/api.js` by changing the following constant:

```
const useMocks = false
// true for using mocks
// false for using books API
```

## Tests

Tests are included under the `/tests` folder, covering some unit tests for actions, components and reducers. `npm test` launches the test runner.

## Changing mock data and the API calls

The mock data and the API calls can be changed in `/utils/_DATA.js`

## Changing the theme colors

The UI colors set fot the material theme can be changed in `/utils/themes.js`