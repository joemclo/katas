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
        grid: getCoordinates(gridSizeString),
        rover: {
            location: getCoordinates(roverLocationString),
            commands: getCommands(roverCommandString),
        },
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

const getRoverInitialState = (roversString) => {
    const [rover1State, rover1Commands, rover2State, rover2Commands] = roversString.split('\n');

    return [
        {
            location: getCoordinates(rover1State),
            commands: getCommands(rover1Commands),
        },
        {
            location: getCoordinates(rover2State),
            commands: getCommands(rover2Commands),
        },
    ];
};

export { rovers, commandParser, getRoverInitialState };
