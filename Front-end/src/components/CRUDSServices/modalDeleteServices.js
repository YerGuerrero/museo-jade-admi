import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalDeleteServices = () => {
      const [IDServices,setIDServices]= useState();
      
      useEffect(()=>{
        const callback = (e) => { 
            const modalDeleteServices= document.getElementById("modalDeleteServices");
            modalDeleteServices.style.visibility="visible";                    
        };       
        document.addEventListener('deleteModalServices', callback);
        
        const callbackClose = (e) => { 
          const modalDeleteServices= document.getElementById("modalDeleteServices");
          modalDeleteServices.style.visibility="hidden";
          document.getElementById('ServicesIDDelete').value = '';                   
        };       
        document.addEventListener('closeDeleteModal', callbackClose);
      })

      function close() {
          const modalDeleteServices= document.getElementById("modalDeleteServices");
          modalDeleteServices.style.visibility="hidden";
      };

        const deleteServices = () => { // Esta función se hace cuando el botón de guardar en los modales
          const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteTours', 'Accept': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(
              {
                "id": IDServices
              }
            )
          };
          fetch('http://localhost:5000/post_deleteServices', requestOptions)
            .then(response => response.json())
          
          document.dispatchEvent(new CustomEvent("closeDeleteModal"))
        };

        
    

    return (
        <div id="modalDeleteServices" className="modalContainer" style={{height:"auto"}}>
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Eliminar Servicio</h1>
                <input type="text" id="ServicesIDDelete" placeholder="ID del servicio a borrar" onInput={(e) => {setIDServices(e.target.value)}}></input><br></br>
            </div> 
            <button className="btnSave" onClick={deleteServices}>Guardar</button>
        </div>
    );
};

export default ModalDeleteServices;


