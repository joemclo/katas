import { rovers, commandParser, getRoversInitialState } from '..';

describe('Rover movements', () => {
    describe('Rover rotation', () => {
        it('should rotate left', () => {
            expect(rovers(`5 5\n0 0 N\nL`)).toBe('0 0 W');
        });

        it('should rotate left twice', () => {
            expect(rovers(`5 5\n0 0 N\nLL`)).toBe('0 0 S');
        });

        it('should rotate left three times', () => {
            expect(rovers(`5 5\n0 0 N\nLLL`)).toBe('0 0 E');
        });

        it('should rotate left four times', () => {
            expect(rovers(`5 5\n0 0 N\nLLLL`)).toBe('0 0 N');
        });
    });
});

describe('Rover command parsing', () => {
    it('should return the grid size of plateau', () => {
        expect(commandParser('5 5').grid).toEqual({
            x: 5,
            y: 5,
        });
    });

    it('should return rovers initial location 1 1', () => {
        expect(commandParser('5 5\n1 1 N').rovers[0].location).toEqual({
            x: 1,
            y: 1,
            direction: 'N',
        });
    });

    it('should return rovers initial location 2 2', () => {
        expect(commandParser('5 5\n2 2 N').rovers[0].location).toEqual({
            x: 2,
            y: 2,
            direction: 'N',
        });
    });

    it('should return rover commands', () => {
        expect(commandParser('5 5\n2 2 N\nM').rovers[0].commands).toEqual(['M']);
    });
});
describe('rover initial state', () => {
    it('should return initial state for multiple rovers', () => {
        expect(getRoversInitialState('1 1 N\nM\n2 2 S\nL')).toEqual([
            {
                location: {
                    x: 1,
                    y: 1,
                    direction: 'N',
                },
                commands: ['M'],
            },
            {
                location: {
                    x: 2,
                    y: 2,
                    direction: 'S',
                },
                commands: ['L'],
            },
        ]);
    });
});
