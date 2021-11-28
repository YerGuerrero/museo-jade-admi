import React from "react";


const TableTickets= (props)=>{
    return (
        <div className="table">
            <table className="tableTickets" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"10%"}} className= "text-center">ID</th>
                        <th style={{width:"30%"}} className= "text-center">Tipo</th>
                        <th style={{width:"20%"}} className= "text-center">Precio</th>
                        <th style={{width:"10%"}} className= "text-center">ID Compra</th>
                    </tr>
                </thead>
                <tbody>
                {props.tickets!== null?
                    props.tickets.data.map(ticket=>{
                    console.log(ticket)
                        return(
                                <tr
                                key={ticket.id}
                                className=""
                                >
                                    <td className="idTable">{ticket.id}</td>
                                    <td className="typeTable">{ticket.tipo}</td>
                                    <td className="priceTable">{ticket.precio}</td>
                                    <td className="idTable">{ticket.id_compra}</td>
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableTickets;