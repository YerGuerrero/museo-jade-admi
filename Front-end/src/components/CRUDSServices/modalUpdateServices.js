import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalUpdateServices = () => {
  const [IDServices,setIDServices]= useState();
      const [titleServices,setTitleServices]= useState();
      const [imageServices,setImageServices]= useState();
      const [typeServices,setTypeServices]= useState();

      useEffect(()=>{
        const callback = (e) => { 
            const modalUpdateServices= document.getElementById("modalUpdateServices");
            modalUpdateServices.style.visibility="visible";                    
        };       
        document.addEventListener('updateModalServices', callback);

        const callbackClose = (e) => { 
          const modalUpdateServices= document.getElementById("modalUpdateServices");
          modalUpdateServices.style.visibility="hidden";
          document.getElementById('serviceID').value = '';
          document.getElementById('servicesName').value = '';
          document.getElementById('servicesType').value = '';
          document.getElementById('servicesImage').value = '';                     
        };       
        document.addEventListener('closeUpdateModal', callbackClose);
      })

      function close() {
          const modalUpdateServices= document.getElementById("modalUpdateServices");
          modalUpdateServices.style.visibility="hidden";
      };

      const updateServices = () => { 
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateServices', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDServices,
              "titulo": titleServices,
              "tipo": typeServices,
              "imagen": imageServices
            }
          )
        };
        fetch('http://localhost:5000/post_updateServices', requestOptions)
          .then(response => response.json())
          document.dispatchEvent(new CustomEvent("closeUpdateModal"))
        };

    

    return (
        <div id="modalUpdateServices" className="modalContainer" style={{height:"auto"}}>
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Modificar servicio</h1>
                <div id="info1">
                  <input type="text" id="serviceID" placeholder="ID del servicio a modificar" onInput={(e) => {setIDServices(e.target.value)}}></input><br></br>
                  <input type="text" id="servicesName" placeholder="Titulo del servicio a modificar" onInput={(e) => {setTitleServices(e.target.value)}}></input><br></br>
                </div>
                <div id="info1">
                  <input type="text" id="servicesType" placeholder="Tipo del servicio a modificar" onInput={(e) => {setTypeServices(e.target.value)}}></input><br></br>
                  <input type="text" id="servicesImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageServices(e.target.value)}}></input><br></br>
                </div>
            </div> 
            <button className="btnSave" onClick={updateServices}>Guardar</button>
        </div>
    );
};

export default ModalUpdateServices;


