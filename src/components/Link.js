import React from 'react'

export const Link = ({title, url}) => {
    return (
        <a href={url} target="_blank" className="btn-tree">{title}</a>
    )
}
