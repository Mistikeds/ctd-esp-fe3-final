export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return { ...state, data: action.payload };
        case 'GET_DOCTOR':
            return { ...state, doctorSelected: action.payload };
        case 'ADD_FAV':
            return { ...state, favs: [...state.favs, action.payload] };
        case 'REMOVE_FAV':
            return { ...state, favs: state.favs.filter(dentist => dentist.id !== action.payload) };
        default:
            return state;
    }
};