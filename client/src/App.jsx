import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

// Create an HTTP link that connects to your GraphQL server
const httpLink = createHttpLink({
  uri: "/graphql", // Adjust if your GraphQL server URI is different or not served from the same origin
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // Return the headers to the context so httpLink can read them, adding the Authorization header if a token exists
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
