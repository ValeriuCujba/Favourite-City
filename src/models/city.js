import mongoose, { Schema } from "mongoose";

const CitySchema = new Schema(
    {
        name: String,
        longitude: Number,
        latitude: Number
    }, 
    {
        timestamps: true,
    }
);

const City = mongoose.models.City || mongoose.model("City", CitySchema);

export default City;