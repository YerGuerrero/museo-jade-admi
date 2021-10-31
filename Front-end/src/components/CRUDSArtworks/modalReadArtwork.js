import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableArtwork from "../tableArtwork.js";


class ModalReadArtwork extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadArtwork() {
        fetch('http://localhost:5000/read_artwork')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                titulo: item[1],
                descripcion: item[2],
                imagen: item[3],
                id_exhibicion: item[4]    
              }))
            });
        });
      }
    
    close() {
    const modalReadArtwork= document.getElementById("modalReadArtwork");
    modalReadArtwork.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        this.ReadArtwork();
        const modalReadArtwork= document.getElementById("modalReadArtwork");
        modalReadArtwork.style.visibility="visible";

    };       
    document.addEventListener('readModalArtwork', callback);
    
    }

    render() {
        return (
            <div id="modalReadArtwork" className="modalContainer" style={{width: "80%"}}>
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla obras</h1>
                </div> 
                <TableArtwork artworks= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadArtwork;


