import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const HomeAdmin = () => {

    const HandleCreate=(event)=>{
        document.dispatchEvent(new CustomEvent(event))
    }
    const HandleDelete=(event)=>{
        document.dispatchEvent(new CustomEvent(event))
    }
    const HandleUpdate=(event)=>{
        document.dispatchEvent(new CustomEvent(event))
    }
    const HandleRead=(event)=>{
        document.dispatchEvent(new CustomEvent(event))
    }
    
    return(
        <div className= "homeContainer">
            <img className= "logoHomeAdmin" src="/img/logo.png" alt="Logo Museo del Jade"/>
            <div className= "section" id= "eventos">
                <div className= "title">
                    <h2> Sección Eventos </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button" onClick={()=>{HandleCreate("createModalNews")}}> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button" onClick={()=>{HandleCreate("updateModalNews")}}> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button" onClick={()=>{HandleCreate("deleteModalNews")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button" onClick={()=>{HandleCreate("readModalNews")}}>
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "section" id= "noticias">
                <div className= "title">
                    <h2> Sección Noticias </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button"> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button"> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button">
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button">
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
        </div>
        <div className= "section" id= "servicios">
                <div className= "title">
                    <h2> Sección Servicios </h2>
                </div>
                <div className= "buttonContainer">
                    <div id="create" className= "button"> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button"> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button">
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button">
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
                    <div id="create" className= "button"> 
                        <FontAwesomeIcon className="buttonIcon" icon={faPlusCircle}/>
                        <div className="buttonName"> 
                            <p> Crear </p>
                        </div>
                    </div>
                    <div id="edit" className= "button"> 
                        <FontAwesomeIcon className="buttonIcon2" icon={faEdit}/>
                        <div className="buttonName"> 
                            <p> Modificar </p>
                        </div>
                    </div>
                    <div id="delete" className= "button">
                        <FontAwesomeIcon className="buttonIcon" icon={faTrashAlt}/>
                        <div className="buttonName"> 
                            <p> Borrar </p>
                        </div>
                    </div>
                    <div id="read" className= "button">
                        <FontAwesomeIcon className="buttonIcon" icon={faSearch}/>
                        <div className="buttonName"> 
                            <p> Consultar </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
};

export default HomeAdmin;