import { getInitialState, stringifyRoversState } from './commandParser';
import { moveRover } from './rover';

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
