import {
  doAuthMock,
  doAuth,
  logoutMock,
  doLogout,
  getInitialDataMock,
  doGetInitialData,
  getCategoriesMock,
  doGetCategories,
  getBooksMock,
  doGetBooks,
  getBookMock,
  doGetBook,
  getCategoryMock,
  doGetCategory
} from './_DATA.js'

const useMocks = false
// true for using mocks
// false for using books API

export async function auth() {
  return useMocks ? doAuthMock() : doAuth()
}

export async function logout(userId) {
  return useMocks ? logoutMock(userId) : doLogout(userId)
}

export async function getInitialData() {
  return useMocks ? getInitialDataMock() : doGetInitialData()
}

export async function getCategories() {
  return useMocks ? getCategoriesMock() : doGetCategories()
}

export async function getBooks() {
  return useMocks ? getBooksMock() : doGetBooks()
}

export async function getBook({ id }) {
  return useMocks ? getBookMock() : doGetBook(id)
}

export async function getCategory({ id }) {
  return useMocks ? getCategoryMock() : doGetCategory(id)
}