import { getInitialState } from './commandsParser';

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

                if (command === 'L') {
                    if (currentDirection === 'N') {
                        this.location = { ...this.location, direction: 'W' };
                    } else if (currentDirection === 'W') {
                        this.location = { ...this.location, direction: 'S' };
                    } else if (currentDirection === 'S') {
                        this.location = { ...this.location, direction: 'E' };
                    } else {
                        this.location = { ...this.location, direction: 'N' };
                    }
                }
            });
            roverCommands = [];
        },
    };
};

export { explorePlateau, initialiseRover };
