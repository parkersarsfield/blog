---
title: "Why I Switched to GatsbyJS"
date: "2018-02-15"
tags: ['tech']
---

Recently, I rebuilt my website using Gatsby. Before, my website was running on a WordPress server that I had hosted on HostGator. I loaded on a custom theme and spent a long time going through the settings, tweaking things, and making sure my site looked like I wanted. However, I made the switch to gatsby and I'm **loving it**. I have been rewriting my website in React, so I can have it function just the way I like. The main reasons I switched include speed, cost, and control. 

### Speed
The biggest reason for switching for me was the huge speed increase. With my WordPress site, the initial load took about 4-5 seconds. This is due to me being cheap and buying the lowest tier plan from HostGator. But even with a very small amount of traffic, my site ws still very slow. 

But with Gatsby generating a static site based on my content, a static HTML page is sent for blazing fast load times. Building static pages cuts load time to where it feels almost instant. 

### Cost
After switching to Gatsby, my site is built as a collection of static pages that only need to be served from a static server. All I need to deploy my site is something like an AWS S3 bucket, Netifly, or Surge.

I use [Surge](https://surge.sh) due to its simplicity. I can deploy straight from the command line, integrate it into the build process, and add a custom domain on the free tier. This reduces the **entire cost** of my website to 12 dollars a year for my domain. 

Adding the ``bd`` script to my ``package.json`` here allows my to build and deploy my site with one command.

```javascript
"scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build",
    "bd": "gatsby build && surge ./public", // add this
    "serve": "gatsby serve"
  },
```

### Control
Did I mention that now my site is built with React? I have complete control over the look and feel of my site. Using WordPress gives the creator a lot of options of how their site should look and behave, but ultimately, the user has to use the WordPress system.

With Gatsby, I get to write out the structure, style, and functionality of each page using React, which makes building a breeze. This also provides a huge opportunity to sharpen my skills with React and learn a lot more about GraphQL. 

The back end of Gatsby is built in GraphQL, and information is loaded in the form of GraphQL queries. Here is the query for my blog landing page. 

```javascript
export const query = graphql`
query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMM, YYYY")
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
}
`
```

Overall the switch to Gatsby was a great decision. I have a faster, more customizable site that I pay a lot less for. Win-win-win. Let me know your experiences and if you also made the switch.
