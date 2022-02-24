import SearchAppointment from './SearchAppointment';
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        appointmentData: store.reducer1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchAppointment: (appointmentDateVal) => dispatch({ type: "SEARCH_APPOINTMENT_WITH_APPOINTMENT_DATE", appointmentDate: appointmentDateVal }),        //dispatch to saga
        removeAppointment: (appointmentId) => dispatch({type:"REMOVE_APPOINTMENT_WITH_APPOINTMENT_DATE", id: appointmentId }),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchAppointment);