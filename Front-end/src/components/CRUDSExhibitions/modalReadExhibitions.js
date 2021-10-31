import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableExhibitions from "../tableExhibitions";


class ModalReadExhibitions extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadExhibitions() {
        fetch('http://localhost:5000/read_exhibitions')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                titulo: item[1],
                descripcion: item[2],
                imagen: item[3],
                tipo:item[4]
              }))
            });
        });
      }
    
    close() {
    const modalReadExhibitions= document.getElementById("modalReadExhibitions");
    modalReadExhibitions.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        this.ReadExhibitions();
        const modalReadExhibitions= document.getElementById("modalReadExhibitions");
        modalReadExhibitions.style.visibility="visible";                    
    };       
    document.addEventListener('readModalExhibitions', callback);
    
    }

    render() {
        return (
            <div id="modalReadExhibitions" className="modalContainer">
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla exhibiciones</h1>
                </div> 
                <TableExhibitions exhibitions= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadExhibitions;


