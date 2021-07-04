import React from 'react'

export const Error = ({mensaje}) => {
    return (
        <div className="mensaje-error">
            <p className="parrafo-error">{mensaje}</p>
        </div>
    )
}
