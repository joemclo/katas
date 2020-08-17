import { explorePlateau, initialiseRover } from '..';

describe('Rover movements', () => {
    describe('Rover rotation', () => {
        it('should rotate left', () => {
            expect(explorePlateau(`5 5\n0 0 N\nL`)).toBe('0 0 W');
        });

        it('should rotate left twice', () => {
            expect(explorePlateau(`5 5\n0 0 N\nLL`)).toBe('0 0 S');
        });

        it('should rotate left three times', () => {
            expect(explorePlateau(`5 5\n0 0 N\nLLL`)).toBe('0 0 E');
        });

        it('should rotate left four times', () => {
            expect(explorePlateau(`5 5\n0 0 N\nLLLL`)).toBe('0 0 N');
        });
    });
});

describe('rover movement', () => {
    describe('rover rotation', () => {
        it('should rotate left', () => {
            const rover = initialiseRover({
                location: {
                    direction: 'N',
                },
                commands: ['L'],
            });

            rover.move();

            expect(rover.location.direction).toEqual('W');
        });

        it('should rotate left twice', () => {
            const rover = initialiseRover({
                location: {
                    direction: 'N',
                },
                commands: ['L', 'L'],
            });

            rover.move();

            expect(rover.location.direction).toEqual('S');
        });
    });
});
