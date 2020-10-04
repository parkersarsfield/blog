import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {
  IoLogoGithub,
  IoLogoHackernews,
  IoLogoLinkedin,
  IoLogoRss,
} from 'react-icons/io';

import Timeline from '../components/AboutGrid/Timeline';
import Layout from '../components/layout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1 className="mb-4 text-3xl text-center font-light tracking-wide">
          About Me
        </h1>
        <div className="flex flex-row flex-wrap rounded items-center self-center justify-center max-w-4xl mx-auto shadow-md border-2 border-gray-400 p-4 bg-gray-100">
          <div className="w-full flex">
            <span className="rounded-full w-3 h-3 bg-red-500" />
            <span className="rounded-full w-3 h-3 bg-yellow-500 mx-2" />
            <span className="rounded-full w-3 h-3 bg-green-500" />
          </div>
          <div className="m-8">
            <Img
              className="rounded-full"
              fixed={this.props.data.headshot.fixed}
            />
            <div className="flex flex-row w-full justify-center">
              <a href="/rss.xml">
                <IoLogoRss className="text-gray-800 mx-1 w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/parker-sarsfield-bb978b118/">
                <IoLogoLinkedin className="text-gray-800 mx-1 w-6 h-6" />
              </a>
              <a href="https://news.ycombinator.com/user?id=psars">
                <IoLogoHackernews className="text-gray-800 mx-1 w-6 h-6" />
              </a>
              <a href="https://github.com/parkersarsfield">
                <IoLogoGithub className="text-gray-800 mx-1 w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="max-w-lg">
            <p className="py-2">
              Hello! I&apos;m Parker Sarsfield. I am a software engineer living
              in the D.C. area. I love building software from the ground up and
              learning new technologies. I currently write code for Capital One.
            </p>
            <p className="py-2">
              When I&apos;m not writing code, you can find me rock climing,
              playing guitar, or exploring D.C.
            </p>
          </div>
        </div>
        <Timeline
          images={{
            faithlife: this.props.data.faithlife.fixed,
            vandy: this.props.data.vandy.fixed,
            capitalone: this.props.data.capitalone.fixed,
            dcIcon: this.props.data.dcIcon.fixed,
          }}
        />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query IndexQuery {
    sssImage: imageSharp(fluid: { originalName: { regex: "/nyc.jpg/" } }) {
      sizes(maxWidth: 350) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    faithlife: imageSharp(
      fluid: { originalName: { regex: "/faithlife.png/" } }
    ) {
      fixed(width: 50) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
    vandy: imageSharp(fluid: { originalName: { regex: "/vandy.png/" } }) {
      fixed(width: 50) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
    capitalone: imageSharp(fluid: { originalName: { regex: "/cap1.png/" } }) {
      fixed(width: 50) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
    dcIcon: imageSharp(fluid: { originalName: { regex: "/dc-icon.png/" } }) {
      fixed(width: 50) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
    logo: imageSharp(fluid: { originalName: { regex: "/logo.png/" } }) {
      fixed(width: 50) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
    headshot: imageSharp(fluid: { originalName: { regex: "/headshot.jpg/" } }) {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
    lastImage: imageSharp(fluid: { originalName: { regex: "/hiking.jpg/" } }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
