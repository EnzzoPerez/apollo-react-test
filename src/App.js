import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from "./components/courses";
import './App.css';

const client = new ApolloClient({uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand">React and GraphQL - Sample Application</a>
          </nav>
          <div>
            <Courses />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
