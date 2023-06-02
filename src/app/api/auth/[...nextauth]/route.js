import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials){
        try {

          await connect();

          const user = await User.findOne({email: credentials.email});

          if(user){
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if(isPasswordCorrect){
              return user;
            }else{
              throw new Error("Wrong credentials");
            }
            
          }else{
            throw new Error("User not found");
          }

        }catch (error) {
          throw new Error(err);
        }
      }
    })
  ],
  pages: {
    error: "/dasboard/login"
  }
})

export {handler as GET, handler as POST};