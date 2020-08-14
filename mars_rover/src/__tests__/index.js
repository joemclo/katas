import { rovers } from '..';

describe('Rover movements', () => {
    describe('Rover rotation', () => {
        it('should rotate left', () => {
            expect(rovers(`5 5\n0 0 N\nL`)).toBe('0 0 W');
        });

        it('should rotate left twice', () => {
            expect(rovers(`5 5\n0 0 N\nLL`)).toBe('0 0 S');
        });

        it('should rotate left three times', () => {
            expect(rovers(`5 5\n0 0 N\nLLL`)).toBe('0 0 E');
        });

        it('should rotate left four times', () => {
            expect(rovers(`5 5\n0 0 N\nLLLL`)).toBe('0 0 N');
        });
    });
});
