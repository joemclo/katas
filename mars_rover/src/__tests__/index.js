import { rovers, commandParser } from '..';

describe('Rover movements', () => {
    describe('Rover rotation', () => {
        it('should rotate left', () => {
            expect(
                rovers(`5 5
            0 0 N
            L`)
            ).toBe('0 0 W');
        });

        it('should rotate left twice', () => {
            expect(
                rovers(`5 5
            0 0 N
            LL`)
            ).toBe('0 0 S');
        });

        it('should rotate left three times', () => {
            expect(
                rovers(`5 5
            0 0 N
            LLL`)
            ).toBe('0 0 E');
        });

        it('should rotate left four times', () => {
            expect(
                rovers(`5 5
            0 0 N
            LLLL`)
            ).toBe('0 0 N');
        });
    });
});

describe('Rover command parsing', () => {
    it('should return the grid size of platue', () => {
        expect(commandParser('5 5').gridSize).toEqual({
            x: 5,
            y: 5,
        });
    });

    it('should return rovers initial location 1 1', () => {
        expect(commandParser('5 5\n1 1 N').roverLocation).toEqual({
            x: 1,
            y: 1,
            direction: 'N',
        });
    });

    it('should return rovers initial location 2 2', () => {
        expect(commandParser('5 5\n2 2 N').roverLocation).toEqual({
            x: 2,
            y: 2,
            direction: 'N',
        });
    });

    it('should return rover commands', () => {
        expect(commandParser('5 5\n2 2 N\nM').roverCommands).toEqual(['M']);
    });
});