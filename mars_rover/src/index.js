import { getInitialState } from './commandsParser';
import { rotate, rotationCommands } from './rotation';

const explorePlateau = (commandsString) => {
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

const initialiseRover = ({ location, commands }) => {
    let roverCommands = commands;

    return {
        location: { ...location },
        move: function () {
            roverCommands.forEach((command) => {
                const currentDirection = this.location.direction;

                if (rotationCommands.includes(command)) {
                    this.location = { ...this.location, direction: rotate(currentDirection, command) };
                }
            });
            roverCommands = [];
        },
    };
};

export { explorePlateau, initialiseRover };
