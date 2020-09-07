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

const rotationDirection = (left, right) => ({
    left,
    right,
});

const rotationMap = {
    E: rotationDirection('N', 'S'),
    N: rotationDirection('W', 'E'),
    S: rotationDirection('E', 'W'),
    W: rotationDirection('S', 'N'),
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
                direction: rotationMap[direction].left,
            };
        } else if (command === 'R') {
            return {
                ...updatedLocation,
                direction: rotationMap[direction].right,
            };
        }

        throw new Error('unknown command');
    }, location);
};

const isRoverOnGrid = (roverLocation, grid) => {
    if (roverLocation.x > grid.x || roverLocation.x < 0 || roverLocation.y < 0 || roverLocation.y > grid.y) {
        return false;
    }

    return true;
};

export { moveRover, isRoverOnGrid };
