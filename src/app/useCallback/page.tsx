"use client"
import { SetStateAction, useState, useEffect } from "react";
import List from "./List";

const UseEffectTeste = () => {
    const [text, setItems] = useState("");
    const [resourceType, setResourceType] = useState("posts");

    //Sempre que for usar o useEffect, tem que ser passado uma lista para ele ou ele vai atualizar a página sempre que ele mudar
    //Quando é passado uma lista, ele só vai atualizar quando um item desta lista mudar

    const getItems = async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/${resourceType}`
        );
        const responseJSON = await response.json();

        return resourceType;
    };

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            <button onClick={() => setResourceType("todos")}>todos</button>

            <List getItems={getItems} />
        </div >
    );
};

export default UseEffectTeste;
