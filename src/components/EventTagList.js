import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import hash from 'string-hash'

const hotPink = css`
  background-color: hsl(339, 87%, 55%);
  color: white;
`

const blueish = css`
  background-color: hsl(228, 57%, 58%);
  color: white;
`

const yellow = css`
  background-color: hsl(46, 100%, 68%);
  color: black;
`

// we want consistent colors for tags we might not have seen
const tagStyles = [hotPink, blueish, yellow]

const knownValueStyles = {
  Nightlife: yellow,
  Music: blueish,
  'Plays & Theatre': hotPink,
}

const selectTagStyle = value =>
  knownValueStyles[value] || tagStyles[hash(value) % tagStyles.length]

const EventTagListItem = styled.li`
  ${({ tagStyle }) => tagStyle};
  display: inline-block;
  border-radius: 4px;
  padding: 0px 6px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  margin-right: 10px;
`

const EventTagUl = styled.ul`
  margin: 0;
  list-style-type: none;
`

const EventTagList = ({ values }) => (
  <EventTagUl>
    {values.map(value => (
      <EventTagListItem tagStyle={selectTagStyle(value)} key={value}>
        {value}
      </EventTagListItem>
    ))}
  </EventTagUl>
)

EventTagList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default EventTagList
