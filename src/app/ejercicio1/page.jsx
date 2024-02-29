import React from "react";

const Ejercicio1 = () => {

    console.log('hola')

    const newArray = new Array(100).fill("hola");

    console.log(newArray)

    return (
        <div>{newArray.map((item, i) =>{
            return(
                <p key={i} className="flex flex-col">hola</p>
            )
        })}</div>
    );
}

export default Ejercicio1;