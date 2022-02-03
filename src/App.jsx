import { useState } from "react";

import Myform from "./forms";
const App = () =>{


    return <Myform />;
}


export default App;
















// import react, { useState } from "react";


// const App = () =>{


// const [fullname , changeFullName] = useState({
// fname : "",
// lname : ""
// });
// const submitData = (e) =>{
// e.preventDefault();
// }

// const inputChange = (e) => {
// const value = e.target.value
// const name = e.target.name


// changeFullName( (previousValue)=>{
// if(name === "fname")
// {
// console.log('yes fname')
// return {
// fname : value,
// lname : previousValue.lname
// }
// }
// else
// {
// return {
// fname : previousValue.fname,
// lname : value
// }
// }
// });


// }

// return(
// <>
    // <form onSubmit={submitData}>

        // <h1>Hello {fullname.fname} {fullname.lname}</h1>

        // <input // type={"text"} // onChange={inputChange} // placeholder="Enter First Name" // value={fullname.fname}
            // name="fname" // />
        // <br />
        // <input // type={"text"} // onChange={inputChange} // placeholder="Enter Last Name" // value={fullname.lname}
            // name="lname" // />
        // <br />
        // <button type="submit">Submit Data</button>

        // </form>
    // </>
// )


// }

// export default App;






























// import react, { useState } from "react";


// const App = () =>{

// let userfirstname = ""
// let userlastname = ""


// const [fullname , changeFullName] = useState("");
// const [firstName , changeFirstName] = useState("");
// const [lastName , changeLastName] = useState("");

// const submitData = (e) =>{
// e.preventDefault();
// changeFullName(firstName + " " + lastName)
// console.log(firstName + " " + lastName)
// }

// const firstChange = (e) =>{
// changeFirstName(e.target.value)
// }
// const lastChange = (e) =>{
// changeLastName(e.target.value)
// }

// return(
// <>
    // <form onSubmit={submitData}>

        // <h1>Hello {fullname}</h1>

        // <input // type={"text"} // onChange={firstChange} // name="fname" // defaultValue={""} //
            // placeholder="Enter First Name" // value={firstName} // />
        // <br />
        // <input // type={"text"} // onChange={lastChange} // name="fname" // defaultValue={""} //
            // placeholder="Enter Last Name" // value={lastName} // />
        // <br />
        // <button type="submit">Submit Data</button>

        // </form>
    // </>
// )


// }

// export default App;


























// import react, { useState } from "react";


// const App = () =>{

// const myColor = "yellow";
// const myText = "Click me !";
// const [bg , changeFunc] = useState(myColor);
// const [name , changeName] = useState(myText);

// function change()
// {
// changeFunc("red");
// changeName("Hello Aman 😘 " )
// }

// return(
// <button style={ {border : "none" , backgroundColor : bg} } onDoubleClick={change}>{name}</button>
// )
// }

// export default App;

















// import react, { useState } from "react";


// // let minutes = date.getMinutes();
// // let hours = date.getHours();
// // let seconds = date.getSeconds();

// const Timer = () => {

// let date = new Date();

// const [minutes , newMinute] = useState(date.getMinutes());
// const [hours , newHour] = useState(date.getHours());
// const [seconds , newSecond] = useState(date.getSeconds());

// function changeTime(){
// let date = new Date();
// newMinute(date.getMinutes());
// newHour(date.getHours());
// newSecond(date.getSeconds());
// }

// setInterval( changeTime , 1000 );

// return(
// <>
    // <h1>{hours} : {minutes} : {seconds}</h1>
    // <button onClick={changeTime}>Get Time</button>
    // </>

// )
// };


// export default Timer;