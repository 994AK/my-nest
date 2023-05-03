import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return { name: '994AK', email: '1505398065@qq.com' };
  }

  @Post()
  postUser(@Req() req: Request) {
    // req.body 代表 传进来的参数
    console.log(req.body);
    return req.body;
  }

  @Get('/:userId')
  getUserParam(@Param() param: { userId: number } ) {
    return param;
  }
}
