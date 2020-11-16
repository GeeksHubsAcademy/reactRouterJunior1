
import React from "react";


class Home extends React.Component {
    
    constructor (props) {
        super(props);
        
    };

    llevameALogin() {
        this.props.history.push("/login");
    }
    
    render() {
        return(
            <div>
                SOY HOME, ESTAMOS EN CASA.
                <button onClick={() => this.llevameALogin()}>LLEVAME A LOGIN</button>
            </div>
        );
    };
    
    
};


export default Home;