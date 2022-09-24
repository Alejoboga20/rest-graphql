import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { getRandomNumber } from 'src/common/get-random-number';

@Controller('hello-world-rest')
export class HelloWorldRestController {
  @Get()
  getHelloWorld() {
    return {
      message: 'Hello World',
    };
  }

  @Get('dice')
  getRandomNumber(@Query('max') max = 6): number {
    return getRandomNumber(+max);
  }
}
