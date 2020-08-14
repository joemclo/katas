import { getInitialState, getRoversInitialState } from '../commandsParser';

describe('Rover command parsing', () => {
    it('should return the grid size of plateau', () => {
        expect(getInitialState('5 5').grid).toEqual({
            x: 5,
            y: 5,
        });
    });

    it('should return rovers initial location 1 1', () => {
        expect(getInitialState('5 5\n1 1 N').rovers[0].location).toEqual({
            x: 1,
            y: 1,
            direction: 'N',
        });
    });

    it('should return rovers initial location 2 2', () => {
        expect(getInitialState('5 5\n2 2 N').rovers[0].location).toEqual({
            x: 2,
            y: 2,
            direction: 'N',
        });
    });

    it('should return rover commands', () => {
        expect(getInitialState('5 5\n2 2 N\nM').rovers[0].commands).toEqual(['M']);
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
