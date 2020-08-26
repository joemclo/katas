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

const moveRover = (location, commands) => {
    return commands.reduce((updatedLocation, command) => {
        const direction = updatedLocation.direction;
        const { axis, moveCount } = directionAxisMap[direction];

        return {
            ...updatedLocation,
            [axis]: updatedLocation[axis] + moveCount,
        };
    }, location);
};

export { moveRover };
