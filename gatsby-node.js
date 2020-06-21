const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'type',
      value: node.frontmatter.type,
    });

    createNodeField({
      node,
      name: 'title',
      value: node.frontmatter.title,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
                type
                title
              }
            }
          }
        }
      }
    `)
      .then((result) => {
        //TODO factor this out
        posts = result.data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.fields.type === 'post';
        });

        const projects = result.data.allMarkdownRemark.edges.filter(
          ({ node }) => {
            return node.fields.type === 'project';
          },
        );

        posts.forEach(({ node }, index) => {
          const next = index === 0 ? false : posts[index - 1].node;
          const prev =
            index === posts.length - 1 ? false : posts[index + 1].node;

          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
              slug: node.fields.slug,
              prev,
              next,
            },
          });
        });

        projects.forEach(({ node }, index) => {
          const next = index === 0 ? false : projects[index - 1].node;
          const prev =
            index === projects.length - 1 ? false : projects[index + 1].node;

          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/portfolio-post.js'),
            context: {
              slug: node.fields.slug,
              prev,
              next,
            },
          });
        });
        resolve();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
