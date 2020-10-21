import React from 'react';
import Card from './Card';

let datos = [
    {
        title : "Products in Data Base",
        value : "135",
        color : "primary",
        icon : "fa-clipboard-list"
    },
    {
        title : "Amount in products",
        value : "$546.456",
        color : "success",
        icon : "fa-dollar-sign"
    },
    {
        title : "Cantidad de usuarios",
        value : "38",
        color : "warning",
        icon : "fa-user-check"
    }
]

function Metrica(){
    return(
        <div className="row">

            {
                datos.map((dato,i) => 
                    <Card 
                        key = {i}
                        title = {dato.title}
                        color = {dato.color}
                        value = {dato.value}
                        icon = {dato.icon}
                    />
                )
            }
          

        </div>
    )
}


export default Metrica;