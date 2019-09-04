import React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import AirportList from "./AirportList"
import AirportDetails from "./AirportDetails"
// import { Router, Route, hashHistory, IndexRoute} from 'react-router'


import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Router history={hashHistory}> 
        <Route path='/' component={AirportList}>
          <IndexRoute component={AirportList} />
          <Route path='airports/:id' component={AirportDetails} />
        </Route>
      </Router> */}
      <AirportList />
    </ApolloProvider>
  )
};


export default App;
