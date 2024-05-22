"use client"
import { SetStateAction, useState, useEffect, useCallback } from "react";
import Todos from "./Todos";

const UseEffectTeste = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    //Sempre que for usar o useEffect, tem que ser passado uma lista para ele ou ele vai atualizar a página sempre que ele mudar
    //Quando é passado uma lista, ele só vai atualizar quando um item desta lista mudar

    const increment = async () => {
        setCount((c) => c + 1);
    };

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
