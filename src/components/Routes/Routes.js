import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/contact-us', element: <ContactUs></ContactUs>}
    ]}
])