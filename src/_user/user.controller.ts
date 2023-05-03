import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/_user')
export class UserController {
  // 查询用户
  @Get()
  getUser() {
    return { name: '994AK' };
  }

  // 添加用户信息
  @Post()
  postUser(@Req() req: Request) {
    return req.body;
  }

  // 查询帖子信息
  @Get('/:userId')
  getUserParam(@Param() param: { userId: number }) {
    return param;
  }
}
