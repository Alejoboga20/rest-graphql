import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { getRandomNumber } from 'src/common/get-random-number';

@Resolver()
export class HelloWorldGraphqlResolver {
  @Query(() => String, { name: 'message' })
  getHelloWorld(): string {
    return 'Hello World GraphQL';
  }

  @Query(() => Int, { name: 'randomDice', description: 'Return dice value' })
  getRandomNumber(
    @Args('max', { type: () => Int, nullable: true }) max = 6,
  ): number {
    return getRandomNumber(+max);
  }
}
