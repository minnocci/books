import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Book } from '../components/Book'

import {
  bookMock as book,
  booksMock as books,
  meMock as userLoggedIn
} from '../utils/_DATA'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    user: undefined,
    book: books,
    match: {
      params: {
        bookId: book.id
      }
    },
    dispatch: () => null
  }

  const component = shallow(<Book {...props} />)

  return {
    props,
    component
  }
}

describe('Book component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render the title as bookTitle class element', () => {
    expect(component.find('.bookTitle').length).toBe(1)
  })

  it('should render the text for title what defined as book.title', () => {
    expect(component.find('.bookTitle').first().render().text()).toBe(book.title)
  })

  it('should render the book text as bookContent class element', () => {
    expect(component.find('.bookContent').length).toBe(1)
  })

  describe('Book component for guest user', () => {
    
    it('should render just the half of the book text', () => {
      expect(component.find('.bookContent').first().render().text()).toBe(`${book.content.slice(0, book.content.length / 2)}...`)
    })

    it('should render a button with class btnSubscribe', () => {
      expect(component.find('.btnSubscribe').length).toBe(1)
    })
  
    it('should render a button with the text Subscribe to read', () => {
      expect(component.find('.btnSubscribe').render().text()).toBe('Subscribe to read')
    })

  })

  describe('Book component for auth user', () => {

    const props = {
      user: {
        userId: userLoggedIn.user_id,
        accessType: userLoggedIn.access_type
      },
      book: books,
      match: {
        params: {
          bookId: book.id
        }
      },
      dispatch: () => null
    }

    const componentWithUser = shallow(<Book {...props} />)
    
    it('should render the whole content of the book text', () => {
      expect(componentWithUser.find('.bookContent').first().render().text()).toBe(book.content)
    })

    it('should not render a button with class btnSubscribe', () => {
      expect(componentWithUser.find('.btnSubscribe').length).toBe(0)
    })

  })

})