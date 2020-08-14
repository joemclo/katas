const getInitialState = (commandString) => {
    const grid = getGridState(commandString.split('\n')[0]);

    const splitMarker = commandString.indexOf('\n');
    const roversString = commandString.substring(splitMarker + 1);
    const rovers = getRoversInitialState(roversString);

    return {
        grid,
        rovers,
    };
};

const getCommands = (roverCommandString = '') => {
    return roverCommandString.split('');
};

const getCoordinates = (coordinatesString) => {
    const [x, y, direction] = coordinatesString.split(' ');

    return {
        x: parseInt(x),
        y: parseInt(y),
        direction,
    };
};

const getGridState = (gridSizeString) => {
    return getCoordinates(gridSizeString);
};

const getRoversInitialState = (roversString) => {
    const roverArray = roversString.split('\n');

    const parsedRovers = roverArray.reduce((acc, value, index) => {
        if (index % 2) {
            acc[Math.floor(index / 2)].commands = getCommands(value);
        } else {
            acc.push({
                location: getCoordinates(value),
            });
        }

        return acc;
    }, []);

    return parsedRovers;
};

export { getInitialState, getRoversInitialState };
