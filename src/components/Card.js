import React, { useContext } from 'react'
import { LinkContext } from '../context/LinkContext';

export const Card = ({id, title, url}) => {

    const { deleteLink } = useContext( LinkContext );

    return (
        <div className="card">
            <div className="card-description">
                <h3>{title}</h3>
                <p>{url}</p>
            </div>

            <button 
                className="btn-delete"
                onClick={() => deleteLink(id) }
            >
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}
