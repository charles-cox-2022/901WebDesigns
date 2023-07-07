import React, {Component} from "react";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <div className="App-Content center flex-column flex-left max">
                    <h2 className="center textwhite">About Us</h2>
                    <nav class="center">
                        <a href="#">The Company</a>
                        <a href="#">The People</a>
                    </nav>
                    <div id="aboutUsContent" className="margin15 center grey max80 bubble flex-left flex-column">
                        <p className="textwhite">
                            We are a team of driven web developers who have experience in React, Redux, Express, Mongo DB and many others. 
                        </p>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutUs;