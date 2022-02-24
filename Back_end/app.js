import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "./src/models/doctor.js";
import "./src/models/appointments.js";
import "./src/models/patientHistory.js";
import "./src/models/patients.js";
import "./src/models/specialities.js";
import "./src/models/timeSlot.js";
import SimpleNodeLogger from "simple-node-logger";

const opts = {
	logFilePath: "mylogfile.log",
	timestampFormt: "YYYY-MM-DD HH:mm:ss.sss",
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

const connectionStr = `mongodb://localhost:27017/clinicdb`;
mongoose
	.connect(connectionStr)
	.then(() => {
		console.log(`connected to the mongodb database`);
		log.info(`connected to the mongodb`);
	})
	.catch((err) => {
		console.log(err.message);
		log.info(err.message);
	});

// doctor is the collection
const Doctor = mongoose.model("doctors");
//appointments is collection
const Appointments = mongoose.model("appointments");
//patientHistory is collection
const PatientHistory = mongoose.model("patientHistory");
//patients is collection
const Patients = mongoose.model("patients");
//specialities is collection
const Specialities = mongoose.model("specialities");
//timeSlot is collection
const TimeSlot = mongoose.model("timeSlot");

//

var app = express();

app.use(express.static("public"));


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello World");
});
//  get /doctors
app.get("/doctors", (req, res) => {
	console.log("connected to doctors");
	Doctor.find({}, function (err, docs) {
		res.json(docs);
	});
});

// get appointments
app.get("/appointments", (req, res) => {
	Appointments.find({}, function (err, docs) {
		res.json(docs);
	});
});
// get patientHistory
app.get("/patientHistory", (req, res) => {
	PatientHistory.find({}, function (err, docs) {
		res.json(docs);
	});
});
// get patients
app.get("/patients", (req, res) => {
	Patients.find({}, function (err, docs) {
		res.json(docs);
	});
});
// get specialities
app.get("/specialities", (req, res) => {
	Specialities.find({}, function (err, docs) {
		res.json(docs);
	});
});
// get timeSlot
app.get("/timeSlot", (req, res) => {
	TimeSlot.find({}, function (err, docs) {
		res.json(docs);
	});
});

app.get("/appointments/search/appointmentDate/:appointmentDate", (req, res) => {
	const dappointmentDate = req.params.appointmentDate;
	log.info(`searching for appointment by date ${dappointmentDate}`);
	Appointments.find(
		{ appointmentDate: dappointmentDate },
		function (err, docs) {
			res.json(docs);
			log.info(`Searching by appointment Date`);
		}
	);
});

app.get("/appointments/timeslot/:timeslot", (req, res) => {
	const dTimeslot = req.params.timeslot;
	Appointments.find({ timeslot: dTimeslot }, function (err, docs) {
		res.json(docs);
		log.info(`Searching by Time Slot`);
	});
});

app.get("/appointments/search/doctorNumber/:doctorNumber", (req, res) => {
	const dDoctorNumber = req.params.doctorNumber;
	Appointments.find({ doctorNumber: dDoctorNumber }, function (err, docs) {
		res.json(docs);
		log.info(`Searching by Doctor number`);
	});
});

app.get("/appointments/search/patientNumber/:patientNumber", (req, res) => {
	const dpatientNumber = req.params.patientNumber;
	Appointments.find({ patientNumber: dpatientNumber }, function (err, docs) {
		res.json(docs);
		log.info(`Searching by Patient Number`);
	});
});

app.get("/appointments/bookingDate/:bookingDate", (req, res) => {
	const dbookingDate = req.params.bookingDate;
	Appointments.find({ bookingDate: dbookingDate }, function (err, docs) {
		res.json(docs);
		log.info(`Searching by Booking Date`);
	});
});

app.get("/appointments/delete/:id", (req, res) => {
	log.info(`Recive appointment delete request ${req.params.id}`);
	Appointments.findByIdAndDelete(req.params.id)
		.then((ans) => {
			console.log("Appointment deleted");
			res.status(200).send({ msg: "Appointment removed successfully" });
			log.info(`Appointment Deleted`);
		})
		.catch((err) => {
			console.log(err.Message);
		});
});

app.post("/appointments/add", (req, res) => {
	Appointments.create(req.body)
		.then((ans) => {
			console.log("New appointment inserted");
			res.status(200).send({ msg: "Appointment added" });
			log.info(`Appointment added`);
		})
		.catch((err) => {
			console.log(err.Message);
		});
});

app.post("/appointments/edit/:id", (req, res) => {
	Appointments.findByIdAndUpdate(req.params.id, req.body)
		.then((ans) => {
			console.log("New appointment edit Inserted");
			res.status(200).send({ msg: "appointment edited successfully" });
			log.info(`Appointment edited`);
		})
		.catch((err) => {
			console.log(err.Message);
		});
});

export default app;
