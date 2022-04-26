import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core'
import { schema } from './schema'
import { RUNTIME } from '@type'
import config from '@config'
import { onHealthCheck } from '@utils/serviceHealth'

const isProdEnv = config.runtime === RUNTIME.prod

export const createApolloServer = () =>
  new ApolloServer({
    schema,
    tracing: !isProdEnv,
    onHealthCheck,
    introspection: !isProdEnv,
    subscriptions: false,
    playground: {
      endpoint: '/library/graphql',
    },
    plugins: [isProdEnv ? ApolloServerPluginInlineTraceDisabled : undefined],
  })
