import React from "react";
import { useLocation } from "react-router";

function App(){
    let  { state } = useLocation();

    return (
        <div>
            <p className="fs-5 px-5 pt-5 fw-bold">Welcome{state ?. user ? ", " + state.user + " !" : " !"}</p>            
        </div>
    );
}

export default App;