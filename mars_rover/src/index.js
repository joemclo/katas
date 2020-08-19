import { getInitialState } from './commandsParser';
import { rotate, rotationCommands } from './rotation';
import { moveRover } from './movement';

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
                    this.location = { ...this.location, ...moveRover(this.location) };
                }
            });
            roverCommands = [];
        },
    };
};

export { explorePlateau, initialiseRover };
