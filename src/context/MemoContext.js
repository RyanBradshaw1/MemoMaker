import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
    switch (action.type) {
        case 'add_memo':
            return [...state,
            {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content
            }
            ];
        case 'delete_memo':
            return state.filter((memo) => memo.id !== action.payload);
        case 'edit_memo':
            return state.map((memo) => {
                return memo.id === action.payload.id
                    ? action.payload
                    : memo
            })
        default:
            return state;
    }
};

const addMemo = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_memo', payload: { title, content } });
        if (callback) {
            callback();
        }
    }
};

const deleteMemo = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_memo', payload: id })
    };
};

const editMemo = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_memo', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    memoReducer,
    { addMemo, deleteMemo, editMemo },
    [{ title: 'TEST MEMO', content: 'TEST CONTENT', id: 1 }]
);