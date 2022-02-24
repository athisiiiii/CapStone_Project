
import  mongoose  from "mongoose";

const appointmentsSchema = new mongoose.Schema({
  
    appointmentDate: {
      type: String,
      required: true,
    },
  
    timeslot: {
      type: String,
      required: true,
    },
  
    bookingDate: {
        type: String,
        required: true,
    },
    doctorNumber:{
        type:Number,
        required : true,
    },
    patientNumber:{
        type:Number,
        required : true,
    }
});

mongoose.model("appointments",appointmentsSchema);