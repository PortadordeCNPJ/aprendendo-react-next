"use client";
import { useEffect, useState } from "react";

const ProximoeAnterior = () => {
    const [pages, setPages] = useState(['/', '/users', '/login', '/getJson/eu', '/useStateTeste', '/useEffectTeste', '/useRefTeste', '/useCallback']);
    const arrayPages = 

    useEffect (() => {
        const Pages = (pages);
    },[pages]
);

    return (
        <>
            <div>
                {arrayPages[0]}
                <button>Next</button>
                <br />
                <button>Preview</button>
            </div>
        </>
    );
};

export default ProximoeAnterior;