import React from 'react'
import './Todos.css'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch(document.getElementById('todoText').value) 
            : props.handleAdd([document.getElementById('todoText').value, 
            document.getElementById('todoColor').value,
            document.getElementById('todoFont').value]);
        }else if(e.key === 'Escape'){

        }
    }

    return (
        <div className="">
            <div className="col-xs-12 col-sm-9 col-md-10 TodoForm">
                <input id="todoText" name='description' className="form-control FormInput"
                 placeholder="Adicione uma nova tarefa ou pesquise" value={props.value}
                 onKeyUp={keyHandler}
                 onChange={
                     () => props.handleChange(document.getElementById('todoText').name,
                     document.getElementById('todoText').value)
                    }
                />
                <div className="searchAndAddDiv">
                    <button className="btn btn-primary searchAndAdd" 
                    onClick={
                        function(e){
                            props.handleAdd([document.getElementById('todoText').value, 
                            document.getElementById('todoColor').value,
                            document.getElementById('todoFont').value]);
                        }
                    }><i className='fas fa-plus'></i></button>

                    <button className="btn btn-primary searchAndAdd" 
                    onClick={
                        function(e){
                            props.handleSearch(document.getElementById('todoText').value);
                        }
                    }><i className='fas fa-search'></i></button>
                </div>
            </div>

            <div className="col-xs-12 col-sm-9 col-md-10 FormDiv" >
                <label className='labelField'><input id="todoColor" 
                        className="inputColor"
                        onChange={
                            () => props.handleChange(document.getElementById('todoColor').name,
                            document.getElementById('todoColor').value)}
                    name='color'
                    type='color'
                    value={props.color} /> Escolha uma cor para o post-it</label>
                    
                <label className='labelField'>
                    <input id="todoFont" className="inputColor"
                    type='color' 
                    name='fontcolor'
                    onChange={() => props.handleChange(document.getElementById('todoFont').name,
                            document.getElementById('todoFont').value)}
                    value={props.fontcolor}
                    /> Escolha uma cor para a letra do post-it</label>
            </div>
        </div>

        
    )
}