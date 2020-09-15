import { explorePlateau } from '..';

describe('move rovers on plateau', () => {
    it('should move multiple rovers and report final location', () => {
        expect(explorePlateau('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toBe('1 3 N\n5 1 E');
    });
});
