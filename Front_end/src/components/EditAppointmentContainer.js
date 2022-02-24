import EditAppointment from './EditAppointment';
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
    console.log("inside the reducer2");
    return {
        appointmentData: store.reducer2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAppointment: (appointmentObj) => dispatch({ type: "ADD_A_APPOINTMENT_TO_BACKEND", appointment: appointmentObj }),
        editAppointment : (appointmentObj) => dispatch({type:"EDITED_A_APPOINTMENT_TO_BACKEND",appointment: appointmentObj}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAppointment);