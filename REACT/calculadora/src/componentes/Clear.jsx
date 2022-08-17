import React from "react";
import '../hojas-de-estilo/Clear.css';

const Clear = (props) => (
    <div className='Clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default Clear;