import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalCreateExhibitions = () => {
    const [descriptionExhibitions,setDescriptionExhibitions]= useState();
    const [titleExhibitions,setTitleExhibitions]= useState();
    const [imageExhibitions,setImageExhibitions]= useState();
    const [typeExhibitions,setTypeExhibitions]= useState();
    
    useEffect(()=>{
      const callback = (e) => { 
          const modalCreateExhibitions= document.getElementById("modalCreateExhibitions");
          modalCreateExhibitions.style.visibility="visible";                    
      };       
      document.addEventListener('createModalExhibitions', callback);

      const callbackClose = (e) => { 
        const modalCreateExhibitions= document.getElementById("modalCreateExhibitions");
        modalCreateExhibitions.style.visibility="hidden";                    
      };       
      document.addEventListener('closeCreateModal', callbackClose);
    })

    function close() {
        const modalCreateExhibitions= document.getElementById("modalCreateExhibitions");
        modalCreateExhibitions.style.visibility="hidden";
    };

    const createExhibitions = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "titulo": titleExhibitions,
              "descripcion": descriptionExhibitions,
              "imagen": imageExhibitions,
              "tipo": typeExhibitions,
              
            }
          )
        };
        fetch('http://localhost:5000/post_createExhibitions', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeCreateModal"))
        };

  return (
      <div id="modalCreateExhibitions" className="modalContainer">
          <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
          <div id= "info" >
              <h1>Añadir exhibición</h1>
              <input type="text" id="ExhibitionsName" placeholder="Titulo de la exhibición" onInput={(e) => {setTitleExhibitions(e.target.value)}}></input><br></br>
              <div id="info1">
                <input type="text" id="ExhibitionsImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageExhibitions(e.target.value)}}></input><br></br>
                <input type="text" id="ExhibitionsType" placeholder="Tipo de exhibición" onInput={(e) => {setTypeExhibitions(e.target.value)}}></input><br></br>
              </div>
              <textarea type="text" id="ExhibitionsDescription" rows="4" cols="50" placeholder="Descripción de la exhibición" onInput={(e) => {setDescriptionExhibitions(e.target.value)}}></textarea><br></br>
          </div> 
          <button className="btnSave" onClick={createExhibitions}>Guardar</button>
      </div>
  );
};

export default ModalCreateExhibitions;


