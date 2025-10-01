import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const users = await User.find();

    return NextResponse.json({ success: true, data: users }, { status: 200 });

    return new Response("Hello, Next.js!");
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
