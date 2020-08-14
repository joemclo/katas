const getInitialState = (commandString) => {
    const splitMarker = commandString.indexOf('\n');
    const gridSizeString = commandString.substring(0, splitMarker > -1 ? splitMarker : undefined);
    const roversString = commandString.substring(splitMarker + 1);

    return {
        grid: getCoordinates(gridSizeString),
        rovers: getRoversInitialState(roversString),
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
