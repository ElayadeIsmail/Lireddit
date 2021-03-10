import { Field, InputType } from 'type-graphql';

// use as args in mutation

@InputType()
export class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
