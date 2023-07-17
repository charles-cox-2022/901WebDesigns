import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import AboutUs from "./aboutus/Aboutus";
import Portfolio from "./portfolio/Portfolio";
import ContactUs from "./contactus/Contactus";
import Profile from "./Profile/Profile";
import { Provider } from "react-redux";
import store from '../Rapi/Redux/store'
import Player from "./YouTube/Player";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<App store={store}/>}/>
                    <Route path="/About" element={<AboutUs store={store}/>}/>
                    <Route path="/Portfolio" element={<Portfolio store={store}/>}/>
                    <Route path="/Contact" element={<ContactUs store={store}/>}/>
                    <Route path="/Login" element={<Profile store={store}/>}/>
                    <Route path="/Player" element={<Player store={store}/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )

}
export default RouteSwitch