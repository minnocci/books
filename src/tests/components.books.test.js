import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Books } from '../components/Books'

import {
  booksMock as books
} from '../utils/_DATA'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    book: {
      books,
      filteredBooksIds: []
    },
    dispatch: () => null
  }

  const component = shallow(<Books {...props} />)

  return {
    props,
    component
  }
}

describe('Books component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render booksGrid class element', () => {
    expect(component.find('.booksGrid').length).toBe(1)
  })

  it('should default show n booksGridItem class elements for n = books.length', () => {
    expect(component.find('.booksGridItem').length).toBe(books.books.length)
  })

  it('should have booksGridItem responsively shown as a 12-col, 6-col, 4-col, 3-col', () => {
    expect(component.find('.booksGridItem').first().props().xs).toBe(12)
    expect(component.find('.booksGridItem').first().props().sm).toBe(6)
    expect(component.find('.booksGridItem').first().props().md).toBe(4)
    expect(component.find('.booksGridItem').first().props().lg).toBe(3)
  })

})