import React, { createContext, useReducer } from 'react';
import { types } from '../types/types';
import { linkReducer } from './linkReducer';

export const LinkContext = createContext();

const initialSate = {
    links: [
        {
            id: 1,
            title: 'EDteam',
            url: 'https://ed.team/',
        },
        {
            id: 2,
            title: 'ted',
            url: 'https://www.ted.com/',
        },
        {
            id: 3,
            title: 'twitter',
            url: 'https://twitter.com/home',
        } 
    ]
};

export const LinkProvider = ({ children }) => {

    const [linkState, dispatch] = useReducer(linkReducer, initialSate);

    const cargarLink = (link) => {

        dispatch({
            type: types.linkLoaded,
            payload: link
        });

    }

    const registrarLink = (link) => {

        dispatch({
            type: types.linkAddNew,
            payload: link
        });

    }

    const deleteLink = (id) => {
        dispatch({
            type: types.linkDeleted,
            payload: id
        });
    }

    return(
        <LinkContext.Provider value={{
            linkState,
            registrarLink,
            deleteLink
        }}>
            { children }
        </LinkContext.Provider>
    )

}