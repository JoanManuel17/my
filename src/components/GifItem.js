import React from 'react'

export const GifItem = ({title, url}) => {

    return (
        <div className="card animate">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}