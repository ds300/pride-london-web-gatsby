import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { media } from '../../theme/media'
import {
  AccessibilityIcon,
  DateIcon,
  GenderIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TicketIcon,
} from '../../components/icons'
import Button from '../../components/button'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.indigo};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  color: white;
  ${media.desktop`
    position: absolute;
    width: 400px;
    right: 90px;
    top: 270px;
    padding: 40px;
 `};
`

const Row = styled.div`
  display: flex;
  margin-bottom: 14px;
  :last-child {
    margin-bottom: 0;
  }
`

const IconWrapper = styled.div`
  flex: 0 0 26px;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  padding-top: 2px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: white;
  margin-bottom: 4px;
`

const Detail = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

const Item = ({ title, icon, detail }) => (
  <Row>
    <IconWrapper>{icon}</IconWrapper>
    <div>
      {title && <Title>{title}</Title>}
      {detail && <Detail>{detail}</Detail>}
    </div>
  </Row>
)

const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.colors.eucalyptusGreen};
  width: 100%;
  margin: 16px 0px 32px 0px;
`

const VSpace = styled.div`
  margin-top: 15px;
`

// I chose formats based on
// https://www.gov.uk/service-manual/design/dates
const dateFormat = 'D MMMM YYYY'

const formatDayRange = (startTime, endTime) => {
  if (startTime.isSame('day', endTime)) {
    return startTime.format(dateFormat)
  }

  return `${startTime.format(dateFormat)} to ${endTime.format(dateFormat)}`
}

const timeFormat = 'h:mma'

const formatTimeRange = (startTime, endTime) =>
  `${startTime.format(timeFormat)} to ${endTime.format(timeFormat)}`

const formatPrice = (eventPriceLow, eventPriceHigh) => {
  if (eventPriceLow === 0 && eventPriceHigh === 0) {
    return 'Free'
  }
  return `From £${eventPriceLow}`
}

const formatAddress = (addressLine1, addressLine2, city, postcode) => {
  return [
    addressLine1,
    addressLine2,
    [city, postcode].filter(Boolean).join(' '),
  ]
    .filter(Boolean)
    .join(', ')
}

const Link = styled.a`
  color: white;
  text-decoration: underline;
  :hover {
    text-decoration: none;
  }
`

const VENUE_DETAILS = {
  genderNeutralToilets: 'Gender neutral toilets',
  outdoors: 'Outdoors',
  indoors: 'Indoors',
}

export default function EventInfoCard({
  data: {
    locationName,
    addressLine1,
    addressLine2,
    city,
    postcode,
    startTime,
    endTime,
    eventPriceLow,
    eventPriceHigh,
    email,
    phone,
    venueDetails,
    ticketingUrl,
    accessibilityOptions,
  },
}) {
  return (
    <Wrapper>
      {startTime &&
        endTime && (
          <Item
            icon={<DateIcon />}
            title={formatDayRange(moment(startTime), moment(endTime))}
            detail={formatTimeRange(moment(startTime), moment(endTime))}
          />
        )}
      <Item
        icon={<TicketIcon />}
        title={formatPrice(eventPriceLow, eventPriceHigh)}
      />
      <Item
        icon={<MapPinIcon />}
        title={locationName}
        detail={formatAddress(addressLine1, addressLine2, city, postcode)}
      />
      {accessibilityOptions &&
        accessibilityOptions.length && (
          <Item
            icon={<AccessibilityIcon />}
            title="Accessibility"
            detail={accessibilityOptions.join(', ') + '.'}
          />
        )}
      {venueDetails &&
        venueDetails.indexOf(VENUE_DETAILS.genderNeutralToilets) > -1 && (
          <Item icon={<GenderIcon />} detail="Gender neutral toilets" />
        )}

      {(email || phone || ticketingUrl) && <Hr />}
      {email && (
        <Item
          icon={<MailIcon role="presentation" />}
          detail={
            <Link href={`mailto:${email}`} aria-label="email the venue">
              {email}
            </Link>
          }
        />
      )}
      {phone && (
        <Item
          icon={<PhoneIcon />}
          detail={
            <Link href={`tel:${phone}`} aria-label="call the venue">
              {phone}
            </Link>
          }
        />
      )}
      {(phone || email) && ticketingUrl && <VSpace />}
      {ticketingUrl && (
        <Button primary link to={ticketingUrl}>
          Get tickets
        </Button>
      )}
    </Wrapper>
  )
}

EventInfoCard.propTypes = {
  data: PropTypes.shape({
    locationName: PropTypes.string.isRequired,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    city: PropTypes.string,
    postcode: PropTypes.string,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    eventPriceLow: PropTypes.number,
    eventPriceHigh: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.string,
    ticketingUrl: PropTypes.string,
    accessibilityOptions: PropTypes.arrayOf(PropTypes.string),
    venueDetails: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export const query = graphql`
  fragment eventInfoCardQuery on ContentfulEvent {
    locationName
    addressLine1
    addressLine2
    city
    postcode
    startTime
    endTime
    eventPriceLow
    eventPriceHigh
    email
    phone
    ticketingUrl
    accessibilityOptions
    venueDetails
  }
`
