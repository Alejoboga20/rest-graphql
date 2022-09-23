import { Module } from '@nestjs/common';
import { HelloWorldGraphqlResolver } from './hello-world-graphql.resolver';

@Module({
  providers: [HelloWorldGraphqlResolver],
})
export class HelloWorldGraphqlModule {}
