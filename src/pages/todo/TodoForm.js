import React, { Component } from 'react'
import './Todos.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add } from './TodoActions'

class TodoForm extends Component {
    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount(){
        this.props.search();
    }

    keyHandler(e){
        if(e.key === 'Enter'){
            e.shiftKey ? this.props.search(document.getElementById('todoText').value) 
            : this.props.add([document.getElementById('todoText').value, 
            document.getElementById('todoColor').value,
            document.getElementById('todoFont').value]);
        }else if(e.key === 'Escape'){

        }
    }

    render(){
        return(
            <div className="">
            <div className="col-xs-12 col-sm-9 col-md-10 TodoForm">
                <input id="todoText" name='description' className="form-control FormInput"
                 placeholder="Adicione uma nova tarefa ou pesquise" 
                 onKeyUp={this.keyHandler}
                 onChange={this.props.changeDescription}
                 value={this.props.description}
                />
                <div className="searchAndAddDiv">
                    <button className="btn btn-primary searchAndAdd" 
                    onClick={ () => {
                            this.props.add([document.getElementById('todoText').value, 
                            document.getElementById('todoColor').value,
                            document.getElementById('todoFont').value]);
                        }
                    }><i className='fas fa-plus'></i></button>

                    <button className="btn btn-primary searchAndAdd" 
                    onClick={
                        () =>{
                            this.props.search(document.getElementById('todoText').value);
                        }
                    }><i className='fas fa-search'></i></button>
                </div>
            </div>

            <div className="col-xs-12 col-sm-9 col-md-10 FormDiv" >
                <label className='labelField'><input id="todoColor" 
                        className="inputColor"
                        onChange={this.props.changeDescription}
                    name='color'
                    type='color'
                    value={this.props.color} /> Escolha uma cor para o post-it</label>
                    
                <label className='labelField'>
                    <input id="todoFont" className="inputColor"
                    type='color' 
                    name='fontcolor'
                    onChange={this.props.changeDescription}
                    value={this.props.fontcolor}
                    /> Escolha uma cor para a letra do post-it</label>
            </div>
        </div>
        )
    }
}


const mapStateToProps = state => ({
    description: state.todo.description,
    color: state.todo.color,
    fontcolor: state.todo.fontcolor,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { changeDescription, search, add },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);