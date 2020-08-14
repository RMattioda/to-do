import React from 'react'
import Menu from '../menu/Menu'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import PageHeader from '../../components/PageHeader/PageHeader'

export default props =>{
    return (
        <>
            <Menu />
            <PageWrapper>
            <div>
                <h1>sobre</h1>
            </div>
                <PageHeader
                    name = 'Sobre'
                    small = 'nós'
                />

            <p>Este foi um app criado para testar uma aplicação react com redux utilizando
                como ideia um quadro de to-dos
            </p>

            <h2>Criado por</h2>
            <p>Rodrigo Mattioda</p>
            <a href='https://github.com/rmattioda'>https://github.com/rmattioda</a>
            </PageWrapper>
        </>
    )
}