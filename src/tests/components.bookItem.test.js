import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BookItem from '../components/BookItem'

import {
  bookMock as book
} from '../utils/_DATA'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    book
  }

  const component = shallow(<BookItem {...props} />)

  return {
    props,
    component
  }
}

describe('BookItem component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render one link as linkBookItem class element', () => {
    expect(component.find('.linkBookItem').length).toBe(1)
  })

  it('should render as target link /book/<book.id>', () => {
    expect(component.find('.linkBookItem').props().to).toBe(`/book/${book.id}`)
  })

  it('should render one image as imgBookItem class element', () => {
    expect(component.find('.imgBookItem').length).toBe(1)
  })

  it('should render as image source what defined as book.image_url', () => {
    expect(component.find('.imgBookItem').props().image).toBe(book.image_url)
  })

  it('should render one title as titleBookItem class element', () => {
    expect(component.find('.titleBookItem').length).toBe(1)
  })

  it('should render as text for title what defined as book.title', () => {
    expect(component.find('.titleBookItem').first().render().text()).toBe(book.title)
  })

})