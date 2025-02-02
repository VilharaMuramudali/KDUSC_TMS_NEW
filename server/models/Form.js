const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    applicantname : String,
    appiicantAppoinment : String,
    vehicleIncharge : String,
    dateofRequired : Date,
    timeofRequired : String,
    natureofDuty : String,
    addresstoGo : String,
    requirement : String,
    timetobeSpent : String,
    distance : String,
    dateofArrival : Date,
    timeofArrival : String,
    numofOfficers : Number,
    numofLectures : Number,
    numofInstructors : Number,
    numofcadetOfficers : Number,
    numofdayScholers : Number,
    numofcivilStaff : Number,
    totalofPassengers : Number,
    routetoFollow : String,
    dateofApply : Date,
    rejectOrConfirm : String,

}
)


const FormModel = mongoose.model("Form", FormSchema)
module.exports = FormModel