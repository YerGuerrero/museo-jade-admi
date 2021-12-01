import React from "react";


const TableEvents= (props)=>{
    return (
        <div className="table">
            <table className="tableEvent" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"5%"}} className= "text-center">ID</th>
                        <th style={{width:"20%"}} className= "text-center">Título</th>
                        <th style={{width:"20%",marginLeft:"-0.5em"}} className= "text-center">URL Imagen</th>
                        <th style={{width:"10%",marginLeft:"2em"}} className= "text-center">Fecha </th>
                        <th style={{width:"10%",marginLeft:"2em"}} className= "text-center">Hora</th>
                        <th style={{width:"35%"}} className= "text-center">Descripción</th>
                        
                    </tr>
                </thead>
                <tbody>
                {props.events!== null?
                    props.events.data.map(event=>{
                        return(
                                <tr
                                key={event.id}
                                className=""
                                >
                                    <td className="idTable">{event.id}</td>
                                    <td className="titleTable">{event.titulo}</td>
                                    <td className="imageTable">{event.imagen}</td>
                                    <td className="dateTable">{event.fecha}</td>
                                    <td className="hourTable">{event.hora}</td>
                                    <td className="descriptionTableEvent">{event.descripcion}</td>
                                    
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableEvents;