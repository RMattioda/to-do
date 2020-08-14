import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
import LogoImage from '../../components/LogoImage/LogoImage'

function Menu(){
    return(
        <nav className='navegacao'>
            
            <LogoImage />

            <div className='nav-itens'> 
                <Link className="" to="/todos">
                        Tarefas
                </Link>
                <Link className="" to="/sobre">
                        Sobre
                </Link>                   
            </div>
        </nav>
    )
}

export default Menu;