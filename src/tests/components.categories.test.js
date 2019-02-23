import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Categories } from '../components/Categories'

import {
  categoriesMock as categories
} from '../utils/_DATA'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    category: {
      categories,
      activeCategoryId: null
    },
    dispatch: () => null
  }

  const component = shallow(<Categories {...props} />)

  return {
    props,
    component
  }
}

describe('Categories component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render navCategories class element', () => {
    expect(component.find('.navCategories').length).toBe(1)
  })

  it('should have n+1 navCategoriesItem class elements for n = categories.length', () => {
    expect(component.find('.navCategoriesItem').length).toBe(categories.categories.length + 1)
  })

  it('should have a first navCategoriesItem class element for all categories', () => {
    expect(component.find('.navCategoriesItem').first().render().text()).toBe('All Categories')
  })

})