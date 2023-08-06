import connectMongoDB from "@/libs/mongodb";
import City from "@/models/city";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name, newLatitude: latitude, newLongitude: longitude } = await request.json();
    await connectMongoDB();
    await City.findByIdAndUpdate(id, { name, latitude, longitude });
    return NextResponse.json({ message: "City updated successfully" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    // _id vine de la MongoDB
    const city = await City.findOne({ _id: id });
    return NextResponse.json({ city }, { status: 200 });
}