import { useState, useReducer } from "react";
import { initialCounter } from "../globalState";
import { counterReducer } from "../globalState";

export const Contact = () => {


    const [state, dispatch] = useReducer(counterReducer, initialCounter())

    console.log(state)

    /*
        USESTATE
        const [counter, setCounter] = useState({ contador: 0 })

        setCounter(counter + 10)
    */

    return (
        <>
            <h1>Hola desde Contact</h1>
            <a href="https://google.com" target="blank">Ir a google</a>

            <div>
                <h2>Reducer counter</h2>
                <h3>{state.contador}</h3>
                <h2>{state.name}</h2>
                <h2>{state.fav}</h2>
                <div>

                    <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
                    <button onClick={() => dispatch({ type: "RESET" })}>0</button>
                    <button onClick={() => dispatch({ type: "PLUSTEN" })}>+10</button>
                    <button onClick={() => dispatch({ type: "MULTIPLYBYTWO" })}>x2</button>
                    <button onClick={() => dispatch({ type: "CHANGE_NAME" })} >Cambie name</button>
                    <button onClick={() => dispatch({ type: "ADD_FAV" })}>add</button>

                </div>
            </div>
        </>
    )
}