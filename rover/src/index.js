import { rotateRight, rotateLeft } from './rotation';

const rover = (commands) => {
    let direction = 'N';

    [...commands].forEach((command) => {
        if (command === 'L') {
            direction = rotateLeft(direction);
        } else if (command === 'R') {
            direction = rotateRight(direction);
        }
    });

    return '0,0,' + direction;
};

export { rover };
