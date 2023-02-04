import { DocumentNode, useQuery } from '@apollo/client';
import React, { FC, ReactElement } from 'react';

const QueryRenderer:FC<QueryRendererProps> = ({ query, render }) => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return render(data);
};

type QueryRendererProps = {
  query: DocumentNode
  render: (data: any) => ReactElement,
}

export default QueryRenderer;
