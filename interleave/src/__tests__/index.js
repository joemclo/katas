import { combineArrays } from '..';

describe('Mixing two array', () => {
    it('should mix a single item array into the middle of a three item array', () => {
        const expectedResult = ['a', '1', 'b'];

        expect(combineArrays(['a', 'b'], ['1'])).toEqual(expectedResult);
    });

    it('should mix a length two item array into the middle of a three item array', () => {
        const expectedResult = ['a', '1', 'b', '2', 'c'];

        expect(combineArrays(['a', 'b', 'c'], ['1', '2'])).toEqual(expectedResult);
    });

    it('should mix a length two item array into the middle of a six item array', () => {
        const expectedResult = ['a', 'b', '1', 'c', 'd', '2', 'e', 'f'];

        expect(combineArrays(['a', 'b', 'c', 'd', 'e', 'f'], ['1', '2'])).toEqual(expectedResult);
    });

    it('should mix a length two item array into the middle of a nine item array', () => {
        const expectedResult = ['a', 'b', 'c', '1', 'd', 'e', 'f', '2', 'g', 'h', 'i'];

        expect(combineArrays(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], ['1', '2'])).toEqual(expectedResult);
    });

    it('should mix a length three item array into the middle of a four item array', () => {
        const expectedResult = ['a', '1', 'b', '2', 'c', '3', 'd'];

        expect(combineArrays(['a', 'b', 'c', 'd'], ['1', '2', '3'])).toEqual(expectedResult);
    });

    it('should handle arrays whereby the smaller array is the first parameter', () => {
        const expectedResult = ['a', '1', 'b', '2', 'c'];

        expect(combineArrays(['1', '2'], ['a', 'b', 'c'])).toEqual(expectedResult);
    });
});
