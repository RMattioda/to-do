import React from 'react'
import './Todos.css'
import CardPanel from '../../components/CardPanel/CardPanel';
import Card from '../../components/Card/Card';

export default props => {

    function renderCard(){
        const list = props.list || [];
        return list.map(item => (
            <div key={item.id}>
                <Card
                    item={item}
                    handleMarkAsDone={props.handleMarkAsDone}
                    handleMarkAsPending={props.handleMarkAsPending}
                    handleRemove={props.handleRemove}
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