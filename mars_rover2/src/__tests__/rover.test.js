import { moveRover } from '../rover';

describe('rover', () => {
    describe('rover movement ', () => {
        it.each([
            [1, ['M']],
            [2, ['M', 'M']],
            [3, ['M', 'M', 'M']],
        ])('should move rover %s steps in y axis', (expectedY, commands) => {
            const rover = moveRover({ x: 0, y: 0, direction: 'N' }, commands);

            expect(rover).toEqual({ x: 0, y: expectedY, direction: 'N' });
        });

        it.each([
            [1, ['M']],
            [2, ['M', 'M']],
            [3, ['M', 'M', 'M']],
        ])('should move rover minus %s steps in y axis', (yAxisSteps, commands) => {
            const startingY = 5;
            const rover = moveRover({ x: 0, y: startingY, direction: 'S' }, commands);

            expect(rover).toEqual({ x: 0, y: startingY - yAxisSteps, direction: 'S' });
        });

        it.each([
            [1, ['M']],
            [2, ['M', 'M']],
            [3, ['M', 'M', 'M']],
        ])('should move rover %s steps in x axis', (expectedX, commands) => {
            const rover = moveRover({ x: 0, y: 0, direction: 'E' }, commands);

            expect(rover).toEqual({ x: expectedX, y: 0, direction: 'E' });
        });

        it.each([
            [1, ['M']],
            [2, ['M', 'M']],
            [3, ['M', 'M', 'M']],
        ])('should move rover minus %s steps in x axis', (xAxisSteps, commands) => {
            const startingX = 5;
            const rover = moveRover({ x: startingX, y: 0, direction: 'W' }, commands);

            expect(rover).toEqual({ x: startingX - xAxisSteps, y: 0, direction: 'W' });
        });
    });
});
