const moveRover = (location, commands) => {
    return commands.reduce((updatedLocation, command) => {
        const direction = updatedLocation.direction;

        if (direction === 'N') {
            return {
                ...updatedLocation,
                y: updatedLocation.y + 1,
            };
        } else if (direction === 'E') {
            return {
                ...updatedLocation,
                x: updatedLocation.x + 1,
            };
        } else if (direction === 'W') {
            return {
                ...updatedLocation,
                x: updatedLocation.x - 1,
            };
        } else {
            return {
                ...updatedLocation,
                y: updatedLocation.y - 1,
            };
        }
    }, location);
};

export { moveRover };
