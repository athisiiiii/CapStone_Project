import '../css/Table.css'
import {useState} from 'react'
import { useLocation } from 'react-router';
    const EditAppointment=(props)=>{
       
       const _id = new URLSearchParams(useLocation().search).get('_id');
       const appointmentDate = new URLSearchParams(useLocation().search).get('appointmentDate');
       const timeslot = new URLSearchParams(useLocation().search).get('timeslot');
       const bookingDate = new URLSearchParams(useLocation().search).get('bookingDate');
       const doctorNumber = new URLSearchParams(useLocation().search).get('doctorNumber');
       const patientNumber = new URLSearchParams(useLocation().search).get('patientNumber');
       
        const [localState, setLocalState] = useState({_id:_id? _id : "",appointmentDate:appointmentDate? appointmentDate : "",timeslot:timeslot? timeslot: "",bookingDate:bookingDate? bookingDate:"",doctorNumber:doctorNumber? doctorNumber: "", patientNumber:patientNumber?patientNumber:"" });
        const handleChange = (e) => {
            e.preventDefault();
            setLocalState({ ...localState, [e.target.name]: e.target.value });
    
        };
         
        const onclickAddAppointment = (e) => {
            e.preventDefault();
            props.addAppointment(localState);
        }

        const onclickEditAppointment = (e) => {
            e.preventDefault();
            props.editAppointment(localState);           
        }
    return (
        <div>

            <form>
             <h1 style={{ textAlign: "center" }}>{props.mode==="edit"? "EDIT APPOINTMENT ":"ADD NEW APPOINTMENT"}</h1>
                <div style={{ textAlign: "center" }}>

                <label for="aDate">APPOINTMENT DATE : </label>{props.mode==="edit"? <input type="date" name="appointmentDate" value={localState.appointmentDate} onChange={handleChange} required disabled />:<input type="date" name="appointmentDate" value={localState.appointmentDate} onChange={handleChange} required />}<br /><br />

                <label for="tSlot">TIME SLOT: </label><input type="time" name="timeslot" value={localState.timeslot} onChange={handleChange} required /><br /><br />

                <label for="bDate">BOOKING DATE :</label>{props.mode==="edit"? <input type="date" name="bookingDate" value={localState.bookingDate} onChange={handleChange} required disabled />:<input type="date" name="bookingDate" value={localState.bookingDate} onChange={handleChange} required />}<br /><br />

                <label for="dNo">DOCTOR NUMBER :</label> {props.mode==="edit"? <input type="number" name="doctorNumber" value={localState.doctorNumber} onChange={handleChange} required disabled />:<input type="number" name="doctorNumber" value={localState.doctorNumber} onChange={handleChange} required />}<br /><br />

                <label for="pNo">PATIENT NUMBER :</label> {props.mode==="edit"? <input type="number" name="patientNumber" value={localState.patientNumber} onChange={handleChange} required disabled />:<input type="number" name="patientNumber" value={localState.patientNumber} onChange={handleChange} required />}<br /><br />
                
                 {props.mode==="edit"?   <button style={{height:"50px", width:"200px"}} onClick={onclickEditAppointment}>SAVE APPOINTMENT</button>:<button style={{height:"50px", width:"200px"}} onClick={onclickAddAppointment} >ADD APPOINTMENT</button>}<br /><hr /><br />
                 {props.mode==="add" && props.appointmentData && props.appointmentData.addAppointmentSuccess ? props.appointmentData.addAppointmentSuccess : ""}
                 {props.mode==="edit" && props.appointmentData && props.appointmentData.editAppointmentSuccess ? props.appointmentData.editAppointmentSuccess : ""}
                </div>
            </form>
        </div>
    );
}
export default EditAppointment;