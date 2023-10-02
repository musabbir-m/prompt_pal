import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import User from '@models/user'
import { connectToDB } from "@utils/database";
import Profile from "@components/Profile";


const handler= NextAuth(
    {  
        providers: [
            GoogleProvider({
                clientId:process.env.GOOGLE_ID,
                clientSecret:process.env.GOOGLE_CLEINT_SECRET,
            })
        ],
        
        //tracking user session
        async session({session}){
         const sessionUser= await User.findOne({
            email:session.user.email
         })

         session.user.id= sessionUser._id.toString();
         return session;
        },

        async signIn({profile}){
            try{
                await connectToDB()
                //check if user alredy created
                const userExists= await User.findOne({
                    email: profile.email
                })
                //if not create new user
                if(!userExists) {
                    await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture 

                    })
                }
            } 
            catch(error){

            }

        }
    }
)

export {handler as GET, handler as POST}