import { exampleFunc } from '..';

describe('template test', () => {
    it('should pass simple test', () => {
        expect(exampleFunc()).toEqual('example');
    });
});
