import { explorePlateau, stringifyRoversState } from '..';

describe('move rovers on plateau', () => {
    it('should move multiple rovers and report final location', () => {
        expect(explorePlateau('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toBe('1 3 N\n5 1 E');
    });
});

describe('stringfy rover positions', () => {
    it('should output location of rovers from state', () => {
        expect(
            stringifyRoversState({
                rovers: [
                    {
                        location: {
                            x: 1,
                            y: 2,
                            direction: 'N',
                        },
                    },
                    {
                        location: {
                            x: 3,
                            y: 5,
                            direction: 'E',
                        },
                    },
                ],
            })
        ).toBe('1 2 N\n3 5 E');
    });
});
