import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import brcypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider ({
            id : "credentials",
            name : "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials:any) : Promise<any>{
                await dbConnect()
                try {
                    const user = await UserModel.findOne({
                        $or : [
                            {email : credentials.identifier},
                            {username : credentials.identifier}
                        ]
                    })
                    if(!user){
                        throw new Error('No User found with this Email')
                    }

                    if(!user.isVerified){
                        throw new Error('please verify your account')

                    }
                    const isPasswordCorrect = await brcypt.compare(credentials.password , user.password)
                    if(isPasswordCorrect){
                        return user
                    } else {
                        throw new Error('incorrect password')
                    }
                } catch(err : any) {
                    throw new Error(err)
                }
              }
        })
    ] ,
    pages : {
        signIn: '/signin',
    },
    session : {
        strategy : "jwt"
    },
    secret : process.env.AUTH_SECRET,
    callbacks : {
        async session({ session, token }) {
            if(token) {
                session.user._id = token._id
                session.user.isVerified = token.isVerified
                session.user.isAcceptingMessages = token.isAcceptingMessages
                session.user.username = token.username
            }
            return session
        },
        async jwt({ token, user}) {
            if(user) {
                token._id = user._id?.toString()
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username
            }
            return token
        }
    }
}