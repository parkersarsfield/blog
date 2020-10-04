---
title: 'Why I Switched to Gatsby'
date: '2018-02-15'
type: 'post'
tags: ['tech']
---

Recently, I rebuilt my website as a static site using Gatsby. Previously, my website was running on a WordPress server that I had hosted on a slow hosting site. I loaded on a custom theme and spent a long time going through the settings, tweaking things, and making sure my site looked like I wanted. However, I made the switch to Gatsby.js and I'm loving it. I have been rewriting my website in React, so I can have it function just the way I like. The main reasons I switched include speed, cost, and control.

## Speed

The biggest reason for switching for me was the huge speed increase. With my WordPress site, the initial load took about 4-5 seconds. Wordpress servers aren't built for speed, so I was able to cut down on this load time massively by switching to a static site.

With generating a static site based on my Markdown and image files, a static HTML page is sent for blazing fast load times. Building static pages cuts down my load time to where it feels almost instant.

## Cost

After switching to Gatsby, my site is built as a collection of static pages that only need to be served from a static CDN, or content delivery network. When a user requests my site, they only need to make a request to download the HTML. All I need to deploy my site is something like an AWS S3 bucket, Netifly, or Surge.

I use [Netlify](https://netlify.com) due to its simplicity and awesome features. I can include things like custom form handling, pull request previews, and custom domains with HTTPS all in the free tier. This means that the total annual cost of my website is a whopping **\$12/year**. The only thing I pay for is my domain name.

## Control

Did I mention that now my site is built with React? I have complete control over the look and feel of my site. Using WordPress gives the creator a lot of options of how their site should look and behave, but ultimately, the user has to use the WordPress system.

With Gatsby, I get to write out the structure, style, and functionality of each page using React, which makes building a breeze. This also provides a huge opportunity to sharpen my skills with React and learn a lot more about GraphQL.

The back end of Gatsby is built in GraphQL, and information is loaded in the form of GraphQL queries. Here is the query for my blog page.

```javascript
export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
```

Overall the switch to Gatsby was a great decision. I have a faster, more customizable site that I pay a lot less for. Win-win-win. Let me know your experiences and if you also made the switch.

If you're still confused about how a static site can benefit you, check out [this post I wrote.](/blog/)
