import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Discovery from '../components/Discovery'

Enzyme.configure({ adapter: new Adapter() })

function setup() {

  const component = shallow(<Discovery />)

  return {
    component
  }
}

describe('Discovery component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render a main container', () => {
    expect(component.find('main').length).toBe(1)
  })

  it('should render a categoriesContainer class element container', () => {
    expect(component.find('.categoriesContainer').length).toBe(1)
  })

  it('should render a booksContainer class element container', () => {
    expect(component.find('.booksContainer').length).toBe(1)
  })

  it('should have categoriesContainer responsively shown as a 12-col, 4-col, 3-col, 2-col', () => {
    expect(component.find('.categoriesContainer').first().props().xs).toBe(12)
    expect(component.find('.categoriesContainer').first().props().sm).toBe(4)
    expect(component.find('.categoriesContainer').first().props().md).toBe(3)
    expect(component.find('.categoriesContainer').first().props().lg).toBe(2)
  })

  it('should have booksContainer responsively shown as a 12-col, 8-col, 9-col, 10-col', () => {
    expect(component.find('.booksContainer').first().props().xs).toBe(12)
    expect(component.find('.booksContainer').first().props().sm).toBe(8)
    expect(component.find('.booksContainer').first().props().md).toBe(9)
    expect(component.find('.booksContainer').first().props().lg).toBe(10)
  })

})