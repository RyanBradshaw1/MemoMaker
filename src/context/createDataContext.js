import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {

    // call create context
    const Context = React.createContext();

    // generic provider component to manage different types of resources
    // manage state through useReducer hook
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addMemo: (dispatch) => { return () => {} } }
        // key === 'addMemo'
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            // state and actions available to all child components
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider };
};