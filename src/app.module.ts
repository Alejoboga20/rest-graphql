import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HelloWorldRestModule } from './hello-world-rest/hello-world-rest.module';
import { HelloWorldGraphqlModule } from './hello-world-graphql/hello-world-graphql.module';

@Module({
  imports: [
    HelloWorldRestModule,
    HelloWorldGraphqlModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graph.ql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
