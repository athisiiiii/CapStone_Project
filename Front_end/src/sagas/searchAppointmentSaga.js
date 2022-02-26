import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this

function* searchAppointment(action) {           // go to node app.js and fetch the data from backend from line 10 and 11
	console.log("Inside Appointment saga");
	console.log(action);
	const appointmentSearchResult = yield fetch(
		"http://localhost:8000/appointments/search/appointmentDate/" +
			action.appointmentDate
	).then((response) => response.json())
  .catch((err) => console.log(err))
	yield put({ type: "SEARCH_A_APPOINTMENT_SUCCESSFUL", appointmentSearchResult: appointmentSearchResult }); //dispatching an action
}
function* actionWatcherForSearchAppointment() {     //wait for the event
	yield takeLatest(
		"SEARCH_APPOINTMENT_WITH_APPOINTMENT_DATE",
		searchAppointment);
}

//delete doctor saga
function* deleteAppointment(action) {
  console.log("Inside appointment saga delete");
  console.log(action);
  const json = yield fetch("http://localhost:8000/appointments/delete/" + action.id)
  .then((response) =>response.json())
  .catch((err) => console.log(err))
  yield put({ type: "REMOVE_APPOINTMENT", json: json });
}
function* actionWatcherForDeleteAppointment() {
  yield takeLatest("REMOVE_APPOINTMENT_WITH_APPOINTMENT_DATE", deleteAppointment);
}

// add a new doctor
function* addNewAppointment(action) {
  var bodyContent = {
		appointmentDate: action.appointment.appointmentDate,
		timeslot: action.appointment.timeslot,
		bookingDate: action.appointment.bookingDate,
    doctorNumber: action.appointment.doctorNumber,
    patientNumber: action.appointment.patientNumber
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/appointments/add", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))

  yield put({ type: "ADDED_A_APPOINTMENT_SUCCESSFUL", serverMsg: serverResponse.msg });
}

function* actionWatcherForAddAppointment() {
  yield takeLatest("ADD_A_APPOINTMENT_TO_BACKEND", addNewAppointment);
}


function* editAppointment(action) {
  var bodyContent = {
    timeslot: action.appointment.timeslot
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/appointments/edit/"+action.appointment._id, {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json())
  .catch((err) => console.log(err))
  console.log(serverResponse.msg);
  yield put({ type: "EDITED_A_APPOINTMENT_SUCCESSFUL", serverMsg: serverResponse.msg, });
}

function* actionWatcherForEditAppointment() {
  yield takeLatest("EDITED_A_APPOINTMENT_TO_BACKEND", editAppointment);
}


// for all the above sagas we need to create root saga
export default function* rootSaga() {
  yield all([
    actionWatcherForSearchAppointment(),
    actionWatcherForAddAppointment(),
    actionWatcherForDeleteAppointment(),
    actionWatcherForEditAppointment()

  ]);
}