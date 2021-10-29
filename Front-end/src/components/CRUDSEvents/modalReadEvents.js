import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableEvents from "../tableEvents.js";


class ModalReadEvents extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadEvents() {
        fetch('http://localhost:5000/read_events')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                titulo: item[1],
                imagen: item[2],
                fecha: item[3],
                hora: item[4],
                descripcion: item[5],
              }))
            });
        });
      }
    
    close() {
    const modalReadEvents= document.getElementById("modalReadEvents");
    modalReadEvents.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        this.ReadEvents();
        const modalReadEvents= document.getElementById("modalReadEvents");
        modalReadEvents.style.visibility="visible";

    };       
    document.addEventListener('readModalEvents', callback);
    
    }

    render() {
        return (
            <div id="modalReadEvents" className="modalContainer" style={{width: "80%"}}>
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla eventos</h1>
                </div> 
                <TableEvents events= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadEvents;


