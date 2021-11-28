import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const HomeAdmin = () => {

    const HandleEvent=(event)=>{
        document.dispatchEvent(new CustomEvent(event))
    }

    
    return(
        <div className= "homeContainer">
            <img className= "logoHomeAdmin" src="/img/logo.png" alt="Logo Museo del Jade"/>
            <div className= "section" id= "noticias">
                <div className= "title">
                    <h2> Sección Noticias </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleEvent("createModalNews")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleEvent("updateModalNews")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleEvent("deleteModalNews")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleEvent("readModalNews")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "eventos">
                <div className= "title">
                    <h2> Sección Eventos </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleEvent("createModalEvents")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleEvent("updateModalEvents")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleEvent("deleteModalEvents")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleEvent("readModalEvents")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "obras">
                <div className= "title">
                    <h2> Sección obras </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleEvent("createModalArtwork")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleEvent("updateModalArtwork")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleEvent("deleteModalArtwork")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleEvent("readModalArtwork")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "exhibiciones">
                <div className= "title">
                    <h2> Sección Exhibiciones </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleEvent("createModalExhibitions")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleEvent("updateModalExhibitions")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleEvent("deleteModalExhibitions")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleEvent("readModalExhibitions")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "tours">
                <div className= "title">
                    <h2> Sección Tours Virtuales </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleEvent("createModalTours")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleEvent("updateModalTours")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleEvent("deleteModalTours")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleEvent("readModalTours")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "services">
                <div className= "title">
                    <h2> Sección Servicios </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleEvent("createModalServices")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleEvent("updateModalServices")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleEvent("deleteModalServices")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleEvent("readModalServices")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "services">
                <div className= "title">
                    <h2> Sección Compras </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="read-purchase" className= "button" onClick={()=>{HandleEvent("readModalPurchases")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName" style={{lineHeight: "1em"}}> 
                            <p> Consultar Compras</p>
                        </div>
                    </div>
                    <div id="read-tickets" className= "button" onClick={()=>{HandleEvent("readModalTickets")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName" style={{lineHeight: "1em"}}> 
                            <p> Consultar Entradas</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default HomeAdmin;