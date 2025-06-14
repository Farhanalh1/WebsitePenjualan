import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import db from "@/lib/db";

export async function POST(req: Request) {
    try {
        const { userId} = await auth()
        const body = await req.json();

        const { name} = body

        if (!userId) {
            return new NextResponse("Unauthorized", {status:401})
        }

    } catch (error) {
        console.log("[STORES_POST]", error)
        return new NextResponse("Internal error", {status: 500})
    }
}