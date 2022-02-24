
import  mongoose  from "mongoose";

const timeSlotSchema = new mongoose.Schema({
  
  
    timeSlot: {
      type: String,
      required: true,
      unique:true,
    },
  
});

mongoose.model( "timeSlot",timeSlotSchema);