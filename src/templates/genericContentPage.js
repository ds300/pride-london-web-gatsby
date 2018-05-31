import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import { media } from '../theme/media'

const horizontalPagePadding = css`
  padding-left: 20px;
  padding-right: 20px;
  ${media.tablet`
    padding-left: 50px;
    padding-right: 50px;
  `};
  ${media.desktop`
    padding-left: 90px;
    padding-right: 90px;
  `};
`

const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints[3]};
  background-color: white;
`

const Content = styled.div`
  ${horizontalPagePadding};
  padding-top: 30px;
  padding-bottom: 50px;
  p {
    font-size: 1rem;
    line-height: 1.5;
    ${media.desktop`
      font-size: 1.125rem;
    `};
  }
  hr {
    margin: 20px 0px;
    border: none;
    border-top: 1px solid #e0e0e0;
  }
  h2 {
    margin-top: 50px;
    font-size: 1.25rem;
    font-weight: 900;
  }
  h3 {
    margin-top: 30px;
    font-size: 1.125rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1em;
    margin-bottom: 5px;
  }
  img {
    margin-left: -20px;
    margin-right: -20px;
    width: 100vw;
    max-width: 100vw;
  }
  ${media.tablet`
    padding-top: 40px;
    padding-bottom: 60px;
    img {
      margin-left: -50px;
      margin-right: -50px;
    }
  `};
  ${media.desktop`
    padding-top: 60px;
    padding-bottom: 90px;
    > div {
      max-width: 830px;
      img {
        margin: 0;
        width: auto;
        max-width: 830px;
      }
    }
  `};
  display: flex;
  flex-flow: column;
`

const Hero = styled.div`
  ${horizontalPagePadding};
  background-color: ${props => props.theme.colors.bondiBlue};
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 240px;
  ${media.desktop`
    height: 480px;
  `};
`

const Title = styled.h1`
  margin: 0;
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.colors.indigo};
  font-size: 1.75rem;
  padding: 0px 5px;
  ${media.desktop`
    font-size: 3.5rem;
    padding: 0px 10px;
    max-width: 740px;
  `};
`

const Subtitle = styled.h2`
  margin: 0;
  display: inline-block;
  color: white;
  background-color: ${props => props.theme.colors.indigo};
  font-size: 1rem;
  padding: 5px;
  max-width: 255px;
  ${media.desktop`
    font-size: 1.5rem;
    padding: 10px;
    max-width: 420px;
  `};
`

const responsiveBannerUrl = url => {
  const width = Math.min(window.innerWidth, 1440)

  return `${url}?w=${width}`
}

// eslint-disable-next-line react/prefer-stateless-function
export default class GenericContentPage extends Component {
  render() {
    const data = this.props.data.contentfulGenericContentPage

    return (
      <PageWrapper>
        <Helmet title={data.title} />
        <Hero
          style={
            data.bannerImage
              ? {
                  backgroundImage: `url(${responsiveBannerUrl(
                    data.bannerImage.file.url
                  )})`,
                }
              : {}
          }
        >
          {/* need extra div wrapper to let titles shrink to fit their content */}
          <div>
            <Title>{data.title}</Title>
          </div>
          {data.subtitle && (
            <div>
              <Subtitle>{data.subtitle}</Subtitle>
            </div>
          )}
        </Hero>
        <Content>
          <ReactMarkdown source={data.content.content} />
        </Content>
      </PageWrapper>
    )
  }
}

GenericContentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query genericContentPageQuery($id: String!) {
    contentfulGenericContentPage(id: { eq: $id }) {
      id
      title
      subtitle
      bannerImage {
        id
        file {
          url
        }
      }
      content {
        content
      }
    }
  }
`
