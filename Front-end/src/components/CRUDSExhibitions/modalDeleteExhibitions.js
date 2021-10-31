import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalDeleteExhibitions = () => {
      const [IDExhibitions,setIDExhibitions]= useState();
      
      useEffect(()=>{
        const callback = (e) => { 
            const modalDeleteExhibitions= document.getElementById("modalDeleteExhibitions");
            modalDeleteExhibitions.style.visibility="visible";                    
        };       
        document.addEventListener('deleteModalExhibitions', callback);
        
        const callbackClose = (e) => { 
          const modalDeleteExhibitions= document.getElementById("modalDeleteExhibitions");
          modalDeleteExhibitions.style.visibility="hidden";                    
        };       
        document.addEventListener('closeDeleteModal', callbackClose);
      })

      function close() {
          const modalDeleteExhibitions= document.getElementById("modalDeleteExhibitions");
          modalDeleteExhibitions.style.visibility="hidden";
      };

        const deleteExhibitions = () => { // Esta función se hace cuando el botón de guardar en los modales
          const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteExhibitions', 'Accept': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(
              {
                "id": IDExhibitions
              }
            )
          };
          fetch('http://localhost:5000/post_deleteExhibitions', requestOptions)
            .then(response => response.json())
          
          document.dispatchEvent(new CustomEvent("closeDeleteModal"))
        };

        
    

    return (
        <div id="modalDeleteExhibitions" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Eliminar exhibición</h1>
                <input type="text" id="exhibitionsIDDelete" placeholder="ID de la exhibición a borrar" onInput={(e) => {setIDExhibitions(e.target.value)}}></input><br></br>
            </div> 
            <button className="btnSave" onClick={deleteExhibitions}>Guardar</button>
        </div>
    );
};

export default ModalDeleteExhibitions;


