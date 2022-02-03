import react from "react";
import reactDom from "react-dom";

import App from './App';
import './forms.css';

reactDom.render(

    <>
        <div id="container" className="formsDiv">

            <div className="boxHeadingDiv">
                <h3 className="boxHeading">Appointment Form !</h3>
            </div>

            <App></App>

        </div>
    </>,
    document.getElementById('root')

);

