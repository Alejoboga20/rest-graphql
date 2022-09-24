import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldGraphqlResolver {
  @Query(() => String, { name: 'message' })
  getHelloWorld(): string {
    return 'Hello World GraphQL';
  }

  @Query(() => Number, { name: 'randomDice', description: 'Return dice value' })
  getRandomNumber(): number {
    return 10;
  }
}
