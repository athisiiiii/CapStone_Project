import { useState } from "react";
import "../css/Table.css";
import { Link } from "react-router-dom";

const SearchAppointment = (props) => {
  
  const [localState, setLocalState] = useState({ appointmentDate: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setLocalState({ ...localState, [e.target.name]: e.target.value });
    console.log(setLocalState);
    console.log(e.target.value);
    console.log(e.target.name);
  };

  const searchAppointment = (e) => {      //e - button click  event
    e.preventDefault();                   // prevent form submission to backend
    props.searchAppointment(localState.appointmentDate);                // call from search continer
  };

  const removeAppointment = (e,appointmentId) => {
    e.preventDefault();
    props.removeAppointment(appointmentId);
  };

  return (
    <div>
      <h1>APPOINTMENTS SEARCH FORM</h1>
        
      <h2 style={{ margin: "50px" }}>
        <b>SEARCH BY</b>
      </h2>
      <form style={{ margin: "50px" }}>
                <label>APPOINTMENT DATE : </label>
                <input type="date" name="appointmentDate" onChange={handleChange} value={localState.value} />
                &nbsp;
                <button onClick={searchAppointment}>SEARCH</button><hr />

                <table style={{ width: "100%" }}>
                    <tr>
                        <th>APPOINTMENT DATE</th>
                        <th>TIME SLOT</th>
                        <th>BOOKING DATE</th>
                        <th>DOCTOR NUMBER</th>
                        <th>PATIENT NUMBER</th>
                        <th>EDIT ACTION</th>
                        <th>DELETE ACTION</th>
                    </tr>
                    {props.appointmentData.searchResults ? props.appointmentData.searchResults.map((item, key) => <tr><td> {item.appointmentDate}</td><td>{item.timeslot}</td><td>{item.bookingDate}</td><td>{item.doctorNumber}</td><td>{item.patientNumber}</td>
                    <td><Link to={{pathname:"/appointments/edit/?appointmentDate="+item.appointmentDate+"&_id="+item._id+"&timeslot="+item.timeslot+"&bookingDate="+item.bookingDate+"&doctorNumber="+item.doctorNumber+"&patientNumber="+item.patientNumber}}>EDIT</Link></td> 
                    <td><button onClick={(e) => removeAppointment(e,item._id)} >DELETE</button></td></tr>) : ""}
                  </table>                  
            </form>
    </div>
  );
};

export default SearchAppointment;