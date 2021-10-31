import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalDeleteArtwork = () => {
      const [IDArtwork,setIDArtwork]= useState();
      
      useEffect(()=>{
        const callback = (e) => { 
            const modalDeleteArtwork= document.getElementById("modalDeleteArtwork");
            modalDeleteArtwork.style.visibility="visible";                    
        };       
        document.addEventListener('deleteModalArtwork', callback);
        
        const callbackClose = (e) => { 
          const modalDeleteArtwork= document.getElementById("modalDeleteArtwork");
          modalDeleteArtwork.style.visibility="hidden";                    
        };       
        document.addEventListener('closeDeleteModal', callbackClose);
      })

      function close() {
          const modalDeleteArtwork= document.getElementById("modalDeleteArtwork");
          modalDeleteArtwork.style.visibility="hidden";
      };

      const deleteArtwork = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteArtwork', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDArtwork
            }
          )
        };
        fetch('http://localhost:5000/post_deleteArtwork', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeDeleteArtwork"))
      };

        
    

    return (
        <div id="modalDeleteArtwork" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Eliminar obra</h1>
                <input type="text" id="artworkIDDelete" placeholder="ID de la obra a borrar" onInput={(e) => {setIDArtwork(e.target.value)}}></input><br></br>
            </div> 
            <button className="btnSave" onClick={deleteArtwork}>Guardar</button>
        </div>
    );
};

export default ModalDeleteArtwork;


