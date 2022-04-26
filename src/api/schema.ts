import { buildSchema, buildTypeDefsAndResolvers } from 'type-graphql'
import { resolvers } from './resolvers'
import { Container } from 'typedi'
import config from '@config'
import { RUNTIME } from '@type'

const isProdEnv = config.runtime === RUNTIME.prod

export const schema = await buildSchema({
  resolvers,
  container: Container,
  emitSchemaFile: !isProdEnv,
})

export const typeDefsAndResolvers = await buildTypeDefsAndResolvers({
  resolvers,
  container: Container,
  emitSchemaFile: !isProdEnv,
})
