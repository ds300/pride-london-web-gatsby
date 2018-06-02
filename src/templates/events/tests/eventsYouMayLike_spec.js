import React from 'react'
import { shallow } from 'enzyme'
// import EventsYouMayLike from '../eventsYouMayLike'

// jest.mock('../../../components/appContext', () => ({
//   Provider: () => Component => props => <Component {...props} />
// }))

//
// jest.mock('../../../components/appContext', () => ({
//   Consumer: () => Component => props => {
//     console.log(props, 'rico')
//     return (
//       <Component
//         value={{ events: { 1: {}, 2: {} } }}
//       />
//     )
//   },
// }))

const getContext = (context = { events: ['en', 'fr', 'es'] }) => {
  jest.doMock('../../../components/appContext', () => ({
    AppContext: {
      Consumer: props => props.children(context),
    },
  }))

  return require('../eventsYouMayLike').EventsYouMayLike
}

beforeEach(() => {
  jest.resetModules()
})

describe('The Events You May Like component', () => {
  const EventsYouMayLike = getContext()
  const mockProps = {
    eventId: '1234',
  }

  it('should matchsnapshot', () => {
    const wrapper = shallow(<EventsYouMayLike {...mockProps} />)

    console.log(wrapper.props().children())

    expect(wrapper).toMatchSnapshot()
  })
})
