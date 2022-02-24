
import  mongoose  from "mongoose";

const specialitiesSchema = new mongoose.Schema({
  
    specialities: {
      type: String,
      required: true,
    },
   
});

mongoose.model( "specialities",specialitiesSchema);