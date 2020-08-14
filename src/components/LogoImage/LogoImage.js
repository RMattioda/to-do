import React from 'react'
import imagem from '../../assets/img/todo.png'
import { Link } from 'react-router-dom';
import './LogoImage.css'

export default props => {
    return (
        <div className='logo-image'>
            <Link className="" to="/todos">
                <img src={imagem} alt='Imagem do Logo dos todos' />
            </Link>
        </div>
    )
}