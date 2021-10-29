import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalCreateEvents = () => {
    const [descriptionEvent,setDescriptionEvents]= useState();
    const [titleEvent,setTitleEvents]= useState();
    const [dateEvent,setDateEvents]= useState();
    const [hourEvent,setHourEvents]= useState();
    const [imageEvent,setImageEvents]= useState();
    
    useEffect(()=>{
      const callback = (e) => { 
          const modalCreateEvents= document.getElementById("modalCreateEvents");
          modalCreateEvents.style.visibility="visible";                    
      };       
      document.addEventListener('createModalEvents', callback);

      const callbackClose = (e) => { 
        const modalCreateEvents= document.getElementById("modalCreateEvents");
        modalCreateEvents.style.visibility="hidden";                    
      };       
      document.addEventListener('closeCreateModal', callbackClose);
    })

    function close() {
        const modalCreateEvents= document.getElementById("modalCreateEvents");
        modalCreateEvents.style.visibility="hidden";
    };

    const createEvents = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "titulo": titleEvent,
              "imagen": imageEvent,
              "fecha": dateEvent,
              "hora": hourEvent,
              "descripcion": descriptionEvent
            }
          )
        };
        fetch('http://localhost:5000/post_createEvents', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeCreateModal"))
        };

  return (
    <div id="modalCreateEvents" className="modalContainer">
        <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
        <div id= "info" >
            <h1>Añadir evento</h1>
            <div id="info1">
                <input type="text" id="eventsName" placeholder="Titulo del evento" onInput={(e) => {setTitleEvents(e.target.value)}}></input><br></br>
                <input type="text" id="eventsImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageEvents(e.target.value)}}></input><br></br>
            </div>
            <div id="info1">
                <input type="text" id="eventsDate" placeholder="Fecha del evento, formato: 01/01/2000" maxLength="10" onInput={(e) => {setDateEvents(e.target.value)}}></input><br></br>
                <input type="text" id="eventsHour" placeholder="Hora del evento, formato: 10:00 a.m." maxLength="10" onInput={(e) => {setHourEvents(e.target.value)}}></input><br></br>
            </div>
            <textarea type="text" id="eventsDescription" rows="4" cols="50" placeholder="Descripción del evento" onInput={(e) => {setDescriptionEvents(e.target.value)}}></textarea><br></br>
        </div> 
      <button className="btnSave"  onClick={createEvents}>Guardar</button>
    </div>
  );
};

export default ModalCreateEvents;


