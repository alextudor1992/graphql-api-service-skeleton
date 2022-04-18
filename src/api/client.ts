import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client/core'
import { SentryLink } from 'apollo-link-sentry'
import config from '@config'
import fetch from 'isomorphic-unfetch'
import '@utils/logging'

const links = ApolloLink.from([
  new SentryLink({
    attachBreadcrumbs: {
      includeQuery: true,
      includeError: true,
      includeVariables: true,
    },
  }),
  new HttpLink({
    uri: config.service.url,
    credentials: 'include',
    fetch,
  }),
])

export const apolloClient = Object.freeze(
  new ApolloClient({
    ssrMode: true,
    link: links,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  }),
);
