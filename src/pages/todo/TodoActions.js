import todoRepository from '../../repositories/todoRepository'

/*
    Action creators
*/

export const changeDescription = (event) =>({
    type: 'CHANGE_DESCRIPTION',
    payload: event.target.value,
    field: event.target.name,
})

export const search = (description) => {
    const request = todoRepository.getTodos(description);
    return {
        type: 'TODO_SEARCH',
        payload: request,
    }
}

export const add = obj => {
    return dispatch => {todoRepository.createTodo(
          { description: obj[0],
            color: obj[1],
            fontcolor: obj[2],
            createdAt: new Date(),
            done: false,}
    ).then(resp => dispatch(search()));
    }
}

export const markAsDone = todo => {
    const updatedTodo = {...todo, done:true}
    return dispatch => { todoRepository
        .updateTodo(updatedTodo)
        .then(() => dispatch(search()));
  }
}

export const markAsPending = todo => {
    const updatedTodo = {...todo, done:false}
    return dispatch => { todoRepository
        .updateTodo(updatedTodo)
        .then(() => dispatch(search()));
  }
}

export const remove = id => {
    return dispatch => { todoRepository
        .deleteTodo(id)
        .then(() => dispatch(search()));
    }
}