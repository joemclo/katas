const rotateMap = {
    N: ['W', 'E'],
    W: ['S', 'N'],
    S: ['E', 'W'],
    E: ['N', 'S'],
};

const leftIndex = 0;
const rightIndex = 1;

const rotateLeft = (direction) => {
    return rotateMap[direction][leftIndex];
};

const rotateRight = (direction) => {
    return rotateMap[direction][rightIndex];
};

export { rotateLeft, rotateRight };
