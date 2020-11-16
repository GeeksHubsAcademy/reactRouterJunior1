
import React from "react";

import './header.css';

class Header extends React.Component {
    
    constructor (props) {
        super(props);
        
    };
    
    render() {
        return(
            <div>
                <div className="cabecera">HOLA SOY LA CABECERA FIJA</div>
            </div>
        );
    };
    
    
};


export default Header;