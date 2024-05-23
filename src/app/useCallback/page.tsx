"use client"
import { SetStateAction, useState, useEffect, useCallback } from "react";
import Todos from "./Todos";

const UseEffectTeste = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = async () => {
        setCount((c) => c + 1);
    };

    //Ele deixa a função já renderizada e por isso não precisa atualizar a página para carregar o compenente
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default UseEffectTeste;
