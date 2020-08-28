import { commandParser, getGrid, getRoverLocation, getRoverCommands, getRoverState } from '../commandParser';

describe('command input parser', () => {
    describe('grid initial state', () => {
        it('should create grid x 1,y 1 from command input', () => {
            expect(getGrid('1 1')).toEqual({
                x: 1,
                y: 1,
            });
        });
        it('should create grid x 2,y 2 from command input', () => {
            expect(getGrid('2 2')).toEqual({
                x: 2,
                y: 2,
            });
        });
    });

    describe('rover initial state', () => {
        it('should create rover state x 1, y 1, direction N from command input', () => {
            expect(getRoverLocation('1 1 N')).toEqual({
                x: 1,
                y: 1,
                direction: 'N',
            });
        });

        it('should create rover state x 2, y 3, direction S from command input', () => {
            expect(getRoverLocation('2 3 S')).toEqual({
                x: 2,
                y: 3,
                direction: 'S',
            });
        });

        it('should get array or rover commands', () => {
            expect(getRoverCommands('MML')).toEqual(['M', 'M', 'L']);

            expect(getRoverCommands('MMLRM')).toEqual(['M', 'M', 'L', 'R', 'M']);
        });

        it('should return initial rover state of commands and location', () => {
            expect(getRoverState('3 5 E\nMML')).toEqual({
                location: {
                    x: 3,
                    y: 5,
                    direction: 'E',
                },
                commands: ['M', 'M', 'L'],
            });
        });
    });
});
