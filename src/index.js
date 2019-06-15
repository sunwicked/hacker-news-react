import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, concat } from 'apollo-link';


const httpLink = createHttpLink({
	uri: 'https://api.producthunt.com/v2/api/graphql'
  })
  const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext({
	  headers: {
		authorization: "Bearer 1ed48ae30d313c946c8d3afd7968108beaf9bc7ad75c59f8dca9ac1d181754b8",
	  }
	});
  
	return forward(operation);
  })

  const client = new ApolloClient({
	link: concat(authMiddleware, httpLink),
	cache: new InMemoryCache(),
  })


  ReactDOM.render(
	<ApolloProvider client={client}>
	  <App />
	</ApolloProvider>,
	document.getElementById('root')
  )
  serviceWorker.unregister();
