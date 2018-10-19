import {
    User as UserBase
} from '../_core';

export class User extends UserBase {

    public username: string = '';

    constructor(data?: any) {
        super(data);
        this._exports = [
            ...this._exports,
            'username'
        ];
        this.parseObject(data);
    }
}
