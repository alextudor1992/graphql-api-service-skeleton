import { ApolloServer } from 'apollo-server'
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway'
import { GraphQLService } from 'apollo-server-core/src/types'
import { onHealthCheck } from '@utils/serviceHealth'

const createGateway = () =>
  new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [],
    }),
  }) as GraphQLService

export const createApolloGateway = () =>
  new ApolloServer({
    gateway: createGateway(),
    onHealthCheck,
    subscriptions: false,
  })
