"use client";
import { useState, useRef, useEffect } from "react";

const UseRefTeste = () => {
    const [name, setName] = useState("");

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello! My name is {name}</p>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default UseRefTeste;