import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import NewsletterForm from '../components/newsletter'
import * as featureFlags from '../featureFlags'
import { media } from '../theme/media'
import {
  EventTagList,
  EventSchedule,
  EventsYouMayLike,
  EventInfoCard,
  EventDirectionsSection,
} from '../components/events'

const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints[3]};
  background-color: white;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.indigo};
`

const HeroImageAndTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${media.desktop`
    flex-direction: column;
  `};
`

const ContentWrapper = styled.div`
  padding: 30px 20px;
  width: 100vw;
  ${media.tablet`
    padding: 30px 50px;
  `};
  ${media.desktop`
    padding: 0;
    margin-left: 90px;
    max-width: 45vw;
  `};
  ${media.desktopHD`
    max-width: 830px;
  `};
`

const TitleWrapper = ContentWrapper.extend`
  ${media.desktop`
    padding: 60px 0px 50px;
  `};
`

const HeroImage = styled.div`
  background-size: cover;
  background-image: url(${props => props.src});

  height: 240px;
  ${media.desktop`
    height: 480px;
  `};
`

const Section = styled.div`
  margin-bottom: 20px;
  ${media.desktop`
    margin-bottom: 60px;
  `};
`

// eslint-disable-next-line react/prefer-stateless-function
export default class Event extends Component {
  render() {
    const {
      id,
      individualEventPicture,
      eventDescription,
      name,
      performances,
      eventCategories,
    } = this.props.data.contentfulEvent

    return (
      <PageWrapper>
        <Helmet title={name} />
        <HeroImageAndTitle>
          <HeroImage
            src={individualEventPicture.file.url}
            role="presentation"
          />
          <TitleWrapper>
            <Title>{name}</Title>
            <EventTagList values={eventCategories} />
          </TitleWrapper>
        </HeroImageAndTitle>
        <EventInfoCard data={this.props.data.contentfulEvent} />
        <ContentWrapper>
          <Section>
            <ReactMarkdown source={eventDescription.eventDescription} />
          </Section>
          {featureFlags.SCHEDULE &&
            performances && (
              <Section>
                <EventSchedule schedule={performances} />
              </Section>
            )}
        </ContentWrapper>
        <EventDirectionsSection data={this.props.data.contentfulEvent} />
        {featureFlags.YOU_MAY_ALSO_LIKE && <EventsYouMayLike eventId={id} />}
        <NewsletterForm buttonText="Subscribe" />
      </PageWrapper>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

// prettier-ignore
export const eventPageQuery = graphql`
  query eventQuery($id: String!, $showSchedule: Boolean!) {
    contentfulEvent(id: { eq: $id }) {
      id
      name
      individualEventPicture {
        file {
          url
        }
        title
        description
      }
      eventCategories
      @include(if: $showSchedule)
      performances {
        ...eventScheduleFragment
      }
      eventDescription {
        eventDescription
      }
      ...eventDirectionsFragment
      ...eventInfoCardQuery
    }
  }
`
