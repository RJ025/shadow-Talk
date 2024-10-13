import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from 'bcryptjs'
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest) {

    await dbConnect()

    try {
        
        const {username , email , password} = await req.json()



    } catch(error) {
        console.error('Error registering user' , error)
        return NextResponse.json({
            success : false,
            message : "Error registering user"
        } ,
        {
          status : 500  
        })
    }

}