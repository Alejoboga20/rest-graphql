import { Controller, Get } from '@nestjs/common';

@Controller('hello-world-rest')
export class HelloWorldRestController {
  @Get()
  getHelloWorld() {
    return {
      message: 'Hello World',
    };
  }

  @Get('dice')
  getRandomNumber() {
    return 10;
  }
}
