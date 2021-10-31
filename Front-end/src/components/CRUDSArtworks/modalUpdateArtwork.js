import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalUpdateArtwork = () => {
      const [IdArtwork,setIdArtwork]= useState();
      const [descriptionArtwork,setDescriptionArtwork]= useState();
      const [titleArtwork,setTitleArtwork]= useState();
      const [imageArtwork,setImageArtwork]= useState();
      const [idExhibition,setIdExhibition]= useState();

      useEffect(()=>{
        const callback = (e) => { 
            const modalUpdateArtwork= document.getElementById("modalUpdateArtwork");
            modalUpdateArtwork.style.visibility="visible";                    
        };       
        document.addEventListener('updateModalArtwork', callback);

        const callbackClose = (e) => { 
          const modalUpdateArtwork= document.getElementById("modalUpdateArtwork");
          modalUpdateArtwork.style.visibility="hidden";                    
        };       
        document.addEventListener('closeUpdateModal', callbackClose);
      })

      function close() {
          const modalUpdateArtwork= document.getElementById("modalUpdateArtwork");
          modalUpdateArtwork.style.visibility="hidden";
      };

      const updateArtwork = () => { 
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateArtwork', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IdArtwork,
              "titulo": titleArtwork,
              "descripcion": descriptionArtwork,
              "imagen": imageArtwork,
              "id_exhibicion": idExhibition
            }
          )
        };
        fetch('http://localhost:5000/post_updateArtwork', requestOptions)
          .then(response => response.json())
          document.dispatchEvent(new CustomEvent("closeUpdateModal"))
        };

    return (
        <div id="modalUpdateArtwork" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Modificar obra</h1>
                <div id="info1">
                    <input type="text" id="artworkID" placeholder="ID de la obra a modificar" onInput={(e) => {setIdArtwork(e.target.value)}}></input><br></br>
                    <input type="text" id="artworkName" placeholder="Titulo de la obra" onInput={(e) => {setTitleArtwork(e.target.value)}}></input><br></br>
                </div>
                <div id="info1">
                      <input type="text" id="artworkImage" placeholder="URL de la imagen" maxLength="10" onInput={(e) => {setImageArtwork(e.target.value)}}></input><br></br>
                      <input type="text" id="artworkIdExhibition" placeholder="ID de la exhibición" maxLength="10" onInput={(e) => {setIdExhibition(e.target.value)}}></input><br></br>
                </div>
            <textarea type="text" id="artworkDescription" rows="4" cols="50" placeholder="Descripción de la obra" onInput={(e) => {setDescriptionArtwork(e.target.value)}}></textarea><br></br>
            </div> 
            <button className="btnSave" onClick={updateArtwork}>Guardar</button>
        </div>
    );
};

export default ModalUpdateArtwork;


