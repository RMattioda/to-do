import React from 'react'
import './CardPanel.css'

export default props => {
    return (
        <div className='CardPanel'>
            {props.children}
        </div>
    )
}