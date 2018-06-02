import React from 'react'
import { shallow, mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { Consumer } from '../../../components/appContext'
import { EventsYouMayLike } from '../eventsYouMayLike'
import EventListingCard from '../eventListingCard'
import theme from '../../../theme/theme'

beforeEach(() => {
  jest.resetModules()
})

jest.mock('../../../components/appContext', () => ({
  Consumer: props =>
    props.children({
      events: [
        {
          node: {
            id: '123',
            startTime: '2035-06-02T13:30+01:00',
            eventsListPicture: {
              file: {
                url: '123123',
              },
            },
          },
        },
        {
          node: {
            id: '234',
            startTime: '2009-06-02T13:30+01:00',
            eventsListPicture: {
              file: {
                url: '123123',
              },
            },
          },
        },
        {
          node: {
            id: '1234',
            startTime: '2035-06-02T13:30+01:00',
            eventsListPicture: {
              file: {
                url: '123123',
              },
            },
          },
        },
      ],
    }),
}))

const shallowWithTheme = tree => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()
  return shallow(tree, { context })
}

describe('The Events You May Like component', () => {
  const mockProps = {
    eventId: '1234',
  }

  it('should matchsnapshot', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('should render Event Listing Card if a correct event is passed from the state', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.dive().find(EventListingCard).length).toBe(1)
  })

  xit('should not render an item that started in the past', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.dive().find(EventListingCard).length).toBe(0)
  })

  xit('should not render more than 3 items', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.find(EventListingCard).length).toBe(3)
  })

  xit('should render an item that has the same id as the current event', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.find(EventListingCard).length).toBe(0)
  })
})
