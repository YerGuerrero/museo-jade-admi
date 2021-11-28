import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalUpdateExhibitions = () => {
      const [descriptionExhibitions,setDescriptionExhibitions]= useState();
      const [titleExhibitions,setTitleExhibitions]= useState();
      const [imageExhibitions,setImageExhibitions]= useState();
      const [IDExhibitions,setIDExhibitions]= useState();
      const [typeExhibitions,setTypeExhibitions]= useState();

      useEffect(()=>{
        const callback = (e) => { 
            const modalUpdateExhibitions= document.getElementById("modalUpdateExhibitions");
            modalUpdateExhibitions.style.visibility="visible";                    
        };       
        document.addEventListener('updateModalExhibitions', callback);

        const callbackClose = (e) => { 
          const modalUpdateExhibitions= document.getElementById("modalUpdateExhibitions");
          modalUpdateExhibitions.style.visibility="hidden";
          document.getElementById('exhibitionsIDDelete').value = '';
          document.getElementById('exhibitionsName').value = '';
          document.getElementById('exhibitionsImage').value = '';
          document.getElementById('ExhibitionsType').value = '';
          document.getElementById('exhibitionsDescription').value = '';                     
        };       
        document.addEventListener('closeUpdateModal', callbackClose);
      })

      function close() {
          const modalUpdateExhibitions= document.getElementById("modalUpdateExhibitions");
          modalUpdateExhibitions.style.visibility="hidden";
      };

      const updateExhibitions = () => { 
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateExhibitions', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDExhibitions,
              "titulo": titleExhibitions,
              "descripcion": descriptionExhibitions,
              "imagen": imageExhibitions,
              "tipo": typeExhibitions,
            }
          )
        };
        fetch('http://localhost:5000/post_updateExhibitions', requestOptions)
          .then(response => response.json())
          document.dispatchEvent(new CustomEvent("closeUpdateModal"))
        };

    

    return (
        <div id="modalUpdateExhibitions" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Modificar exhibición</h1>
                <div id="info1">
                  <input type="text" id="exhibitionsIDDelete" placeholder="ID de la exhibición a modificar" onInput={(e) => {setIDExhibitions(e.target.value)}}></input><br></br>
                  <input type="text" id="exhibitionsName" placeholder="Titulo de la exhibición" onInput={(e) => {setTitleExhibitions(e.target.value)}}></input><br></br>
                </div>
                <div id="info1">
                  <input type="text" id="exhibitionsImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageExhibitions(e.target.value)}}></input><br></br>
                  <input type="text" id="ExhibitionsType" placeholder="Tipo de exhibición" onInput={(e) => {setTypeExhibitions(e.target.value)}}></input><br></br>
                </div>
                
                <textarea type="text" id="exhibitionsDescription" rows="4" cols="50" placeholder="Descripción de la exhibición" onInput={(e) => {setDescriptionExhibitions(e.target.value)}}></textarea><br></br>
            </div> 
            <button className="btnSave" onClick={updateExhibitions}>Guardar</button>
        </div>
    );
};

export default ModalUpdateExhibitions;


