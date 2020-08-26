import { moveRover } from '../rover';

describe('rover', () => {
    describe('rover movement ', () => {
        const commandTestDate = [
            [1, ['M']],
            [2, ['M', 'M']],
            [3, ['M', 'M', 'M']],
        ];

        it.each(commandTestDate)('should move rover %s steps in y axis', (expectedY, commands) => {
            const rover = moveRover({ x: 0, y: 0, direction: 'N' }, commands);

            expect(rover).toEqual({ x: 0, y: expectedY, direction: 'N' });
        });

        it.each(commandTestDate)('should move rover minus %s steps in y axis', (yAxisSteps, commands) => {
            const startingY = 5;
            const rover = moveRover({ x: 0, y: startingY, direction: 'S' }, commands);

            expect(rover).toEqual({ x: 0, y: startingY - yAxisSteps, direction: 'S' });
        });

        it.each(commandTestDate)('should move rover %s steps in x axis', (expectedX, commands) => {
            const rover = moveRover({ x: 0, y: 0, direction: 'E' }, commands);

            expect(rover).toEqual({ x: expectedX, y: 0, direction: 'E' });
        });

        it.each(commandTestDate)('should move rover minus %s steps in x axis', (xAxisSteps, commands) => {
            const startingX = 5;
            const rover = moveRover({ x: startingX, y: 0, direction: 'W' }, commands);

            expect(rover).toEqual({ x: startingX - xAxisSteps, y: 0, direction: 'W' });
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
                const rover = moveRover({ ...testStartingLocation }, commands);

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
                    const rover = moveRover({ ...testStartingLocation }, commands);

                    expect(rover).toEqual({ x: 0, y: 0, direction: expectedDirection });
                }
            );
        });
    });
});
