import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalDeleteEvents = () => {
      const [IDEvents,setIDEvents]= useState();
      
      useEffect(()=>{
        const callback = (e) => { 
            const modalDeleteEvents= document.getElementById("modalDeleteEvents");
            modalDeleteEvents.style.visibility="visible";                    
        };       
        document.addEventListener('deleteModalEvents', callback);
        
        const callbackClose = (e) => { 
          const modalDeleteEvents= document.getElementById("modalDeleteEvents");
          modalDeleteEvents.style.visibility="hidden";                    
        };       
        document.addEventListener('closeDeleteModal', callbackClose);
      })

      function close() {
          const modalDeleteEvents= document.getElementById("modalDeleteEvents");
          modalDeleteEvents.style.visibility="hidden";
      };

      const deleteEvents = () => { // Esta función se hace cuando el botón de guardar en los modales
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteEvents', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDEvents
            }
          )
        };
        fetch('http://localhost:5000/post_deleteEvents', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeDeleteModal"))
      };

        
    

    return (
        <div id="modalDeleteEvents" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Eliminar evento</h1>
                <input type="text" id="eventsIDDelete" placeholder="ID del evento a borrar" onInput={(e) => {setIDEvents(e.target.value)}}></input><br></br>
            </div> 
            <button className="btnSave" onClick={deleteEvents}>Guardar</button>
        </div>
    );
};

export default ModalDeleteEvents;


