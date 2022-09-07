import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeaderPlayer from "../components/headerplayer";

const BlogPostTemplate = ({
  data: { previous, next, site, contentfulBlogPost: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.date}</p>
        </header>
        <HeaderPlayer videoId="PypuvBXazds" />
        <section
          dangerouslySetInnerHTML={{ __html: post.description?.raw }}
          itemProp="articleBody"
        />
        <HeaderPlayer videoId="JwMp4F4w4gI" />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
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
      </nav>
    </Layout>
  );
};

export const Head = ({ data: { contentfulBlogPost: post } }) => {
  return <Seo title={post.title} description={post.description?.raw} />;
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(id: { eq: $id }) {
      id
      date(formatString: "MMMM DD, YYYY")
      title
      slug
      youtubeUrl
      description {
        raw
      }
    }
    previous: contentfulBlogPost(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: contentfulBlogPost(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`;
