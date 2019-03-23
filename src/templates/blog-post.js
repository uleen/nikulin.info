import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={"cat"} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.date}
        </p>
        <div>
          1 The perfect mother lets the cat sleep on her head. The children
          laugh. Where is she? She is not carefully ironing the starched ruffles
          of a Sunday dress. What does she say? She does not speak. Her head is
          under the cat and like the cat, she sleeps.        2 But her children
          are in a marsh! Bogged, they have gone wild. Yet, no one should worry.
          See, they are there, in a sunny kitchen. They drink cups of soup and
          wipe their faces with yellow napkins. What does it matter if they are
          hatching plots, if in their waking dreams the poor cat is trapped its
          hair standing on end?        3 Where shall we go? We ask the perfect
          mother. What do you want of us? She is no where to be found. Not in
          the cookie jar we have broken to bits not under the shiny kitchen
          floor not on our lips. Here we are transfixed, mourning the perfect
          mother, and she is caught in the trapped cat of her children’s dreams.
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: contentfulPost(id: { eq: $id }) {
      title
      description {
        description
      }
    }
  }
`;
