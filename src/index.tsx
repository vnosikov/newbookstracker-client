import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import NewApp from './NewApp'
import client from './apollo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NewApp />
    </ApolloProvider>
  </React.StrictMode>,
)
