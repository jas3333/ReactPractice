import { useState, createContext, useReducer } from 'react';
import { reducer } from './utils/reducer';
import { cats } from './data';

import './index.css';

import List from './components/List';
import Form from './components/Form';
import Error from './components/Error';

export const CatContext = createContext();

const defaultState = {
    cats: [...cats],
    error: '',
    showError: false,
};

const App = () => {
    const [catName, setCatName] = useState('');
    const [catAge, setCatAge] = useState(0);
    const [state, dispatch] = useReducer(reducer, defaultState);

    const onSubmit = (event) => {
        event.preventDefault();

        if (catName && catAge) {
            const newItem = { id: Math.floor(Math.random() * 10000), name: catName, age: catAge };
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setCatName('');
            setCatAge(0);
        } else {
            dispatch({ type: 'ERROR' });
        }
    };

    const removeCat = (id) => {
        dispatch({ type: 'REMOVE_CAT', payload: id });
    };

    const resetError = () => {
        dispatch({ type: 'RESET_ERROR' });
    };

    const contextValues = {
        ...state,
        onSubmit,
        setCatAge,
        setCatName,
        catAge,
        catName,
        removeCat,
        resetError,
    };

    return (
        <CatContext.Provider value={contextValues}>
            <div className='container-col '>
                {state.showError && <Error />}
                <Form />
            </div>
            <div className='container-col'>{state.cats.length > 0 && <List />}</div>
        </CatContext.Provider>
    );
};

export default App;
