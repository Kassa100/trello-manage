

import { Model, Table, Column, AllowNull, Unique, CreatedAt, UpdatedAt, PrimaryKey, DataType, AutoIncrement } from "sequelize-typescript";
import crypto from "crypto"

@Table({
    tableName: 'user'
})
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(50)
    })
    name: string;

    @Column
    set password(val: string) {
        let md5 = crypto.createHash('md5');
        let newPassword = md5.update(val).digest('hex');
        this.setDataValue('password', newPassword);
    }

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}