import React, {Component} from "react";
import AboutUs from "./aboutus/Aboutus";
import Portfolio from "./portfolio/Portfolio";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        }
    }

    UNSAFE_componentWillReceiveProps(props){
        this.setState({content:props.content})
    }

    displayContent() {
        console.log(`displaying ${this.state.content}`)
        switch (this.state.content) {
            case 0:
                return(<AboutUs/>)
                break;
            case 1:
                return(<Portfolio/>)
                break;
            default:

                break;
        }
    }


    render() {
        return (
            <React.Fragment>
                {this.displayContent()}
            </React.Fragment>
        )
    }
}

export default Content;