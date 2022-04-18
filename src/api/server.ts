import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core'
import { schema } from './schema'
import { RUNTIME } from '@type'
import config from '@config'
import { onHealthCheck } from '@utils/serviceHealth'

export const createApolloServer = () =>
  new ApolloServer({
    schema,
    tracing: config.runtime !== RUNTIME.prod,
    onHealthCheck,
    subscriptions: false,
    playground: {
      endpoint: '/library/graphql',
    },
    plugins: [config.runtime !== RUNTIME.prod ? ApolloServerPluginInlineTraceDisabled : undefined],
  })
