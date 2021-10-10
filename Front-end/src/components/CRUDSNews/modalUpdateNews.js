import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalUpdateNews = () => {
    const [descriptionNew,setDescriptionNews]= useState();
    const [titleNew,setTitleNews]= useState();
    const [imageNew,setImageNews]= useState();
    
    useEffect(()=>{
      const callback = (e) => { 
          const modalCreateNews= document.getElementById("modalCreateNews");
          modalCreateNews.style.visibility="visible";                    
      };       
      document.addEventListener('createModalNews', callback);
    })

    function close() {
        const modalCreateNews= document.getElementById("modalCreateNews");
        modalCreateNews.style.visibility="hidden";
    };

    const createNews = () => {
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "titulo": titleNew,
              "imagen": imageNew,
              "descripcion": descriptionNew
            }
          )
        };
        fetch('http://localhost:5000/post_createNews', requestOptions)
          .then(response => response.json())
      };

      const deleteNews = (title, image, description) => { // Esta función se hace cuando el botón de guardar en los modales
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteNews', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": 4
            }
          )
        };
        fetch('http://localhost:5000/post_deleteNews', requestOptions)
          .then(response => response.json())
      };

      const updateNews = (id,title, image, description) => { // Esta función se hace cuando el botón de guardar en los modales
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateNews', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
                "id" : 6,
                "titulo": "hola actualizado",
                "imagen": "link imagen actualizada",
                "descripcion": "Descripción actualizada",
              
            }
          )
        };
        fetch('http://localhost:5000/post_updateNews', requestOptions)
          .then(response => response.json())
      };

  

  return (
      <div id="modalCreateNews" className="modalContainer">
          <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
          <div id= "info" >
              <h1>Añadir noticia</h1>
              <div id="info1">
                <input type="text" id="newsName" placeholder="Titulo de la noticia" onInput={(e) => {setTitleNews(e.target.value)}}></input><br></br>
                <input type="text" id="newsImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageNews(e.target.value)}}></input><br></br>
              </div>
              <textarea type="text" id="newsDescription" rows="4" cols="50" placeholder="Descripción de la noticia" onInput={(e) => {setDescriptionNews(e.target.value)}}></textarea><br></br>
          </div> 
          <button className="btnSave" onClick={createNews}>Guardar</button>
      
          {/* <button onClick={submit}>guardar</button>
          <button onClick={deleteNews}>eliminar</button>
          <button onClick={updateNews}>actualizar</button> */}
          {/**Boton de guardar */}
      </div>
  );
};

export default ModalUpdateNews;


