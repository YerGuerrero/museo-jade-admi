import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TableNews from "../tableNews";


class ModalReadNews extends React.Component {

    constructor(props){
        super(props);
        this.state=null;
    }

    ReadNews() {
        fetch('http://localhost:5000/read_news')
          .then(response => response.json())
          .then(result => {
            this.setState({
              data: result.map(item => ({
                id: item[0],
                titulo: item[1],
                imagen: item[2],
                descripcion: item[3],
              }))
            });
        });
      }
    
    close() {
    const modalReadNews= document.getElementById("modalReadNews");
    modalReadNews.style.visibility="hidden";
    };

    componentDidMount(){
    const callback = (e) => { 
        const modalReadNews= document.getElementById("modalReadNews");
        modalReadNews.style.visibility="visible";                    
    };       
    document.addEventListener('readModalNews', callback);
    this.ReadNews();
    }

    componentDidUpdate(){
        this.ReadNews();
    }

    render() {
        return (
            <div id="modalReadNews" className="modalContainer">
                <button id ="btnClose" className="btnClose" onClick={this.close}><FontAwesomeIcon icon={faTimes}/></button>
                <div id= "info" >
                    <h1>Tabla noticias</h1>
                </div> 
                <TableNews news= {this.state}/>
            </div>
            
        );
    }
};

export default ModalReadNews;


