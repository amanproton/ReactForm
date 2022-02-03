const Result = (props) => {
    console.log(props.values)
    return <>
        <div id="container" className="formsDiv">


            <div className="boxHeadingDiv" >
                <h3 className="boxHeading"><i className='bx bxs-edit-alt'></i> Appointment Form !</h3>
            </div>

            <div>
                <h3 style={{textAlign:"center"}} className="boxHeading"><i className='bx bxs-edit-alt'></i> Here are the details of
                    Person !</h3>
                <div id="detailsContainer">

                    <div className="tag">
                        <div className="tagHeading">Person Name = {props.values.Name}</div>
                        <div id="name" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">Contact = {props.values.Phone}</div>
                        <div id="phone" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">Email = {props.values.Email}</div>
                        <div id="email" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">Address = {props.values.Address}</div>
                        <div id="address" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">State = {props.values.State}</div>
                        <div id="state" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">PIN = {props.values.Pin}</div>
                        <div id="pin" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">Service = {props.values.Service}</div>
                        <div id="service" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">Date = {props.values.Date}</div>
                        <div id="date" className="tagContent"></div>
                    </div>
                    <div className="tag">
                        <div className="tagHeading">Time = {props.values.Time}</div>
                        <div id="time" className="tagContent"></div>
                    </div>

                </div>
            </div>


        </div>
    </>
}



export default Result;