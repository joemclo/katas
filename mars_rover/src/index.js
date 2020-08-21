import { getInitialState } from './commandsParser';
import { rotate, rotationCommands } from './rotation';
import { moveRover } from './movement';

const explorePlateau = (commandsString) => {
    const { rovers, grid } = getInitialState(commandsString);

    return rovers
        .map((roverInitialState) => {
            const rover = initialiseRover(roverInitialState);
            rover.move(grid);
            return `${rover.location.x} ${rover.location.y} ${rover.location.direction}`;
        })
        .join('\n');
};

const initialiseRover = ({ location, commands }) => {
    let roverCommands = commands;

    return {
        location: { ...location },
        move: function (grid) {
            roverCommands.forEach((command) => {
                const currentDirection = this.location.direction;

                if (rotationCommands.includes(command)) {
                    this.location = { ...this.location, direction: rotate(currentDirection, command) };
                } else if (command === 'M') {
                    const newLocation = { ...this.location, ...moveRover(this.location) };

                    if (newLocation.y > grid.y || newLocation.x > grid.x || newLocation.y < 0 || newLocation.x < 0) {
                        return;
                    }

                    this.location = newLocation;
                }
            });
            roverCommands = [];
        },
    };
};

export { explorePlateau, initialiseRover };
