import { User } from './user.model';

describe('User', () => {

    let user: User;

    beforeEach(() => {
        user = new User({
            firstName: 'foo',
            lastName: 'bar',
            username: 'foo@bar.com'
        });
    });

    it('should create User', () => {
        expect(user.firstName).toEqual('foo');
        expect(user.lastName).toEqual('bar');
        expect(user.username).toEqual('foo@bar.com');
    });
    it('should export object', () => {
        const o = user.toObject();
        expect(JSON.stringify(o)).toEqual('{"firstName":"foo","lastName":"bar","username":"foo@bar.com"}');
    });
    it('should commit firstName to "foofoo"', () => {
        user.firstName = 'foofoo';
        expect(user.firstName).toEqual('foofoo');
        user.commit();
        expect(user.firstName).toEqual('foofoo');
        user.revert();
        expect(user.firstName).toEqual('foofoo');
    });
    it('should revert firstName to "foo"', () => {
        user.firstName = 'foofoo';
        expect(user.firstName).toEqual('foofoo');
        user.revert();
        expect(user.firstName).toEqual('foo');
    });
});
