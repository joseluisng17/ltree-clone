import React, { useContext } from 'react'
import { LinkContext } from '../context/LinkContext';
import { Link } from './Link';

export const ContenedorLinkTree = () => {

    const { linkState } = useContext( LinkContext );
    const { links } = linkState;

    return (
        <div className="contenedor-links-tree">

            {links.map( link => (
                <Link 
                    key={link.id}
                    {...link}
                />
            ))}
           
        </div>
    )
}
