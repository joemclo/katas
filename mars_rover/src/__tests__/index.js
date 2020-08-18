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
        [
            [['L'], 'W'],
            [['L', 'L'], 'S'],
            [['L', 'L', 'L'], 'E'],
            [['L', 'L', 'L', 'L'], 'N'],
        ].forEach(([commands, expectedDirection]) => {
            it(`should rotate left by ${commands} to ${expectedDirection}`, () => {
                const rover = initialiseRover({
                    location: {
                        direction: 'N',
                    },
                    commands: commands,
                });

                rover.move();

                expect(rover.location.direction).toEqual(expectedDirection);
            });
        });

        [
            [['R'], 'E'],
            [['R', 'R'], 'S'],
            [['R', 'R', 'R'], 'W'],
            [['R', 'R', 'R', 'R'], 'N'],
        ].forEach(([commands, expectedDirection]) => {
            it(`should rotate right by ${commands} to ${expectedDirection}`, () => {
                const rover = initialiseRover({
                    location: {
                        direction: 'N',
                    },
                    commands: commands,
                });

                rover.move();

                expect(rover.location.direction).toEqual(expectedDirection);
            });
        });
    });
});
