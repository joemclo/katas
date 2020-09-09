import { getInitialState } from './commandParser';
import { moveRover } from './rover';

export const stringifyRoversState = ({ rovers }) => {
    return rovers.reduce((roversString, rover) => {
        if (roversString) {
            roversString += '\n';
        }

        return `${roversString}${rover.location.x} ${rover.location.y} ${rover.location.direction}`;
    }, '');
};

export const explorePlateau = (rawStringState) => {
    const initialState = getInitialState(rawStringState);

    const state = {
        ...initialState,
        rovers: initialState.rovers.map((rover) => {
            return {
                location: moveRover(rover.location, rover.commands, initialState.grid),
            };
        }),
    };

    return stringifyRoversState(state);
};
