import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { EventTagList, EventSchedule } from './events'
import Helmet from 'react-helmet'
import { media } from '../theme/media'

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
  ${media.desktop`
    padding: 0;
    max-width: 830px;
    margin-left: 80px;
  `};
`

const TitleWrapper = ContentWrapper.extend`
  ${media.desktop`
    padding: 60px 0px;
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

const InfoPlaceholder = styled.div`
  background-color: ${props => props.theme.colors.indigo};
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${media.desktop`
    position: absolute;
    width: 400px;
    height: 565px;
    right: 90px;
    top: 270px;
 `};
`

export default class Event extends Component {
  render() {
    const {
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
          <HeroImage src={individualEventPicture.file.url} />
          <TitleWrapper>
            <Title>{name}</Title>
            <EventTagList values={eventCategories} />
          </TitleWrapper>
        </HeroImageAndTitle>
        <InfoPlaceholder>put things inside me plz</InfoPlaceholder>
        <ContentWrapper>
          <ReactMarkdown source={eventDescription.eventDescription} />
          <EventSchedule schedule={performances} />
        </ContentWrapper>
      </PageWrapper>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

export const eventPageQuery = graphql`
  query eventQuery($id: String!) {
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
      performances {
        id
        ...eventScheduleFragment
      }
      eventDescription {
        eventDescription
      }
    }
  }
`
