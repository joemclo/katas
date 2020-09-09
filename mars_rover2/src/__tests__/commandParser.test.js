import {
    getGrid,
    getRoverLocation,
    getRoverCommands,
    getRoverState,
    commandSplitter,
    getInitialState,
} from '../commandParser';

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

    describe('command splitting ', () => {
        it('should return grid part of command string', () => {
            expect(commandSplitter('5 3\n1 2 N\nLMLMLM').gridString).toBe('5 3');

            expect(commandSplitter('1 8\n1 2 N\nLMLMLM').gridString).toBe('1 8');
        });

        it('should return rover unparsed state from command string', () => {
            expect(commandSplitter('5 3\n1 2 N\nLMLMLM').roversString).toEqual(['1 2 N\nLMLMLM']);
        });

        it('should return multiple rovers unparsed state from command string', () => {
            expect(commandSplitter('5 3\n1 2 N\nLMLMLM\n3 5 E\nRRMMMLM').roversString).toEqual([
                '1 2 N\nLMLMLM',
                '3 5 E\nRRMMMLM',
            ]);
        });
    });

    describe('mars rover explores initial state setup', () => {
        it('should parse input string into rover and grid state', () => {
            expect(getInitialState('5 3\n1 2 N\nLMLMLM\n3 5 E\nRRMMMLM')).toEqual({
                grid: {
                    x: 5,
                    y: 3,
                },
                rovers: [
                    {
                        location: {
                            x: 1,
                            y: 2,
                            direction: 'N',
                        },
                        commands: ['L', 'M', 'L', 'M', 'L', 'M'],
                    },
                    {
                        location: {
                            x: 3,
                            y: 5,
                            direction: 'E',
                        },
                        commands: ['R', 'R', 'M', 'M', 'M', 'L', 'M'],
                    },
                ],
            });
        });
    });
});
