const rovers = (commandsString) => {
    const [_, initialPosition, commands] = commandsString.split('\n');

    let direction = 'N';

    commands.split('').forEach((command) => {
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

const commandParser = (commandString) => {
    const [gridSizeString, roverLocationString = '', roverCommandString] = commandString.split('\n');

    return {
        gridSize: getCoordinates(gridSizeString),
        roverLocation: getCoordinates(roverLocationString),
        roverCommands: getCommands(roverCommandString),
    };
};

const getCommands = (roverCommandString = '') => {
    return roverCommandString.split(' ');
};

const getCoordinates = (coordinatesString) => {
    const [x, y, direction] = coordinatesString.split(' ');

    return {
        x: parseInt(x),
        y: parseInt(y),
        direction,
    };
};

export { rovers, commandParser };
