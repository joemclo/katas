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

const moveRover = (location, commands, grid) => {
    return commands.reduce((location, command, _, arr) => {
        const direction = location.direction;

        let updatedLocation;

        if (command === 'M') {
            const { axis, moveCount } = directionAxisMap[direction];

            updatedLocation = {
                ...location,
                [axis]: location[axis] + moveCount,
            };
        } else if (command === 'L') {
            updatedLocation = {
                ...location,
                direction: rotationMap[direction].left,
            };
        } else if (command === 'R') {
            updatedLocation = {
                ...location,
                direction: rotationMap[direction].right,
            };
        }

        if (isRoverOnGrid(updatedLocation, grid)) {
            return updatedLocation;
        } else {
            arr.splice(1); // escape early as we have hit edge of grid
            return location;
        }
    }, location);
};

const isRoverOnGrid = (roverLocation, grid) => {
    if (roverLocation.x > grid.x || roverLocation.x < 0 || roverLocation.y < 0 || roverLocation.y > grid.y) {
        return false;
    }

    return true;
};

export { moveRover, isRoverOnGrid };
