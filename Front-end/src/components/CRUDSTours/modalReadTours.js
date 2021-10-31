import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableTours from "../tableTours";


class ModalReadTours extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadTours() {
        fetch('http://localhost:5000/read_tours')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                titulo: item[1],
                descripcion: item[2],
                urltour: item[3],
                imagen: item[4]
              }))
            });
        });
      }
    
    close() {
    const modalReadTours= document.getElementById("modalReadTours");
    modalReadTours.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        this.ReadTours();
        const modalReadTours= document.getElementById("modalReadTours");
        modalReadTours.style.visibility="visible";                    
    };       
    document.addEventListener('readModalTours', callback);
    
    }

    render() {
        return (
            <div id="modalReadTours" className="modalContainer" style={{width: "80%"}}>
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla tours</h1>
                </div> 
                <TableTours tours= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadTours;


