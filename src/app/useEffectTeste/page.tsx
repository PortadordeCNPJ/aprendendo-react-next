"use client"
import { SetStateAction, useState, useEffect } from "react";

const UseEffectTeste = () => {
    const [items, setItems] = useState([]);
    const [resourceType, setResourceType] = useState("post");

    //Sempre que for usar o useEffect, tem que ser passado uma lista para ele ou ele vai atualizar a página sempre que ele mudar
    //Quando é passado uma lista, ele só vai atualizar quando um item desta lista mudar
    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${resourceType}`
            );
            const responseJSON = await response.json();

            setItems(responseJSON);
        };
        fetchResourceTypes();
    }, [resourceType]);

    
    //componetDidMount só deixa o componente ser executado uma vez
    // useEffect(() => {
    //     // componentDidMount
    //     console.log("componentDidMount");

    //     return () => {
    //         // componetWillUnmount
    //         // Essa função sempre vai ser executada sempre que a função de componentDidMount for executada 
    //         console.log('componentWillUnmount');
    //     };
    // }, []);

    const changeResourceType = (resourceType: SetStateAction<string>) => {
        setResourceType(resourceType);
    };

    return (
        <div>
            <h1>{resourceType}</h1>
            <div>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>todos</button>
            </div>
            <div>
                {items.map((item) => (
                <p>{item.id}</p>
            ))}
            </div>
        </div >
    );
};

export default UseEffectTeste
