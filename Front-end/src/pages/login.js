import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const[user,setUser]= useState(null);
    const[password,setPassword]= useState(null);
    
    const handleClickLogin = () => {
        try {
            login();
            if(user=== "userAdmin@museojade2021" && password=== "MuseoJade2021"){
                history.push("/home");
            }
        } catch (error) {
            console.log(error);
        }
        
        
        
    };

    const login = () => {
        console.log(user, password);
        const requestOptions = {
          method: 'POST',
          header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_data', 'Accept': 'application/json' },
          mode: 'cors',
          body: JSON.stringify(
            {
              "user": user,
              "password": password
            }
          )
        };
        fetch('http://localhost:5000/post_login', requestOptions)
          .then(response => response.json())
        
        };

    const history = useHistory();

    return(
        <div className= "loginContainer">
            <img className= "logoPagAdmin" src="/img/logo.png" alt="Logo Museo del Jade"/>
            <div className= "inputs">
                <input className="inputAdmin" id="usuario" placeholder="Usuario" onInput={(e) => {setUser(e.target.value)}}/>
                <input className="inputAdmin" id="contraseña" placeholder="Contraseña" type="password"onInput={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button className="buttonAdmin" id="ingresar" onClick={handleClickLogin} > Ingresar </button>
        </div>
    );
};

export default Login;