"use client";
import { use, useState } from "react";

const Counter = () => {
    // const [count, setCount]  = useState(0);
    const [state, setState] = useState({ count: 0, theme: "light" });

    const incrementCount = () => {
        setState((prevState) => {
            return {
                ...prevState,
                count: prevState.count + 1,
                theme: "dark",
            };
        });
    };
    // const incrementCount = () => {
    //     setCount((prevState) => prevState + 1)
    // }
    return (
        <>
            <div>
                <h1>{state.count}</h1>
                <button onClick={incrementCount}>Incremet</button>
            </div>
        </>
    );
};

export default Counter