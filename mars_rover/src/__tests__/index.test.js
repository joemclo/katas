import { explorePlateau, initialiseRover } from '..';

describe('explorePlateau tests', () => {
    it('should move one rover', () => {
        expect(explorePlateau(`5 5\n0 0 N\nM`)).toBe('0 1 N');
    });

    it('should move two rovers', () => {
        expect(explorePlateau(`5 5\n0 0 N\nM\n0 0 E\nM`)).toBe('0 1 N\n1 0 E');
    });

    it('should move two rovers in multiple directions', () => {
        expect(explorePlateau(`5 5\n1 1 N\nMRM\n3 3 S\nMMRM`)).toBe('2 2 E\n2 1 W');
    });

    it('should meet the example test case of rover movement', () => {
        expect(explorePlateau(`5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`)).toBe(`1 3 N\n5 1 E`);
    });
});

describe('rover movement', () => {
    const testGrid = { x: 5, y: 5 };

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

                rover.move(testGrid);

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

                rover.move(testGrid);

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

                rover.move(testGrid);

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

                rover.move(testGrid);

                expect(rover.location.x).toEqual(expectedLocation.x);
                expect(rover.location.y).toEqual(expectedLocation.y);
            });
        });

        it('should stop moving when reaching the edge of the plateau on y axis', () => {
            const rover = initialiseRover({
                location: {
                    x: 0,
                    y: 0,
                    direction: 'N',
                },
                commands: ['M', 'M'],
            });
            const grid = { x: 1, y: 1 };

            rover.move(grid);

            expect(rover.location.y).toEqual(grid.y);
        });

        it('should stop moving when reaching the edge of the plateau on x axis', () => {
            const rover = initialiseRover({
                location: {
                    x: 0,
                    y: 0,
                    direction: 'E',
                },
                commands: ['M', 'M'],
            });
            const grid = { x: 1, y: 1 };

            rover.move(grid);

            expect(rover.location.x).toEqual(grid.x);
        });

        it('should stop moving when reaching the edge of the plateau on start of y axis', () => {
            const rover = initialiseRover({
                location: {
                    x: 0,
                    y: 0,
                    direction: 'S',
                },
                commands: ['M'],
            });

            rover.move({ x: 1, y: 1 });

            expect(rover.location.y).toEqual(0);
        });

        it('should stop moving when reaching the edge of the plateau on start of x axis', () => {
            const rover = initialiseRover({
                location: {
                    x: 0,
                    y: 0,
                    direction: 'W',
                },
                commands: ['M'],
            });

            rover.move({ x: 1, y: 1 });

            expect(rover.location.x).toEqual(0);
        });
    });
});
