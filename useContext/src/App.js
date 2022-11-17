import { useState, createContext, useReducer } from 'react';
import './index.css';
import { cats } from './data';
import List from './components/List';
import Form from './components/Form';

export const CatContext = createContext();

const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newItem = [...state.cats, action.payload];
        return { ...state, cats: newItem };
    }
    return state;
};

const defaultState = {
    cats: [...cats],
    error: '',
    showError: false,
};

const App = () => {
    const [cat, setCat] = useState(cats);
    const [catName, setCatName] = useState('');
    const [catAge, setCatAge] = useState(0);
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeCat = (id) => {
        setCat(cat.filter((kitty) => kitty.id !== id));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (catName && catAge) {
            const newItem = { id: Math.floor(Math.random() * 10000), catName, catAge };
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setCat([...cats, newItem]);
            setCatName('');
            setCatAge(0);
        }
    };

    return (
        <CatContext.Provider value={{ cat, removeCat, onSubmit, setCatAge, setCatName, catAge, catName }}>
            <div className='container-col '>
                <Form />
            </div>
            <div className='container-col'>{cat.length > 0 && <List />}</div>
        </CatContext.Provider>
    );
};

export default App;
