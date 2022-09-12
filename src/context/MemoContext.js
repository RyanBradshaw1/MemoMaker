import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const memoReducer = (state, action) => {
    switch (action.type) {
        case 'delete_memo':
            return state.filter((memo) => memo.id !== action.payload);
        case 'edit_memo':
            return state.map((memo) => {
                return memo.id === action.payload.id
                    ? action.payload
                    : memo
            });
        case 'get_memos':
            return action.payload;
        default:
            return state;
    }
};

const getMemos = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/memos');
        dispatch({ type: 'get_memos', payload: response.data });
    };
};

const addMemo = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/memos', { title: title, content: content })
        if (callback) {
            callback();
        }
    };
};

const deleteMemo = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/memos/${id}`)
        dispatch({ type: 'delete_memo', payload: id })
    };
};

const editMemo = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/memos/${id}`, { title: title, content: content })

        dispatch({ type: 'edit_memo', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    memoReducer,
    { addMemo, deleteMemo, editMemo, getMemos },
    []
);