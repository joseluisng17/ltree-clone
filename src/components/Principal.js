import React from 'react'
import { ContenedorLinkTree } from './ContenedorLinkTree'
import { ContenidoCard } from './ContenidoCard'
import { FormTree } from './FormTree'
import { imagenes } from '../assets/imagenes';

export const Principal = () => {
    return (
        <>
            <header>
                <h1 className="titulo">linktree<span> by josé luis najar</span></h1>
            </header>

            <div className="contenedor-principal">

                <div className="contenedor">
                    
                    <FormTree />

                    <ContenidoCard />

                </div>

                <div className="contenedor">
                    <div className="contenedor-tree">

                        <div className="contenedor-img">
                            <img src={imagenes.CVportafolio} alt="foto perfil" className="img-perfil"/>
                            <p>José Luis Najar</p>
                        </div>

                       <ContenedorLinkTree />

                        <div className="red-sociales">
                            <a className="btn-redsocial" target="_blank" href="https://www.facebook.com/jluisnajarglez"><i className="fab fa-facebook"></i></a>
                            <a className="btn-redsocial"target="_blank" href="https://github.com/joseluisng17"><i className="fab fa-github"></i></a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
