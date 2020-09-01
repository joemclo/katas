const commandParser = (commandString) => {
    return {
        grid: getGrid(commandString),
    };
};

const getVector = (string) => {
    const [x, y, direction] = string.split(' ');

    return {
        x: parseInt(x),
        y: parseInt(y),
        direction,
    };
};

const getGrid = (gridString) => {
    return {
        ...getVector(gridString),
    };
};

const getRoverLocation = (roverString) => {
    return {
        ...getVector(roverString),
    };
};

const getRoverCommands = (commandString) => {
    return commandString.split('');
};

const getRoverState = (roverStateString) => {
    const [roverString, commandString] = roverStateString.split('\n');

    return {
        location: getRoverLocation(roverString),
        commands: getRoverCommands(commandString),
    };
};

const commandSplitter = (rawCommandString) => {
    const splitMarker = rawCommandString.indexOf('\n');
    const roversString = rawCommandString.substring(splitMarker + 1).match(/[^\n]+\n[^\n]+/g);

    return {
        gridString: rawCommandString.split('\n')[0],
        roversString,
    };
};

export { commandParser, getGrid, getRoverLocation, getRoverCommands, getRoverState, commandSplitter };
