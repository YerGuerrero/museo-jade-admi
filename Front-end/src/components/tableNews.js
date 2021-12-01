import React from "react";


const TableNews= (props)=>{
    return (
        <div className="table">
            <table className="tableNews" cellSpacing="0">
                <thead>
                    <tr className="labels">
                        <th style={{width:"5%"}} className= "text-center">ID</th>
                        <th style={{width:"20%"}} className= "text-center">Título</th>
                        <th style={{width:"40%"}} className= "text-center">Descripción</th>
                        <th style={{width:"20%"}} className= "text-center">URL Imagen</th>
                    </tr>
                </thead>
                <tbody>
                {props.news!== null?
                    props.news.data.map(news=>{
                        return(
                                <tr
                                key={news.id}
                                className=""
                                >
                                    <td className="idTable">{news.id}</td>
                                    <td className="titleTable">{news.titulo}</td>
                                    <td className="descriptionTable">{news.descripcion}</td>
                                    <td className="imageTable">{news.imagen}</td>
                                </tr>
                                );
                            }):<div/>
                }
                </tbody>
            </table>      
        </div>
    );
}

export default TableNews;