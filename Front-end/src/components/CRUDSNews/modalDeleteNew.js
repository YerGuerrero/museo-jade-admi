import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalDeleteNews = () => {
      const [IDNews,setIDNews]= useState();
      
      useEffect(()=>{
        const callback = (e) => { 
            const modalDeleteNews= document.getElementById("modalDeleteNews");
            modalDeleteNews.style.visibility="visible";                    
        };       
        document.addEventListener('deleteModalNews', callback);
        
        const callbackClose = (e) => { 
          const modalDeleteNews= document.getElementById("modalDeleteNews");
          modalDeleteNews.style.visibility="hidden";
          document.getElementById('newsIDDelete').value = '';                   
        };       
        document.addEventListener('closeDeleteModal', callbackClose);
      })

      function close() {
          const modalDeleteNews= document.getElementById("modalDeleteNews");
          modalDeleteNews.style.visibility="hidden";
      };

        const deleteNews = () => { // Esta función se hace cuando el botón de guardar en los modales
          const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_deleteNews', 'Accept': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(
              {
                "id": IDNews
              }
            )
          };
          fetch('http://localhost:5000/post_deleteNews', requestOptions)
            .then(response => response.json())
          
          document.dispatchEvent(new CustomEvent("closeDeleteModal"))
        };

        
    

    return (
        <div id="modalDeleteNews" className="modalContainer" style={{height:"auto"}}>
            <button id ="btnClose" className="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "info" >
                <h1>Eliminar noticia</h1>
                <input type="text" id="newsIDDelete" placeholder="ID de la noticia a borrar" onInput={(e) => {setIDNews(e.target.value)}}></input><br></br>
            </div> 
            <button className="btnSave" onClick={deleteNews}>Guardar</button>
        </div>
    );
};

export default ModalDeleteNews;


