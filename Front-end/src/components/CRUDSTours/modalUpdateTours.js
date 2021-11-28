import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalUpdateTours = () => {
      const [descriptionTours,setDescriptionTours]= useState();
      const [titleTours,setTitleTours]= useState();
      const [imageTours,setImageTours]= useState();
      const [IDTours,setIDTours]= useState();
      const [urlTours,setUrlTours]= useState();

      useEffect(()=>{
        const callback = (e) => { 
            const modalUpdateTours= document.getElementById("modalUpdateTours");
            modalUpdateTours.style.visibility="visible";                    
        };       
        document.addEventListener('updateModalTours', callback);

        const callbackClose = (e) => { 
          const modalUpdateTours= document.getElementById("modalUpdateTours");
          modalUpdateTours.style.visibility="hidden";
          document.getElementById('toursIDDelete').value = '';
          document.getElementById('toursName').value = '';
          document.getElementById('toursImage').value = '';
          document.getElementById('toursUrl').value = '';  
          document.getElementById('toursDescription').value = '';                     
        };       
        document.addEventListener('closeUpdateModal', callbackClose);
      })

      function close() {
          const modalUpdateTours= document.getElementById("modalUpdateTours");
          modalUpdateTours.style.visibility="hidden";
      };

      const updateTours = () => { 
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateTours', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDTours,
              "titulo": titleTours,
              "descripcion": descriptionTours,
              "urltour": urlTours,
              "imagen": imageTours
            }
          )
        };
        fetch('http://localhost:5000/post_updateTours', requestOptions)
          .then(response => response.json())
          document.dispatchEvent(new CustomEvent("closeUpdateModal"))
        };

    

    return (
        <div id="modalUpdateTours" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Modificar tour</h1>
                <div id="info1">
                    <input type="text" id="toursIDDelete" placeholder="ID del tour a modificar" onInput={(e) => {setIDTours(e.target.value)}}></input><br></br>
                    <input type="text" id="toursName" placeholder="Titulo del tour" onInput={(e) => {setTitleTours(e.target.value)}}></input><br></br>
                </div>
                <div id="info1">
                    <input type="text" id="toursImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageTours(e.target.value)}}></input><br></br>
                    <input type="text" id="toursUrl" placeholder="Ruta del tour" onInput={(e) => {setUrlTours(e.target.value)}}></input><br></br>
                </div>
                <textarea type="text" id="toursDescription" rows="4" cols="50" placeholder="Descripción del tour" onInput={(e) => {setDescriptionTours(e.target.value)}}></textarea><br></br>
            </div> 
            <button className="btnSave" onClick={updateTours}>Guardar</button>
        </div>
    );
};

export default ModalUpdateTours;


