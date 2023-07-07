import React, {Component} from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <div className="App-Content center flex-column flex-left max">
                    <h2 className="center textwhite">Portfolio</h2>
                    
                    <div id="aboutUsContent" className="margin15 center grey max80 bubble flex-left flex-column">

                        <p className="textwhite">
                            Together we have created several web apps and are looking for more exciting projects! Here are some: 
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;