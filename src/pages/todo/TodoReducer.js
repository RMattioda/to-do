const inicial_state = {
    description: '',
    createdAt: '',
    done: false,
    color: '#9ACD32',
    fontcolor: '#FFF',
    list: [],
}

export default (state = inicial_state, action) => {
    switch(action.type){
        case 'CHANGE_DESCRIPTION':
            return {
                 ...state, 
                 [action.field]: action.payload,
                }
        case 'TODO_SEARCH':
            return {
                ...state,
                list: action.payload,
                description: '',
                color: '#9ACD32',
                fontcolor: '#FFF',
            }
        default: 
            return state;
    }
}