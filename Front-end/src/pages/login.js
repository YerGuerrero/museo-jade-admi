import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const handleClickLogin = () => {
        history.push("/home");
    };

    const history = useHistory();

    return(
        <div className= "loginContainer">
            <img className= "logoPagAdmin" src="/img/logo.png" alt="Logo Museo del Jade"/>
            <div className= "inputs">
                <input className="inputAdmin" id="usuario" placeholder="Usuario"/>
                <input className="inputAdmin" id="contraseña" placeholder="Contraseña" type="password"/>
            </div>
            <button className="buttonAdmin" id="ingresar" onClick={handleClickLogin} > Ingresar </button>
        </div>
    );
};

export default Login;