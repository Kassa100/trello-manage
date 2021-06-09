// 自定义装饰器

import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';

// 到处装饰器包装函数
export function IsSameValue(property: string, validationOptions?: ValidationOptions) {
    // property 字符串类型
    // validationOptions 第二个参数必须 validationOptions 类型
    return function (
        target: Object, //装饰对象
        propertyName: string  //装饰属性名称
    ) {
        registerDecorator({
            name: 'isSameValue', //装饰器名称
            target: target.constructor,  //装饰对象的constructor
            propertyName,
            constraints: [ //验证的参数
                property
            ],
            options: validationOptions,
            validator: {
                validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean { //返回一个Promise布尔值或者布尔值
                    // 第一个参数指定的属性对应的值
                    const relatedValue = validationArguments && (validationArguments.object as any)[property];
                    // value当前装饰的属性对应的值
                    return value === relatedValue
                }

            }
        })
    }
}