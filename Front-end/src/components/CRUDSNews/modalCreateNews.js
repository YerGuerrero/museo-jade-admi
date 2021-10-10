import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalCreateNews = () => {
      const [descriptionNew,setDescriptionNews]= useState();
      const [titleNew,setTitleNews]= useState();
      const [imageNew,setImageNews]= useState();
      const [IDNews,setIDNews]= useState();

      useEffect(()=>{
        const callback = (e) => { 
            const modalUpdateNews= document.getElementById("modalUpdateNews");
            modalUpdateNews.style.visibility="visible";                    
        };       
        document.addEventListener('updateModalNews', callback);
      })

      function close() {
          const modalUpdateNews= document.getElementById("modalUpdateNews");
          modalUpdateNews.style.visibility="hidden";
      };

      const updateNews = () => { // Esta función se hace cuando el botón de guardar en los modales
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_updateNews', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "id": IDNews,
              "titulo": titleNew,
              "imagen": imageNew,
              "descripcion": descriptionNew
              
            }
          )
        };
        fetch('http://localhost:5000/post_updateNews', requestOptions)
          .then(response => response.json())
      };

    

    return (
        <div id="modalUpdateNews" className="modalContainer">
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Modificar noticia</h1>
                <input type="text" id="newsIDDelete" placeholder="ID de la noticia a borrar" onInput={(e) => {setIDNews(e.target.value)}}></input><br></br>
                
                <div id="info1">
                  <input type="text" id="newsName" placeholder="Titulo de la noticia" onInput={(e) => {setTitleNews(e.target.value)}}></input><br></br>
                  <input type="text" id="newsImage" placeholder="Ruta de la imagen" onInput={(e) => {setImageNews(e.target.value)}}></input><br></br>
                </div>
                
                <textarea type="text" id="newsDescription" rows="4" cols="50" placeholder="Descripción de la noticia" onInput={(e) => {setDescriptionNews(e.target.value)}}></textarea><br></br>
            </div> 
            <button className="btnSave" onClick={updateNews}>Guardar</button>
        
            {/* <button onClick={submit}>guardar</button>
            <button onClick={deleteNews}>eliminar</button>
            <button onClick={updateNews}>actualizar</button> */}
            {/**Boton de guardar */}
        </div>
    );
};

export default ModalCreateNews;


