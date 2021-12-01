import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalCreateServices = () => {
    const [titleServices,setTitleServices]= useState();
    const [imageServices,setImageServices]= useState();
    const [typeServices,setTypeServices]= useState();
    
    useEffect(()=>{
      const callback = (e) => { 
          const modalCreateServices= document.getElementById("modalCreateServices");
          modalCreateServices.style.visibility="visible";                    
      };       
      document.addEventListener('createModalServices', callback);

      const callbackClose = (e) => { 
        const modalCreateServices= document.getElementById("modalCreateServices");
        modalCreateServices.style.visibility="hidden";
        document.getElementById('servicesName').value = '';
        document.getElementById('servicesType').value = '';
        document.getElementById('servicesImage').value = ''; 
                           
      };       
      document.addEventListener('closeCreateModal', callbackClose);
    })

    function close() {
        const modalCreateServices= document.getElementById("modalCreateServices");
        modalCreateServices.style.visibility="hidden";
    };

    const createServices = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "titulo": titleServices,
              "imagen": imageServices,
              "tipo": typeServices
            }
          )
        };
        fetch('http://localhost:5000/post_createServices', requestOptions)
          .then(response => response.json())
        
        document.dispatchEvent(new CustomEvent("closeCreateModal"))
        };

  return (
      <div id="modalCreateServices" className="modalContainer" style={{height:'auto'}}>
          <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
          <div id= "info" >
              <h1>Añadir servicio</h1>
              <div id="info1">
              <input type="text" id="servicesName" placeholder="Titulo del servicio" onInput={(e) => {setTitleServices(e.target.value)}}></input><br></br>
              <input type="text" id="servicesType" placeholder="Tipo del servicio" onInput={(e) => {setTypeServices(e.target.value)}}></input><br></br>
              </div>
              <input type="text" id="servicesImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageServices(e.target.value)}}></input><br></br>
          </div> 
          <button className="btnSave" onClick={createServices}>Guardar</button>
      </div>
  );
};

export default ModalCreateServices;


