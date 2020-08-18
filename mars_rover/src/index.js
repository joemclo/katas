import { getInitialState } from './commandsParser';
import { rotate, rotationCommands } from './rotation';

const explorePlateau = (commandsString) => {
    const { rovers } = getInitialState(commandsString);

    const rover = initialiseRover(rovers[0]);
    rover.move();

    return `0 0 ${rover.location.direction}`;
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
                } else if (command === 'M') {
                    if (currentDirection === 'N') {
                        this.location = { ...this.location, y: this.location.y + 1 };
                    } else if (currentDirection === 'S') {
                        this.location = { ...this.location, y: this.location.y - 1 };
                    }
                }
            });
            roverCommands = [];
        },
    };
};

export { explorePlateau, initialiseRover };
