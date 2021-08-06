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
        <h1 className="mb-4 text-3xl font-light tracking-wide text-center">
          About Me
        </h1>
        <div className="flex flex-row flex-wrap items-center self-center justify-center max-w-4xl p-4 mx-auto bg-gray-100 border-2 border-gray-400 rounded shadow-md">
          <div className="flex w-full">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 mx-2 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="m-8">
            <Img
              className="rounded-full"
              fixed={this.props.data.headshot.fixed}
            />
            <div className="flex flex-row justify-center w-full">
              <a href="/rss.xml">
                <IoLogoRss className="w-6 h-6 mx-1 text-gray-800" />
              </a>
              <a href="https://www.linkedin.com/in/parker-sarsfield-bb978b118/">
                <IoLogoLinkedin className="w-6 h-6 mx-1 text-gray-800" />
              </a>
              <a href="https://news.ycombinator.com/user?id=psars">
                <IoLogoHackernews className="w-6 h-6 mx-1 text-gray-800" />
              </a>
              <a href="https://github.com/parkersarsfield">
                <IoLogoGithub className="w-6 h-6 mx-1 text-gray-800" />
              </a>
            </div>
          </div>
          <div className="max-w-lg">
            <p className="py-2">
              Hello! I&apos;m Parker. I am a software engineer, Vanderbilt Alumni, and overconfident home cook.
              I currently build software for Storyblocks.
            </p>
            <p className="py-2">
              I&apos;m passionate about build products that add value to people&apos;s lives.
              When I&apos;m not writing code, you can find me 
              playing guitar or exploring Washington, D.C.
            </p>
          </div>
        </div>
        <Timeline
          images={{
            faithlife: this.props.data.faithlife.fixed,
            vandy: this.props.data.vandy.fixed,
            capitalone: this.props.data.capitalone.fixed,
            storyblocks: this.props.data.storyblocks.fixed,
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
    storyblocks: imageSharp(fluid: { originalName: { regex: "/storyblocks.png/" } }) {
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
