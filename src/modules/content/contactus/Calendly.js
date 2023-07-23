
import React, {Component} from "react";

class Calendly extends React.Component {

    componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
  
    componentWillUnmount() {
      // whatever you need to cleanup the widgets code
    }
  
    render(){
      return (
        <div className="max">
          <div id="schedule_form" className="max">
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/901webdesigns-charles-cox/30min"
              style={{ minWidth: '320px', height: '100%' }} />
          </div>
        </div>
      );
    }
  }

  export default Calendly