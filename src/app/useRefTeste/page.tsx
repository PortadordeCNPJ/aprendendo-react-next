"use client";
import { useState, useRef, useEffect } from "react";

const UseRefTeste = () => {
    const [name, setName] = useState("");

    const previousName = useRef<string>();

    // const focusInput = () => {
    //     inputRef.current.focus();
    // };

    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (
        <div>
            <input
                // ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello! My name is {name}</p>
            {/* <button onClick={focusInput}>Focus Input</button> */}
            <p>And my name was {previousName.current}</p>
        </div>
    );
};

export default UseRefTeste;