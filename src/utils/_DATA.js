const authMock = {
  "status": "success",
  "user_id": "5c5aeaf5608b273a5257043f"
}

export const meMock = {
  "user_id": "5c5aeaf5608b273a5257043f",
  "access_type": "premium"
}

export const categoriesMock = {
  "categories": [
    {
      "id":"5c5ae8a3608b273a5257041e",
      "title":"Productivity",
      "book_ids": [
        "5c5ae9fc608b273a52570422",
        "5c5ae9fc608b273a52570423",
        "5c5ae9fc608b273a52570424",
        "5c5ae9fc608b273a52570425"
      ]
    }
  ]
}

export const booksMock = {
  "books": [
    {
      "image_url": "https://images.blinkist.com/images/books/5c570ea26cee070008d6c880/3_4/640.jpg",
      "id": "5c5ae9fc608b273a52570422",
      "category_id": "5c5ae8a3608b273a5257041e",
      "title": "Audax ut aer explicabo",
      "content": "At libero molestiae ipsa dolores. Est et sint. Quis minus ut et reprehenderit. Sed fugiat totam aspernatur ex molestiae numquam. Voluptatem quos sequi fugit."
    }
  ]
}

export const bookMock = {
  "image_url": "https://images.blinkist.com/images/books/5c570ea26cee070008d6c880/3_4/640.jpg",
  "id": "5c5ae9fc608b273a52570422",
  "category_id": "5c5ae8a3608b273a5257041e",
  "title": "Audax ut aer explicabo",
  "content": "At libero molestiae ipsa dolores. Est et sint. Quis minus ut et reprehenderit. Sed fugiat totam aspernatur ex molestiae numquam. Voluptatem quos sequi fugit."
}

export const categoryMock = {
  "id": "5c5ae8a3608b273a5257041e",
  "title": "Productivity",
  "book_ids": [
    "5c5ae9fc608b273a52570422",
    "5c5ae9fc608b273a52570423",
    "5c5ae9fc608b273a52570424",
    "5c5ae9fc608b273a52570425"
  ]
}

function _authMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...authMock}), 500)
  })
}

function _meMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...meMock}), 500)
  })
}

function _categoriesMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...categoriesMock}), 500)
  })
}

function _booksMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...booksMock}), 500)
  })
}

function _bookMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...bookMock}), 500)
  })
}

function _categoryMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res(categoryMock), 500)
  })
}

export async function doAuthMock() {
  return Promise.resolve(
    _authMock()
  ).then(() => (
    Promise.resolve(
      _meMock()
      ).then(({ user_id, access_type }) => {
        sessionStorage.setItem('userId', user_id)
        sessionStorage.setItem('accessType', access_type)
        return { 'userId': user_id, 'accessType': access_type }
      })
  ))
}

export async function logoutMock(userId) {
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('accessType')
  return (userId)
}

export async function getInitialDataMock() {
  return (
    sessionStorage.userId !== undefined
    && sessionStorage.accessType !== undefined
  )
}

export async function getCategoriesMock() {
  return Promise.resolve(
    _categoriesMock()
  ).then((categories) => (
    categories
  ))
}

export async function getBooksMock() {
  return Promise.resolve(
    _booksMock()
  ).then((books) => (
    books
  ))
}

export async function getBookMock() {
  return Promise.resolve(
    _bookMock()
  ).then((book) => (
    book
  ))
}

export async function getCategoryMock() {
  return Promise.resolve(
    _categoryMock()
  ).then((category) => (
    category
  ))
}


// Using API for Books SPA

const booksApi = 'https://ancient-springs-73658.herokuapp.com'

const headers = new Headers({
})

const _auth = () =>
  fetch(`${booksApi}/auth`, { method: 'POST', ...headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

const _me = () =>
  fetch(`${booksApi}/me`, { ...headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

const _categories = () =>
  fetch(`${booksApi}/categories`, { ...headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

const _books = () =>
  fetch(`${booksApi}/books`, { ...headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

const _book = (bookId) =>
  fetch(`${booksApi}/book/${bookId}`, { ...headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

const _category = (categoryId) =>
  fetch(`${booksApi}/category/${categoryId}`, { ...headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

export async function doAuth() {
  return Promise.resolve(
    _auth()
  ).then(() => (
    Promise.resolve(
      _me()
      ).then(({ user_id, access_type }) => {
        sessionStorage.setItem('userId', user_id)
        sessionStorage.setItem('accessType', access_type)
        return { 'userId': user_id, 'accessType': access_type }
      })
  ))
}

export async function doLogout(userId) {
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('accessType')
  return (userId)
}

export async function doGetInitialData() {
  return (
    sessionStorage.userId !== undefined
    && sessionStorage.accessType !== undefined
  )
}

export async function doGetCategories() {
  return Promise.resolve(
    _categories()
  ).then((categories) => (
    categories
  ))
}

export async function doGetBooks() {
  return Promise.resolve(
    _books()
  ).then((books) => (
    books
  ))
}

export async function doGetBook(bookId) {
  return Promise.resolve(
    _book(bookId)
  ).then((book) => (
    book
  ))
}

export async function doGetCategory(categoryId) {
  return Promise.resolve(
    _category(categoryId)
  ).then((category) => (
    category
  ))
}