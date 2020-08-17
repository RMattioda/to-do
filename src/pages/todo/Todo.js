import React from 'react'
import Menu from '../menu/Menu'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../../components/PageWrapper/PageWrapper.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


export default props => {

    return (
        <>
            <Menu />

            <PageWrapper className="PageWrapper">
            
            <div>
                <h1>Todos</h1>
            </div>

            <PageHeader 
                name = 'Tarefas'
                small = 'cadastro'
            />

            <TodoForm 
            />

            <TodoList 
            />

            </PageWrapper>
        </>
    )
}