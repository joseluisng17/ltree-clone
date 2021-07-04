import React, { useContext } from 'react';
import { LinkContext } from '../context/LinkContext';
import { Card } from './Card';

export const ContenidoCard = () => {

    const { linkState } = useContext( LinkContext );
    const { links } = linkState;

    return (
        <div className="contenido-card">

            {links.map( link => (
                <Card
                    key={link.id}
                    {...link}
                />
            ))}
            
        </div>
    )
}
