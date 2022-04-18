import { Directive, Field, ID, ObjectType } from 'type-graphql'
import { v4 } from 'uuid'

@Directive('@extends')
@Directive('@key(fields: "exampleId")')
@ObjectType()
export class Example {
  @Field((type) => ID)
  @Directive('@external')
  exampleId: string

  @Field(() => String, { nullable: true })
  title?: string

  constructor(example?: string) {
    this.exampleId = example ?? v4()
    this.title = 'simple title | ' + this.exampleId
  }
}
