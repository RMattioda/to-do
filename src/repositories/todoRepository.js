import URL from '../config/config'

const URL_TODOS = `${URL.URL_BACKEND}/todos`;

async function getTodos(description){
    const search = description ? `&description_like=${description}` : ''
    const respostaDoServer = await fetch(`${URL_TODOS}?_sort=createdAt&_order=desc${search}`);
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados');
}

async function createTodo(obj){
    const respostaDoServer = await fetch(URL_TODOS, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify(obj),
      });
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível cadastrar os dados');
}

async function deleteTodo(id){
  const respostaDoServer = await fetch(`${URL_TODOS}/${id}`, {
      method: 'DELETE',
    });
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Não foi possível cadastrar os dados');
}

async function updateTodo(obj){
  const respostaDoServer = await fetch(`${URL_TODOS}/${obj.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(obj),
    });
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Não foi possível cadastrar os dados');
}

export default {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
  };