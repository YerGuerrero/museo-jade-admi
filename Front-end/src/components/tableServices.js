import React from "react";


const TableServices= (props)=>{
    return (
        <div className="table">
            <table className="tableServices" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"24%"}} className= "text-center">ID</th>
                        <th style={{width:"21%"}} className= "text-center">Título</th>
                        <th style={{width:"40%"}} className= "text-center">Tipo</th>
                        <th style={{width:"20%"}} className= "text-center">URL Imagen</th>
                    </tr>
                </thead>
                <tbody>
                {props.services!== null?
                    props.services.data.map(service=>{
                    console.log(service)
                        return(
                                <tr
                                key={service.id}
                                className=""
                                style={{verticalAlign: "baseline"}}
                                >
                                    <td className="idTableServices">{service.id}</td>
                                    <td className="titleTableServices">{service.titulo}</td>
                                    <td className="typeTableServices">{service.tipo}</td>
                                    <td className="imageTableServices">{service.imagen}</td>
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableServices;