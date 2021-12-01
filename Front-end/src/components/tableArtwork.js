import React from "react";


const TableArtWorks= (props)=>{
    return (
        <div className="table">
            <table className="tableArtWorks" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"5%"}} className= "text-center">ID</th>
                        <th style={{width:"22%"}}className= "text-center">Título</th>
                        <th style={{width:"39%"}} className= "text-center">Descripción</th>
                        <th style={{width:"18%",marginLeft:"-0.5em"}} className= "text-center">Imagen</th>
                        <th style={{width:"13%"}} className= "text-center">ID Exhibición</th>
                    </tr>
                </thead>
                <tbody>
                {props.artworks!== null?
                    props.artworks.data.map(artwork=>{
                        return(
                                <tr key={artwork.id} className="">
                                    <td className="idTable">{artwork.id}</td>
                                    <td className="titleTableArtWork">{artwork.titulo}</td>
                                    <td className="descriptionTableArtWork">{artwork.descripcion}</td>
                                    <td className="imageTableArtWork">{artwork.imagen}</td>
                                    <td className="idTable">{artwork.id_exhibicion}</td>
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableArtWorks;