export const initialCounter = () => ({ contador: 0, name: "deimian", fav: [] });



export function counterReducer(state, action) {
    switch (action.type) {

        case "INCREMENT":
            return { ...state, contador: state.contador + 1 };
        case "DECREMENT":
            return { ...state, contador: state.contador - 1 };
        case "PLUSTEN":
            return { ...state, contador: state.contador + 10 };
        case "MULTIPLYBYTWO":
            return { ...state, contador: state.contador * 2 };
        case "RESET":
            return { ...state, contador: 0 };
        case "CHANGE_NAME":
            return { ...state, name: "Juanita " }
        case "ADD_FAV":
            return { ...state, fav: ["hola"] }
        default:
            return state;
    }
}