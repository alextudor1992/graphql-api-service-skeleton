import { Arg, Args, FieldResolver, Query, Resolver, ResolverInterface, Root } from 'type-graphql'
import { Example } from '../types'
import { Service } from 'typedi'
import { PaginationArgs } from '@api/resolvers/Pagination'

@Service()
@Resolver(Example)
export class ExampleResolver extends PaginationArgs implements ResolverInterface<Example> {
  @Query((returns) => Example)
  async example(@Arg('exampleId') exampleId: string): Promise<Example> {
    return new Example(exampleId)
  }

  @Query((returns) => [Example])
  async examples(@Args() { skip, take }: PaginationArgs): Promise<Example[]> {
    return [
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
      new Example(),
    ].slice(skip, skip + take)
  }

  @FieldResolver()
  exampleId(@Root() example: Example): string {
    return example.exampleId
  }

  @FieldResolver()
  title(@Root() example: Example): string {
    console.log('Resolving field `title` for', example)
    return example.title
  }
}
