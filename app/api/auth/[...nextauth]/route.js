import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import { connectToDB } from "@utils/database";


const handler= NextAuth(
    {  
        providers: [
            GoogleProvider({
                clientId:process.env.GOOGLE_ID,
                clientSecret:process.env.GOOGLE_CLEINT_SECRET,
            })
        ],
        async session({session}){

        },
        async signIn({proifle}){
            try{
                await connectToDB()
                //check if user alredy created

                //if not create new user
            } 
            catch(error){

            }

        }
    }
)

export {handler as GET, handler as POST}