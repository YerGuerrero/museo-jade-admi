import React from "react";


const TableExhibitions= (props)=>{
    return (
        <div className="table">
            <table className="tableExhibitions" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"5%"}} className= "text-center">ID</th>
                        <th style={{width:"22%"}} className= "text-center">Título</th>
                        <th style={{width:"39%"}} className= "text-center">Descripción</th>
                        <th style={{width:"18%",marginLeft:"-0.5em"}} className= "text-center">URL Imagen</th>
                        <th style={{width:"13%",marginLeft:"2em"}} className= "text-center">Tipo </th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                {props.exhibitions!== null?
                    props.exhibitions.data.map(exhibition=>{
                        return(
                                <tr
                                key={exhibition.id}
                                className=""
                                >
                                    <td className="idTable">{exhibition.id}</td>
                                    <td className="titleTableExhibitions">{exhibition.titulo}</td>
                                    <td className="descriptionTableExhibitions">{exhibition.descripcion}</td>
                                    <td className="imageTableExhibitions">{exhibition.imagen}</td>
                                    <td className="typeTableExhibitions">{exhibition.tipo}</td>                                    
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableExhibitions;