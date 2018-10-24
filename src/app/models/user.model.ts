import {
    User as UserBase
} from '../_core';

export class User extends UserBase {

    public username: string = '';

    constructor(data?: any) {
        super(data);
        this.registerProperty('username');
        this.parseObject(data);
    }

    public clone(): User {
        return super.clone(new User());
    }
}
