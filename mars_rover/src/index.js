import { getInitialState } from './commandsParser';

const rovers = (commandsString) => {
    const { rovers } = getInitialState(commandsString);

    let direction = rovers[0].location.direction;
    const commands = rovers[0].commands;
    commands.forEach((command) => {
        if (command === 'L') {
            if (direction === 'N') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'E';
            } else {
                direction = 'N';
            }
        }
    });

    return `0 0 ${direction}`;
};

export { rovers };
