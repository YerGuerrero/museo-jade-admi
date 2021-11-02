import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalCreateArtwork = () => {
    const [descriptionArtwork,setDescriptionArtwork]= useState();
    const [titleArtwork,setTitleArtwork]= useState();
    const [imageArtwork,setImageArtwork]= useState();
    const [idExhibition,setIdExhibition]= useState();
    
    useEffect(()=>{
      const callback = (e) => { 
          const modalCreateArtwork= document.getElementById("modalCreateArtwork");
          modalCreateArtwork.style.visibility="visible";                    
      };       
      document.addEventListener('createModalArtwork', callback);

      const callbackClose = (e) => { 
        const modalCreateArtwork= document.getElementById("modalCreateArtwork");
        modalCreateArtwork.style.visibility="hidden";                    
      };       
      document.addEventListener('closeCreateModal', callbackClose);
    })

    function close() {
        const modalCreateArtwork= document.getElementById("modalCreateArtwork");
        modalCreateArtwork.style.visibility="hidden";
    };

    const createArtwork = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "titulo": titleArtwork,
              "descripcion": descriptionArtwork,
              "imagen": imageArtwork,
              "id_exhibicion": idExhibition
              
            }
          )
        };
        fetch('http://localhost:5000/post_createArtwork', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeCreateModal"))
        };

  return (
    <div id="modalCreateArtwork" className="modalContainer">
        <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
        <div id= "info" >
            <h1>Añadir obra</h1>
            <input type="text" id="artworkName" placeholder="Titulo de la obra" onInput={(e) => {setTitleArtwork(e.target.value)}}></input><br></br>
            <div id="info1">
                <input type="text" id="artworkImage" placeholder="URL de la imagen"  onInput={(e) => {setImageArtwork(e.target.value)}}></input><br></br>
                <input type="text" id="artworkIdExhibition" placeholder="ID de la exhibición a la que pertenece" onInput={(e) => {setIdExhibition(e.target.value)}}></input><br></br>
            </div>
            <textarea type="text" id="artworkDescription" rows="4" cols="50" placeholder="Descripción de la obra" onInput={(e) => {setDescriptionArtwork(e.target.value)}}></textarea><br></br>
        </div> 
      <button className="btnSave"  onClick={createArtwork}>Guardar</button>
    </div>
  );
};

export default ModalCreateArtwork;


