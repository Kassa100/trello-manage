
import { Context, Next } from "koa"
import Boom from "@hapi/boom"
import { BelongsToMany } from "sequelize-typescript"
export default async function authorization(ctx: Context, next: Next) {
    if (!ctx.userInfo || ctx.userInfo.id < 1) {
        throw Boom.unauthorized('无权访问', "未登录")
    }
    await next()
}