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

        [
            ['N', { x: 0, y: 0 }, { x: 0, y: 1 }],
            ['E', { x: 0, y: 0 }, { x: 1, y: 0 }],
            ['W', { x: 1, y: 0 }, { x: 0, y: 0 }],
            ['S', { x: 0, y: 1 }, { x: 0, y: 0 }],
        ].forEach(([direction, startingLocation, expectedLocation]) => {
            it(`should move rover ${direction} by one step`, () => {
                const rover = initialiseRover({
                    location: {
                        ...startingLocation,
                        direction,
                    },
                    commands: ['M'],
                });

                rover.move();

                expect(rover.location.x).toEqual(expectedLocation.x);
                expect(rover.location.y).toEqual(expectedLocation.y);
            });
        });
    });
});
