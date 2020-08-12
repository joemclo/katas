import { rover } from '../index';

describe('Rover', () => {
    describe('Rotation', () => {
        describe('Rotate left', () => {
            [
                ['L', '0,0,W'],
                ['LL', '0,0,S'],
                ['LLL', '0,0,E'],
                ['LLLL', '0,0,N'],
            ].forEach(([command, expectedFinishPoint]) => {
                it(`should rotate left with command ${command} to have finish point ${expectedFinishPoint}`, () => {
                    const finishPoint = rover(command);
                    expect(finishPoint).toBe(expectedFinishPoint);
                });
            });
        });

        describe('Rotate right', () => {
            [
                ['R', '0,0,E'],
                ['RR', '0,0,S'],
                ['RRR', '0,0,W'],
                ['RRRR', '0,0,N'],
            ].forEach(([command, expectedFinishPoint]) => {
                it(`should rotate right with command ${command} to have finish point ${expectedFinishPoint}`, () => {
                    const finishPoint = rover(command);
                    expect(finishPoint).toBe(expectedFinishPoint);
                });
            });
        });
    });
});
