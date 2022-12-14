
import { useRef } from "react";
import useCounterReducer from "./counterReducer";

const useCounter = (initialState) => {
    const [state, dispatch] = useCounterReducer(initialState || { count: 1 });

    const inputRef = useRef(null);
    const userinputRef = useRef()

    const increment = () => {
        dispatch({ type: "increment" });
    };

    const decrement = () => {
        if (state.count > 0) {
            dispatch({ type: "decrement" });
        } else {
            return state.count;
        }
    };

    const reset = () => {
        dispatch({ type: "reset" });
    };

    const setValue = () => {
        if (inputRef.current.value === "") {
            return state.count;
        } else {
            dispatch({ type: "setValue", payload: Number(inputRef.current.value) });
            inputRef.current.value = "";
        }
    };

  

    return [state, increment, decrement, reset, setValue, inputRef, userinputRef];
}

export default useCounter;