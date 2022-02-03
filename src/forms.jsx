import react , { useState } from "react";
import reactDom from "react-dom";
import Result from "./result";
const Myform = () => {


    const [allInputs, changeInputs] = useState(
        {
            Name: "",
            Phone: "",
            Email: "",
            Address: "",
            State: "",
            Pin: "",
            Service: "service1",
            Date: "",
            Time: ""
        }
    )

    const detectChange = (element) => {

        const { name, value } = element.target;
        changeInputs((prevValue) => {

            return {
                ...prevValue,
                [name]: value
            }
        });

    }


    const submitForm = (event) => {
        event.preventDefault();
        reactDom.render(<><Result values = {allInputs} /></> , document.getElementById('root'))
    }




    return <>
        <form className="forms" onSubmit={submitForm}>

            <div className="inputContainer">
                <span><i className="bx bx-user" /></span>
                <input required autoComplete="OFF" type="text" placeholder="Name" name="Name" id="name" value={allInputs.Name} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bx-phone" /></span>
                <input required autoComplete="OFF" type="number" placeholder="Contact Number" name="Phone" id="phone" value={allInputs.Phone} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bxl-gmail" /></span>
                <input required autoComplete="OFF" type="email" placeholder="Email" id="email" name="Email" value={allInputs.Email} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bx-map" /></span>
                <input required autoComplete="OFF" type="text" placeholder="Address" id="address" name="Address" value={allInputs.Address} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bxs-map-alt" /></span>
                <input required autoComplete="OFF" type="text" placeholder="State" id="state" name="State" value={allInputs.State} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bxs-map-alt" /></span>
                <input required autoComplete="OFF" type="number" placeholder="Pin Code" id="pin" name="Pin" value={allInputs.Pin} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bx-list-check" /></span>
                <select name id="service" name="Service" defaultValue={"service1"} value={allInputs.Service} onChange={detectChange}>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                    <option value="service4">Service 4</option>
                </select>
            </div>


            <div className="inputContainer">
                <span><i className="bx bx-calendar" /></span>
                <input required autoComplete="OFF" type="date" placeholder="Appointment Date" min="2021-12-22"
                    max="2022-1-31" id="date" name="Date" value={allInputs.Date} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span><i className="bx bx-time-five" /></span>
                <input required autoComplete="OFF" type="time" placeholder="Appointment Time" id="time" name="Time" value={allInputs.Time} onChange={detectChange} />
            </div>


            <div className="inputContainer">
                <span style={{ "visibility": "hidden" }}><i className="bx bx-time-five" /></span>
                <button type="submit" id="submitButton">Apply for Appointment</button>
            </div>

        </form>

        <div className="boxHeadingDiv">
            <p className="">This appointment form is developed by <a href="https://www.linkedin.com/in/aman-khushalani-1b774818b/">AmanKhushalani</a></p>
        </div>



    </>
}


export default Myform;