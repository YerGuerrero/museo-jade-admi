import React from "react";


const TablePurchases= (props)=>{
    return (
        <div className="table">
            <table className="tablePurchases" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"5%"}} className= "text-center">ID</th>
                        <th style={{width:"20%"}} className= "text-center">Nombre Comprador</th>
                        <th style={{width:"20%"}} className= "text-center">Número teléfono</th>
                        <th style={{width:"20%"}} className= "text-center">Correo</th>
                        <th style={{width:"10%"}} className= "text-center">Fecha</th>
                        <th style={{width:"10%"}} className= "text-center">Cantidad Tiquetes</th>
                        <th style={{width:"10%"}} className= "text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                {props.purchases!== null?
                    props.purchases.data.map(purchase=>{
                    console.log(purchase)
                        return(
                                <tr
                                key={purchase.id}
                                className=""
                                >
                                    <td className="idTable">{purchase.id}</td>
                                    <td className="nameTable">{purchase.nombre_comprador}</td>
                                    <td className="phoneTable">{purchase.numero_telefono}</td>
                                    <td className="emailTable">{purchase.correo}</td>
                                    <td className="dateTable">{purchase.fecha}</td>
                                    <td className="quantityTable">{purchase.numero_entradas}</td>
                                    <td className="totalTable">{purchase.total}</td>
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TablePurchases;