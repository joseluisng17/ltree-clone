import { types } from '../types/types';

/* const initialSate = {
    links: [],
}; */

export const linkReducer = ( state, action ) => {


    switch ( action.type ) {


        case types.linkAddNew:
            return {
                ...state,
                links: [
                    ...state.links,
                    action.payload
                ]
            };


        case types.linkDeleted:
            return {
                ...state,
                links: state.links.filter(
                    e => (e.id !== action.payload)
                )
            }
        case types.linkLoaded:
            return {
                ...state,
                links: [...action.payload]
            }
        default:
            return state;
    }

}

