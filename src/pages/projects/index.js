import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const ProjectCard = ({ node }) => (
  <div class="flex flex-col md:flex-row mb-8" key={node.id}>
    <div className="w-48 border-gray-500 border-2 rounded-lg">
      <Img
        className="rounded-lg"
        sizes={node.frontmatter.image.childImageSharp.sizes}
      />
    </div>
    <div className="flex flex-col justify-center mx-4">
      <Link className="text-blue-700" to={node.fields.slug}>
        {node.frontmatter.title}
      </Link>
      <p>{node.frontmatter.description} </p>
      <p>Skills: {node.frontmatter.tech.join(', ')}</p>
    </div>
  </div>
);

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-light tracking-wide text-center mb-4">
          Projects
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectCard key={node.id} node={node} />
        ))}
      </div>
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectPage;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            description
            tech
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
