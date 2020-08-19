const directionMoveMap = {
    N: { axis: 'y', change: 1 },
    S: { axis: 'y', change: -1 },
    W: { axis: 'x', change: -1 },
    E: { axis: 'x', change: 1 },
};

const moveRover = (currentLocation) => {
    const currentDirection = currentLocation.direction;
    const movement = directionMoveMap[currentDirection];

    return { [movement.axis]: currentLocation[movement.axis] + movement.change };
};

export { moveRover };
