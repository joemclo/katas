const axisMove = (axis, moveCount) => ({
    axis,
    moveCount,
});

const directionAxisMap = {
    N: axisMove('y', 1),
    S: axisMove('y', -1),
    E: axisMove('x', 1),
    W: axisMove('x', -1),
};

const nextDirection = (left, right) => ({
    left,
    right,
});

const compassMap = {
    E: nextDirection('N', 'S'),
    N: nextDirection('W', 'E'),
    S: nextDirection('E', 'W'),
    W: nextDirection('S', 'N'),
};

const moveRover = (location, commands) => {
    return commands.reduce((updatedLocation, command) => {
        const direction = updatedLocation.direction;

        if (command === 'M') {
            const { axis, moveCount } = directionAxisMap[direction];

            return {
                ...updatedLocation,
                [axis]: updatedLocation[axis] + moveCount,
            };
        } else if (command === 'L') {
            return {
                ...updatedLocation,
                direction: compassMap[direction].left,
            };
        } else if (command === 'R') {
            return {
                ...updatedLocation,
                direction: compassMap[direction].right,
            };
        }

        throw new Error('unknown command');
    }, location);
};

export { moveRover };
