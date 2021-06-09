import { Body, Controller, Get, Ctx, Params, Post, Query, Flow } from 'koa-ts-controllers';
import { IsNumberString } from "class-validator"
import Boom from "@hapi/boom"
import { Context } from 'koa';
import authorization from "../middlewares/authorization"
class GetUsersQuery {
    @IsNumberString()
    page: number;
}

@Controller('/test')
class TestController {
    @Get('/hello')
    async hello() {
        console.log('heloow');
        return 'Hello Test!';
    }

    @Get('/user/:id(\\d+)')
    async getUser(
        @Params('id') id: number
    ) {
        return '当前用户的id:' + id;
    }

    // @Get('/user')
    // async getUser(
    //     @Query() query: GetUsersQuery
    // ) {
    //     console.log(query);
    //     return '请求成功'
    // }

    // @Post('/user')
    // async getUser(
    //     @Body() body: any
    // ) {
    //     console.log(body);
    //     return `当前Body为${JSON.stringify(body)}`;
    // }

    @Get('/auth')
    @Flow([authorization])
    async auth(
        @Ctx() ctx: Context
    ) {
        return "不登录看不到"
    }

    @Get('/unauth')
    async unauth(
        @Ctx() ctx: Context
    ) {
        return "随便看"
    }
}


