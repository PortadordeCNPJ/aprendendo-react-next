"use client";
import { useState } from "react";

const UseRefTeste = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello! My name is {name}</p>
        </div>
    );
};

export default UseRefTeste