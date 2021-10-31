import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalCreateTours = () => {
    const [descriptionTours,setDescriptionTours]= useState();
    const [titleTours,setTitleTours]= useState();
    const [imageTours,setImageTours]= useState();
    const [urlTours,setUrlTours]= useState();
    
    useEffect(()=>{
      const callback = (e) => { 
          const modalCreateTours= document.getElementById("modalCreateTours");
          modalCreateTours.style.visibility="visible";                    
      };       
      document.addEventListener('createModalTours', callback);

      const callbackClose = (e) => { 
        const modalCreateTours= document.getElementById("modalCreateTours");
        modalCreateTours.style.visibility="hidden";                    
      };       
      document.addEventListener('closeCreateModal', callbackClose);
    })

    function close() {
        const modalCreateTours= document.getElementById("modalCreateTours");
        modalCreateTours.style.visibility="hidden";
    };

    const createTours = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "titulo": titleTours,
              "descripcion": descriptionTours,
              "urltour": urlTours,
              "imagen": imageTours
              
            }
          )
        };
        fetch('http://localhost:5000/post_createTours', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeCreateModal"))
        };

  return (
      <div id="modalCreateTours" className="modalContainer">
          <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
          <div id= "info" >
              <h1>Añadir tour</h1>
              <input type="text" id="toursName" placeholder="Titulo del tour" onInput={(e) => {setTitleTours(e.target.value)}}></input><br></br>
              <div id="info1">
                <input type="text" id="toursImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageTours(e.target.value)}}></input><br></br>
                <input type="text" id="toursUrl" placeholder="Ruta del tour" onInput={(e) => {setUrlTours(e.target.value)}}></input><br></br>
              </div>
              <textarea type="text" id="toursDescription" rows="4" cols="50" placeholder="Descripción del tour" onInput={(e) => {setDescriptionTours(e.target.value)}}></textarea><br></br>
          </div> 
          <button className="btnSave" onClick={createTours}>Guardar</button>
      </div>
  );
};

export default ModalCreateTours;


