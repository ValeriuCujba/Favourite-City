import connectMongoDB from "@/libs/mongodb";
import City from "@/models/city";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, latitude, longitude } = await request.json();

    console.log(name);
    await connectMongoDB();

    const newCity = new City({
        name,
        latitude,
        longitude
    });

    await City.create(newCity);
    return NextResponse.json({ message: "City created successfully" },
        { status: 201 });
}

export async function GET(request) {
    const latitude = request.nextUrl.searchParams.get("latitude");
    const longitude = request.nextUrl.searchParams.get("longitude");
    await connectMongoDB();
    let cities;
    if (latitude && longitude) {
         cities = await City.find({ latitude, longitude });
    } else {
         cities = await City.find();
    }
    
    return NextResponse.json(cities);
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await City.findByIdAndDelete(id);
    return NextResponse.json({ message: "City deleted successfully" }, { status: 200 });
}