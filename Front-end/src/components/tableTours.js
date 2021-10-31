import React from "react";


const TableTours= (props)=>{
    return (
        <div className="table">
            <table className="tableTours" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"5%"}} className= "text-center">ID</th>
                        <th style={{width:"16%"}} className= "text-center">Título</th>
                        <th style={{width:"21%"}} className= "text-center">Descripción</th>
                        <th style={{width:"19%",marginLeft:"-0.5em"}} className= "text-center">URL tour </th>
                        <th style={{width:"9%",marginLeft:"-0.5em"}} className= "text-center">URL imagen</th>
                    </tr>
                </thead>
                <tbody>
                {props.tours!== null?
                    props.tours.data.map(tour=>{
                    console.log(tour)
                        return(
                                <tr
                                key={tour.id}
                                className=""
                                >
                                    <td className="idTable">{tour.id}</td>
                                    <td className="titleTableTours">{tour.titulo}</td>
                                    <td className="descriptionTableTour">{tour.descripcion}</td>
                                    <td className="urlTable">{tour.urltour}</td>
                                    <td className="imageTable">{tour.imagen}</td>
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableTours;