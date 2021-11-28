import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableServices from "../tableServices";


class ModalReadServices extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadServices() {
        fetch('http://localhost:5000/read_services')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                titulo: item[1],
                tipo: item[2],
                imagen: item[3]
              }))
            });
        });
      }
    
    close() {
    const modalReadServices= document.getElementById("modalReadServices");
    modalReadServices.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        this.ReadServices();
        const modalReadServices= document.getElementById("modalReadServices");
        modalReadServices.style.visibility="visible";                    
    };       
    document.addEventListener('readModalServices', callback);
    
    }

    render() {
        return (
            <div id="modalReadServices" className="modalContainer" style={{width: "80%"}}>
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla servicios</h1>
                </div> 
                <TableServices services= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadServices;


