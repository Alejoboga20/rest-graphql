import { Module } from '@nestjs/common';
import { HelloWorldRestModule } from './hello-world-rest/hello-world-rest.module';

@Module({
  imports: [HelloWorldRestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
