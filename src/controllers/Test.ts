import { Body, Controller, Get, Params, Post, Query } from 'koa-ts-controllers';
import { IsNumberString } from "class-validator"
import Boom from "@hapi/boom"
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
}


