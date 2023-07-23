import React from "react";
import './service.css'

const ServiceComponant = (props) => {
    return (
        <React.Fragment>
            <div className="center padding25 flex-column bubble bisque serviceBorder">
                <div className="center flex-column bubble grey service max">
                    <p className="serviceHeader">{props.serviceName}</p>
                    <div className="center max">
                        
                        <p className="margin15">{props.serviceDescription}</p>
                    </div>          
                </div>     
            </div>
        </React.Fragment>
    )    
}

export default ServiceComponant

//<img className="serviceImg bubble margin15"src={props.img}></img>