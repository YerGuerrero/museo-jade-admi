import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalDeleteTours = () => {
      const [IDTours,setIDTours]= useState();
      
      useEffect(()=>{
        const callback = (e) => { 
            const modalDeleteTours= document.getElementById("modalDeleteTours");
            modalDeleteTours.style.visibility="visible"; 
            document.getElementById('toursIDDelete').value = '';
                              
        };       
        document.addEventListener('deleteModalTours', callback);
        
        const callbackClose = (e) => { 
          const modalDeleteTours= document.getElementById("modalDeleteTours");
          modalDeleteTours.style.visibility="hidden";                    
        };       
        document.addEventListener('closeDeleteModal', callbackClose);
      })

      function close() {
          const modalDeleteTours= document.getElementById("modalDeleteTours");
          modalDeleteTours.style.visibility="hidden";
      };

        const deleteTours = () => { // Esta función se hace cuando el botón de guardar en los modales
          const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteTours', 'Accept': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(
              {
                "id": IDTours
              }
            )
          };
          fetch('http://localhost:5000/post_deleteTours', requestOptions)
            .then(response => response.json())
          
          document.dispatchEvent(new CustomEvent("closeDeleteModal"))
        };

        
    

    return (
        <div id="modalDeleteTours" className="modalContainer" style={{height:"auto"}}>
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Eliminar Tour</h1>
                <input type="text" id="toursIDDelete" placeholder="ID del tour a borrar" onInput={(e) => {setIDTours(e.target.value)}}></input><br></br>
            </div> 
            <button className="btnSave" onClick={deleteTours}>Guardar</button>
        </div>
    );
};

export default ModalDeleteTours;


