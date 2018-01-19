import React from 'react';
import Row from '../components/row';
import Column from '../components/column';
import Text, { types as textTypes } from '../components/text';

/**
 * Function: ProjectTemplate
 * Description:
 */
export default function ProjectTemplate({ data }) {
  const { project } = data;

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

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
