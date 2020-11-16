
import React from "react";

import './login.css';


class Login extends React.Component {
    
    constructor (props) {
        super(props);
        
    };

    llevameAHome(){
        this.props.history.push('/');
    }
    
    render() {
        return(
            <div>
                <div className="cuerpoLogin">
                    Hola FSD Madrid, soy el componente Login
                    <button onClick={() => this.llevameAHome()}>LLEVAME A HOME</button>
                </div>
            </div>
        );
    };
    
    
};


export default Login;