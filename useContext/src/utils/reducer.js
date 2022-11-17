export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newItem = [...state.cats, action.payload];
        console.log(newItem);
        return { ...state, cats: newItem };
    }
    if (action.type === 'REMOVE_CAT') {
        const newCatList = state.cats.filter((kitty) => kitty.id !== action.payload);
        return { ...state, cats: newCatList };
    }
    if (action.type === 'ERROR') {
        return { ...state, showError: true, error: 'Enter in all of the values...' };
    }
    if (action.type === 'RESET_ERROR') {
        return { ...state, showError: false };
    }

    return state;
};
