import React, {useState, useEffect} from 'react'
import Menu from '../menu/Menu'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../../components/PageWrapper/PageWrapper.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import todoRepository from '../../repositories/todoRepository'


export default props => {

    const valoresIniciais = {
        description: '',
        createdAt: '',
        done: '',
        color: '#9ACD32',
        fontcolor: '#FFF',
    }

    const [state, setState] = useState(valoresIniciais);

    const [todoState, setTodoState] = useState([]);

    const [trigger, setTrigger] = React.useState(false);

    function clearForm(){
        setState({...valoresIniciais});
    }

    useEffect(() => {
        todoRepository.getTodos()
          .then((todos) => {
            setTodoState([...todos]);
            setTrigger(false);
          });
      }, [trigger]);

    function handleAdd(e){

        todoRepository.createTodo({
            description: e[0],
            color: e[1],
            fontcolor: e[2],
            createdAt: new Date(),
            done: false,
        });
        setTrigger(true);
        clearForm();
    }

    function handleChange(chave, valor){
        setState({...state, 
            [chave]: valor,
        });
    }

    function handleRemove(todo){
        todoRepository.deleteTodo(todo.id);
        setTrigger(true);
    }

    function handleMarkAsDone(todo){
        const obj = {...todo, done: true}
        todoRepository.updateTodo(obj);
        setTrigger(true);
    }

    function handleMarkAsPending(todo){
        const obj = {...todo, done: false}
        todoRepository.updateTodo(obj);
        setTrigger(true);
    }

    function handleSearch(description){
        todoRepository.getTodos(description)
            .then((todos) => {
                setTodoState([...todos]);
            })
        setTrigger(false);
    }

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
                value={state.description}
                handleAdd={handleAdd}
                handleChange={handleChange}
                handleSearch={handleSearch}
                color={state.color}
                fontcolor={state.fontcolor}
                />

            <TodoList 
                list={todoState}
                handleRemove={handleRemove}
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
                />

            </PageWrapper>
        </>
    )
}