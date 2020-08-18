const directionCompass = {
    N: ['W', 'E'],
    W: ['S', 'N'],
    S: ['E', 'W'],
    E: ['N', 'S'],
};

const rotateLeft = (currentDirection) => {
    return directionCompass[currentDirection][0];
};

const rotateRight = (currentDirection) => {
    return directionCompass[currentDirection][1];
};

const rotate = (currentDirection, command) => {
    if (command === 'L') {
        return rotateLeft(currentDirection);
    } else {
        return rotateRight(currentDirection);
    }
};

const rotationCommands = ['L', 'R'];

export { rotateLeft, rotateRight, rotationCommands, rotate };
