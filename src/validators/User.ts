// 接口传入数据验证

import { IsNotEmpty, Length } from 'class-validator'
import { IsSameValue } from './CustomValidationDecorators'
export class RegisterBody {
    @Length(1, 50, {
        message: '用户名不能为空或者大于50个字符'
    })
    name: string;

    @IsNotEmpty({
        message: '密码不能为空'
    })
    password: string;

    @IsSameValue('password', {
        message: '两次输入密码不一致'
    })
    rePassword: string;

}