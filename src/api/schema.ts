import { buildSchema, buildTypeDefsAndResolvers } from 'type-graphql'
import { resolvers } from './resolvers'
import { Container } from 'typedi'

export const schema = await buildSchema({
  resolvers,
  container: Container,
})

export const typeDefsAndResolvers = await buildTypeDefsAndResolvers({
  resolvers,
  container: Container,
});
