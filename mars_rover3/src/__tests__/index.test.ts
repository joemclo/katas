import { hello } from '..';

describe('template test', () => {
    it('should say hello to the user', () => {
        expect(hello('jim')).toBe('Hello jim');
    });
});
