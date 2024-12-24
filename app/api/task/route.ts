import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tasks = await prisma.weeklyTask.findMany();
    return NextResponse.json({ tasks, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while fetching tasks",
        errorDetails: error,
      },
      { status: 500 }
    );
  }
}
