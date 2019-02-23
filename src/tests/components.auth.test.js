import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Auth } from '../components/Auth'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    user: undefined
  }

  const component = shallow(<Auth {...props} />)

  return {
    props,
    component
  }
}

describe('Auth component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render a main container', () => {
    expect(component.find('main').length).toBe(1)
  })

  it('should render a button with class btnLogin', () => {
    expect(component.find('.btnLogin').length).toBe(1)
  })

  it('should render a button with the text Log in', () => {
    expect(component.find('.btnLogin').props().children).toBe('Log in')
  })

})