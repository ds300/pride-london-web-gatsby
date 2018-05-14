import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const fontStyles = `
  font-size: 0.8em;
  letter-spacing: 0.4px;
  padding: 8px 12px
`

const ShowMore = styled.p`
  border-bottom: 2px solid ${props => props.theme.colors.eucalyptusGreen};
  color: ${props => props.theme.colors.indigo};
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 300;
  letter-spacing: 0.4px;
  margin: 15px auto;
  user-select: none;
  width: fit-content;
`

const ShowMoreWrapper = styled.div`
  text-align: center;
  width: 100%;
`

const Table = styled.table`
  text-align: left;
  width: 100%;
`

const TableHeader = styled.th`
  ${fontStyles}
  background: ${props => props.theme.colors.mediumGrey};
  color: ${props => props.theme.colors.indigo};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 300;
`

const TableItem = styled.td`
  ${fontStyles};
  border-bottom: 1px solid ${props => props.theme.colors.mediumGrey};
`

const TableItemTime = styled(TableItem)`
  font-weight: bold;
  width: 60px;
`

const EventScheduleItem = props => (
  <div>
    <Table>
      <tbody>
        <tr>
          <TableHeader colSpan="2">{props.title}</TableHeader>
        </tr>
        {props.data.map(item => (
          <tr key={item.id}>
            <TableItemTime>{item.startTime}</TableItemTime>
            <TableItem>{item.title}</TableItem>
          </tr>
        ))}
      </tbody>
    </Table>
    <ShowMoreWrapper>
      <ShowMore>Show more</ShowMore>
    </ShowMoreWrapper>
  </div>
)

EventScheduleItem.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
}

export default EventScheduleItem
