import React from 'react'
import './Card.css'

export default ({item, handleMarkAsDone, handleMarkAsPending, handleRemove})=> {
    return (
        <div className='Card' 
        style={
            {
                backgroundColor: `${item.color}`,
                color: `${item.fontcolor}`,
            }
            }>
            <p className={item.done ? ' markAsDone' : ''}>{item.description}</p>

            <div className='buttonDiv'>
                {!item.done && (
                    <button className='button green'
                        onClick={()=> handleMarkAsDone(item)}>
                        <i style={{
                            color: 'white',
                        }} className='fas fa-check'></i>
                    </button>
                )}
                {item.done && (
                    <button className='button yellow'
                        onClick={()=> handleMarkAsPending(item)}>
                        <i style={{
                            color: 'white',
                        }} className='fas fa-undo-alt'></i>
                    </button>
                )}

                <button className='button red'
                    onClick={()=> handleRemove(item)}>
                    <i style={{
                        color: 'white',
                    }} className='far fa-trash-alt'></i>
                </button>

            </div>
        </div>
    )
}