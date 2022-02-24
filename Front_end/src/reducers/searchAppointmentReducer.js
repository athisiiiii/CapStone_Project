const searchAppointmentReducer = (state = {}, action) => {
	console.log(action);
	console.log(state);
	switch (action.type) {
		case "SEARCH_A_APPOINTMENT_SUCCESSFUL":
			let newState = { ...state, searchResults: action.appointmentSearchResult };
			newState.searchAppointmentSuccess =
				" APPOINTMENT SEARCH SUCCESSFUL";
			console.log(newState);
			return newState;

		case "REMOVE_APPOINTMENT":
			let newState1 = { ...state, deleteResults: action.json }
            newState1.deleteAppointmentSuccess = "SUCCESSFULLY DELETED THE APPOINTMENT";
            return newState1;

	

		default:
			return state;
	}
};

export default searchAppointmentReducer;
