import React from 'react'

export default props => {
    return (
        <header>
            <h2>{props.name} <small>{props.small}</small></h2>
        </header>
    )
}