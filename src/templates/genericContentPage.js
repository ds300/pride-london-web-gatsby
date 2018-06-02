import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { Column, Row, Container } from '../components/grid'

import ImageBanner from '../components/imageBanner'

const PageWrapper = styled(Container)`
  position: relative;
  background-color: white;
`

const Content = styled(Column)`
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
        <ImageBanner
          titleText={data.title}
          subtitleText={data.subtitle}
          imageSrc={
            data.bannerImage && responsiveBannerUrl(data.bannerImage.file.url)
          }
          altText=""
          color={theme.colors.bondiBlue}
        />
        <Row>
          <Content width={[1, 1, 0.8]}>
            <ReactMarkdown source={data.content.content} />
          </Content>
        </Row>
        <Helmet title={data.title} />
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
