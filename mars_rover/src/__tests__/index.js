import { explorePlateau, initialiseRover } from '..';

describe('Rover movements', () => {
    describe('Rover rotation', () => {
        it('should rotate left', () => {
            expect(explorePlateau(`5 5\n0 0 N\nL`)).toBe('0 0 W');
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

    describe('rover move', () => {
        [
            [['M'], 0, 1],
            [['M', 'M'], 0, 2],
            [['M', 'M'], 3, 5],
        ].forEach(([commands, initialLocation, expectedYLocation]) => {
            it(`should move rover north by ${commands.length} steps from y location ${initialLocation}`, () => {
                const rover = initialiseRover({
                    location: {
                        x: 0,
                        y: initialLocation,
                        direction: 'N',
                    },
                    commands,
                });

                rover.move();

                expect(rover.location.y).toBe(expectedYLocation);
            });
        });

        it('should move rover south by one step', () => {
            const rover = initialiseRover({
                location: {
                    x: 0,
                    y: 4,
                    direction: 'S',
                },
                commands: ['M'],
            });

            rover.move();

            expect(rover.location.y).toBe(3);
        });

        it('should move rover east by one step', () => {
            const rover = initialiseRover({
                location: {
                    x: 0,
                    y: 0,
                    direction: 'E',
                },
                commands: ['M'],
            });

            rover.move();

            expect(rover.location.x).toBe(1);
        });
    });
});
