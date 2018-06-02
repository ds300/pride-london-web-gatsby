import React from 'react'
import { mount } from 'enzyme'
import EventsYouMayLike from '../eventsYouMayLike'
import EventListingCard from '../eventListingCard'

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
          },
        },
      ],
    }),
}))

describe('The Events You May Like component', () => {
  const mockProps = {
    eventId: '1234',
  }

  it('should matchsnapshot', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render Event Listing Card if one event is passed from the state', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.find(EventListingCard).length).toBe(1)
  })

  it('should not render an item that started in the past', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.find(EventListingCard).length).toBe(0)
  })

  it('should not render more than 3 items', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.find(EventListingCard).length).toBe(3)
  })

  it('should render an item that has the same id as the current event', () => {
    const wrapper = mount(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.find(EventListingCard).length).toBe(0)
  })
})
