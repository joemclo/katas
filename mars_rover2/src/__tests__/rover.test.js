import { moveRover, isRoverOnGrid } from '../rover';

describe('rover', () => {
    const testGrid = {
        x: 5,
        y: 5,
    };

    describe('rover movement ', () => {
        const commandTestDate = [
            [1, ['M']],
            [2, ['M', 'M']],
            [3, ['M', 'M', 'M']],
        ];

        it.each(commandTestDate)('should move rover %s steps in y axis', (expectedY, commands) => {
            const rover = moveRover({ x: 0, y: 0, direction: 'N' }, commands, testGrid);

            expect(rover).toEqual({ x: 0, y: expectedY, direction: 'N' });
        });

        it.each(commandTestDate)('should move rover minus %s steps in y axis', (yAxisSteps, commands) => {
            const startingY = 5;
            const rover = moveRover({ x: 0, y: startingY, direction: 'S' }, commands, testGrid);

            expect(rover).toEqual({ x: 0, y: startingY - yAxisSteps, direction: 'S' });
        });

        it.each(commandTestDate)('should move rover %s steps in x axis', (expectedX, commands) => {
            const rover = moveRover({ x: 0, y: 0, direction: 'E' }, commands, testGrid);

            expect(rover).toEqual({ x: expectedX, y: 0, direction: 'E' });
        });

        it.each(commandTestDate)('should move rover minus %s steps in x axis', (xAxisSteps, commands) => {
            const startingX = 5;
            const rover = moveRover({ x: startingX, y: 0, direction: 'W' }, commands, testGrid);

            expect(rover).toEqual({ x: startingX - xAxisSteps, y: 0, direction: 'W' });
        });

        it('should stop rover when it tries to move outside of the grid', () => {
            const rover = moveRover({ x: 5, y: 5, direction: 'N' }, ['M', 'R', 'R', 'M'], testGrid);

            expect(rover).toEqual({ x: 5, y: 5, direction: 'N' });
        });
    });

    describe('rover direction turning', () => {
        const testStartingLocation = { x: 0, y: 0, direction: 'N' };

        describe('rotation left', () => {
            const commandTestRotation = [
                ['W', ['L']],
                ['S', ['L', 'L']],
                ['E', ['L', 'L', 'L']],
                ['N', ['L', 'L', 'L', 'L']],
            ];

            it.each(commandTestRotation)('should rotate the rover left from N to %s', (expectedDirection, commands) => {
                const rover = moveRover({ ...testStartingLocation }, commands, testGrid);

                expect(rover).toEqual({ x: 0, y: 0, direction: expectedDirection });
            });
        });

        describe('rotation right', () => {
            const commandTestRotation = [
                ['E', ['R']],
                ['S', ['R', 'R']],
                ['W', ['R', 'R', 'R']],
                ['N', ['R', 'R', 'R', 'R']],
            ];

            it.each(commandTestRotation)(
                'should rotate the rover right from N to %s',
                (expectedDirection, commands) => {
                    const rover = moveRover({ ...testStartingLocation }, commands, testGrid);

                    expect(rover).toEqual({ x: 0, y: 0, direction: expectedDirection });
                }
            );
        });
    });

    describe('Checking rover location on the grid', () => {
        it.each([
            ['passed right', 6, 4, false],
            ['passed left', -1, 4, false],
            ['passed top', 4, 6, false],
            ['passed bottom', 4, -1, false],
            ['in middle', 3, 3, true],
            ['top left', 0, 5, true],
            ['top right', 5, 5, true],
            ['bottom left', 0, 0, true],
            ['bottom right', 5, 0, true],
        ])('should detect rover is %s edge of grid', (_, x, y, expectedOnGrid) => {
            const roverLocation = { x, y };

            const grid = {
                x: 5,
                y: 5,
            };

            expect(isRoverOnGrid(roverLocation, grid)).toBe(expectedOnGrid);
        });
    });
});
