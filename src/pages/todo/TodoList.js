import React from 'react'
import './Todos.css'
import CardPanel from '../../components/CardPanel/CardPanel';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './TodoActions'

const TodoList = props => {

    function renderCard(){
        const list = props.list || [];
        return list.map(item => (
            <div key={item.id}>
                <Card
                    item={item}
                    handleMarkAsDone={props.markAsDone}
                    handleMarkAsPending={props.markAsPending}
                    handleRemove={props.remove}
                />
            </div>
        ))
    }
    return (
        <>
            <CardPanel>
                {renderCard()}
            </CardPanel>
        </>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { markAsDone, markAsPending, remove },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);