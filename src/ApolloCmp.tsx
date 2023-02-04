import React, { FC } from 'react';
import { useQuery, gql } from "@apollo/client";
import QueryRenderer from './QueryRenderer';

const BOOKS = gql`
  query ExampleQuery {
    books {
      id
      title
      author {
        ru
      }
    }
  }
`;

const TestComp:FC = props => (
  <QueryRenderer
    query={BOOKS}
    render={data => <div>Hello Apollo, {JSON.stringify(data)}</div>} 
  />
);

export default TestComp;
