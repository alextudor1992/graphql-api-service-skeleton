import { NonEmptyArray } from 'type-graphql'
import { ExampleResolver } from './ExampleResolver'

export const resolvers: NonEmptyArray<Function> = [ExampleResolver]
