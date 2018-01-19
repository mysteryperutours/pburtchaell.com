import React from 'react';
import Row from '../components/row';
import Column from '../components/column';
import Text, { types as textTypes } from '../components/text';

/**
 * Function: PostTemplate
 * Description: This function returns a template for posts.
 */
export default function PostTemplate({ data }) {
  const { post } = data;

  return (
    <Row>
      <Column
        largeSize={8}
        smallSize={8}
      >
        <Text type={textTypes.HEADER_2}>
          {post.frontmatter.title}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
      </Column>
    </Row>
  );
};

export const postQuery = graphql`
  query PostByPath($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
