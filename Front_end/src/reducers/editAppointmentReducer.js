const editAppointmentReducer = (state = {}, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
      case "ADDED_A_APPOINTMENT_SUCCESSFUL":
          let newState = { ...state }
          newState.addAppointmentSuccess = action.serverMsg;
          return newState;
          
      case "EDITED_A_APPOINTMENT_SUCCESSFUL":
            let newState2 = { ...state }
                  newState2.editAppointmentSuccess = action.serverMsg;
                  return newState2;

      default:
          return state;

  };
}

export default editAppointmentReducer;