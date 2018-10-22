import {
    User as UserBase, Cloneable
} from '../_core';

export class User extends UserBase {

    public username: string = '';

    constructor(data?: any) {
        super(data);
        this.registerProperty('username');
        this.parseObject(data);
    }

    public clone(): Cloneable {
        return super.clone(<Cloneable>new User());
    }
}
