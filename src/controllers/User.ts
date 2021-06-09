import { Controller, Ctx, Body, Post } from "koa-ts-controllers"

import { RegisterBody } from '../validators/User'

import { User as UserModel } from '../models/User'

import Boom from "@hapi/Boom"
import { Context } from "koa";

@Controller('/user')

export class UserController {

    // 用户注册

    @Post('/register')
    async register(
        @Ctx() ctx: Context,
        @Body() body: RegisterBody
    ) {
        let { name, password } = body;

        // 验证数据库中是否已经存在要注册的用户

        let user = await UserModel.findOne({
            where: {
                name
            }
        })

        if (user) {
            throw Boom.conflict('注册失败', '用户名重复')
        }


        // 将数据同步到数据库
        let newUser = new UserModel();
        newUser.name = name;
        newUser.password = password;

        await newUser.save();
        ctx.status = 201;
        return {
            id: newUser.id,
            name: newUser.name,
            createdAt: newUser.createdAt
        }
    }
}