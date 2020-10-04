import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import PrevNextNav from '../components/PrevNextNav';
import Layout from '../components/layout';

const PortfolioPost = ({ data, pageContext, location }) => {
  const projectHTML = data.markdownRemark.html;
  const project = data.markdownRemark.frontmatter;
  return (
    <Layout location={location}>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-light tracking-wide text-center mb-2">
          {project.title}
        </h1>
        <div className="font-light font-large text-center mb-8">
          {project.description}
        </div>
        <Img
          className="border-2 border-gray-500 rounded-lg"
          sizes={project.image.childImageSharp.sizes}
        />
        <div className="flex justify-around mt-2 mb-4">
          {project.link && (
            <a className="text-blue-700" href={project.link}>
              See Live
            </a>
          )}
          {project.source && (
            <a className="text-blue-700" href={project.source}>
              View Code
            </a>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectHTML }} />
        <PrevNextNav
          next={pageContext.next}
          prev={pageContext.prev}
          type="Project"
        />
      </div>
    </Layout>
  );
};
PortfolioPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};
export default PortfolioPost;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PortfolioPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        description
        tech
        source
        image {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
