import { ApolloServer } from 'apollo-server'
import { GraphQLResolverMap } from 'apollo-graphql/src/schema/resolverMap'
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core'
import { buildSubgraphSchema } from '@apollo/federation'
import { typeDefsAndResolvers } from './schema'
import { RUNTIME } from '@type'
import gql from 'graphql-tag'
import config from '@config'
import { onHealthCheck } from '@utils/serviceHealth'

const schema = buildSubgraphSchema([
  {
    typeDefs: gql(typeDefsAndResolvers.typeDefs),
    resolvers: typeDefsAndResolvers.resolvers as GraphQLResolverMap,
  },
])

export const createApolloSubgraph = () =>
  new ApolloServer({
    schema,
    tracing: config.runtime !== RUNTIME.prod,
    onHealthCheck,
    subscriptions: false,
    playground: {
      endpoint: '/library/graphql',
    },
    plugins: [ApolloServerPluginInlineTraceDisabled()],
  })
