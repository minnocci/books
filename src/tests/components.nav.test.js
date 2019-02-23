import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Nav } from '../components/Nav'

import {
  meMock as userLoggedIn
} from '../utils/_DATA'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    user: undefined
  }

  const component = shallow(<Nav {...props} />)

  return {
    props,
    component
  }
}

describe('Nav component', () => {

  const { component } = setup()

  it('should be correctly rendered', () => {
    expect(component.length).toBe(1)
  })

  it('should render an appbar class element', () => {
    expect(component.find('.appbar').length).toBe(1)
  })

  describe('Nav component for guest user', () => {
    
    it('should not render a button with class btnLogout when there is no user', () => {
      expect(component.find('.btnLogout').length).toBe(0)
    })

  })

  describe('Nav component for auth user', () => {

    const props = {
      user: {
        userId: userLoggedIn.user_id,
        accessType: userLoggedIn.access_type
      }
    }
    const componentWithUser = shallow(<Nav {...props} />)

    it('should render a button with class btnLogout when there is an auth user', () => {
      expect(componentWithUser.find('.btnLogout').length).toBe(1)
    })
  
    it('should render a button with the text Log out when there is an auth user', () => {
      const props = {
        user: {
          userId: userLoggedIn.user_id,
          accessType: userLoggedIn.access_type
        }
      }
      const componentWithUser = shallow(<Nav {...props} />)
      expect(componentWithUser.find('.btnLogout').props().children).toBe('Log out')
    })

  })

})