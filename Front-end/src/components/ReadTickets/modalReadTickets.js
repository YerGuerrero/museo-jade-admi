import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableTickets from "../tableTickets";


class ModalReadTickets extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadTickets() {
        fetch('http://localhost:5000/read_tickets')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                tipo: item[1],
                precio: item[2],
                id_compra: item[3]
              }))
            });
        });
      }
    
    close() {
    const modalReadTickets= document.getElementById("modalReadTickets");
    modalReadTickets.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => {
        this.ReadTickets();
        const modalReadTickets= document.getElementById("modalReadTickets");
        modalReadTickets.style.visibility="visible";
    };
    document.addEventListener('readModalTickets', callback);
    
    }

    render() {
        return (
            <div id="modalReadTickets" className="modalContainer" style={{width: "80%"}}>
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla tiquetes</h1>
                </div>
                <TableTickets tickets= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadTickets;