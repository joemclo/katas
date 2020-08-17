import { getInitialState, getRoversInitialState } from '../commandsParser';

describe('Rover command parsing', () => {
    it('should return grid and initial rover state', () => {
        expect(getInitialState('5 5\n1 1 N\nM\n2 2 S\nL')).toEqual({
            grid: {
                x: 5,
                y: 5,
            },
            rovers: [
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
            ],
        });
    });

    describe('grid', () => {
        it('should return the grid size of plateau', () => {
            expect(getInitialState('5 5').grid).toEqual({
                x: 5,
                y: 5,
            });
        });
    });

    describe('rover initial state', () => {
        it('should return initial state for multiple rovers', () => {
            expect(getRoversInitialState('1 1 N\nM\n2 2 S\nLL')).toEqual([
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
                    commands: ['L', 'L'],
                },
            ]);
        });
    });
});
