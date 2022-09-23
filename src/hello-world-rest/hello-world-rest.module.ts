import { Module } from '@nestjs/common';
import { HelloWorldRestController } from './hello-world-rest.controller';

@Module({
  controllers: [HelloWorldRestController],
})
export class HelloWorldRestModule {}
