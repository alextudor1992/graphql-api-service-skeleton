import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class PaginationArgs {
  @Field((type) => Int, { defaultValue: 0 })
  skip: number

  @Field((type) => Int, { defaultValue: 30 })
  take: number
}
