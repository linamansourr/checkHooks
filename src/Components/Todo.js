import React from 'react'

export default function Todo({ task: {description, id, done}}) {
    return (
        <div>
            <div className="Todo"></div>
            <span>{description}</span>
            
        </div>
    )
}
