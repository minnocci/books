import {
  doAuthMock,
  getInitialDataMock,
  getCategoriesMock,
  getBooksMock,
  getBookMock,
  getCategoryMock
} from './_DATA.js'

// const useMocks = true
// true for using mocks
// false for using real API
// TODO handle later below

export async function auth() {
  return doAuthMock()
}

export async function getInitialData() {
  return getInitialDataMock()
}

export async function getCategories() {
  return getCategoriesMock()
}

export async function getBooks() {
  return getBooksMock()
}

export async function getBook({ id }) {
  return getBookMock()
}

export async function getCategory({ id }) {
  return getCategoryMock()
}