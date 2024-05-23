"use client";
import { useState } from "react";

const ProximoeAnterior = () => {
    const [pages, setPages] = useState([]);
    const arrayPages = ["/", "/users", "/login", "/getJson/eu", "/useStateTeste", "/useEffectTeste", "/useRefTeste", "/useCallback"];

    useEffect = (() => { 
        const MudarPagina = () => {

        }
    }); 

    
    return (
        <>
            <div>
                <button>Next</button>
                <br />
                <button>Preview</button>
            </div>
        </>
    );
};

export default ProximoeAnterior;