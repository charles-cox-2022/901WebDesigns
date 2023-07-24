import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import AboutUs from "./aboutus/Aboutus";
import Portfolio from "./portfolio/Portfolio";
import ContactUs from "./contactus/Contactus";
import Profile from "./Profile/Profile";
import { Provider } from "react-redux";
import store from '../Rapi/Redux/store'
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<AboutUs store={store}/>}/>
                    <Route path="/Home" element={<AboutUs store={store}/>}/>
                    <Route path="/Portfolio" element={<Portfolio store={store}/>}/>
                    <Route path="/Contact" element={<ContactUs store={store}/>}/>
                    <Route path="/Login" element={<Profile store={store}/>}/>
                    <Route path="/Profile" element={<Profile store={store}/>}/>
                    <Route path="/Services" element={<Services store={store}/>}/>
                    <Route path="/Testimonials" element={<Testimonials store={store}/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )

}
export default RouteSwitch