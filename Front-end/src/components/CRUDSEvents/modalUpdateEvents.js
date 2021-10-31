import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalUpdateEvents = () => {
      const [IDEvents,setIDEvents]= useState();
      const [descriptionEvent,setDescriptionEvents]= useState();
      const [titleEvent,setTitleEvents]= useState();
      const [dateEvent,setDateEvents]= useState();
      const [hourEvent,setHourEvents]= useState();
      const [imageEvent,setImageEvents]= useState();

      useEffect(()=>{
        const callback = (e) => { 
            const modalUpdateEvents= document.getElementById("modalUpdateEvents");
            modalUpdateEvents.style.visibility="visible";                    
        };       
        document.addEventListener('updateModalEvents', callback);

        const callbackClose = (e) => { 
          const modalUpdateEvents= document.getElementById("modalUpdateEvents");
          modalUpdateEvents.style.visibility="hidden";                    
        };       
        document.addEventListener('closeUpdateModal', callbackClose);
      })

      function close() {
          const modalUpdateEvents= document.getElementById("modalUpdateEvents");
          modalUpdateEvents.style.visibility="hidden";
      };

      const updateEvents = () => { 
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateEvents', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDEvents,
              "titulo": titleEvent,
              "imagen": imageEvent,
              "fecha": dateEvent,
              "hora": hourEvent,
              "descripcion": descriptionEvent,
            }
          )
        };
        fetch('http://localhost:5000/post_updateEvents', requestOptions)
          .then(response => response.json())
          document.dispatchEvent(new CustomEvent("closeUpdateModal"))
        };

    return (
        <div id="modalUpdateEvents" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Modificar evento</h1>
                <input type="text" id="eventsID" placeholder="ID del evento a modificar" onInput={(e) => {setIDEvents(e.target.value)}}></input><br></br>
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
            <button className="btnSave" onClick={updateEvents}>Guardar</button>
        </div>
    );
};

export default ModalUpdateEvents;


