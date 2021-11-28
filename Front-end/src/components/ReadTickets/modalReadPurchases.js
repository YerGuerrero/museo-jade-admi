import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TablePurchases from "../tablePurchases";


class ModalReadPurchases extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadPurchases() {
        fetch('http://localhost:5000/read_purchases')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                nombre_comprador: item[1],
                numero_telefono: item[2],
                correo: item[3],
                fecha: item[4],
                numero_entradas: item[5],
                total: item[6]
              }))
            });
        });
      }
    
    close() {
    const modalReadPurchases= document.getElementById("modalReadPurchases");
    modalReadPurchases.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        this.ReadPurchases();
        const modalReadPurchases= document.getElementById("modalReadPurchases");
        modalReadPurchases.style.visibility="visible";                    
    };       
    document.addEventListener('readModalPurchases', callback);
    
    }

    render() {
        return (
            <div id="modalReadPurchases" className="modalContainer" style={{width: "80%"}}>
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla tiquetes</h1>
                </div> 
                <TablePurchases purchases= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadPurchases;


