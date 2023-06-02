import Post from "@/models/Post";
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    try {
        const {id} = params;
        await connect();

        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new NextResponse(error.message, { status: 500 })
    }
}

export const DELETE = async (request, {params}) => {
    try {
        const {id} = params;
        await connect();
        await Post.findByIdAndDelete(id);

        return new NextResponse("Post has been deleted.", { status: 200 })
    } catch (error) {
        return new NextResponse(error.message, { status: 500 })
    }
}
