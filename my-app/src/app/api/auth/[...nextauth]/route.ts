import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
 import CredentialsProvider from "next-auth/providers/credentials"; // Commented out since it's not used
import { NextResponse } from "next/server";

// console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
// console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
// console.log("nextAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

// Define your User type if needed
interface User {
  id: string;
  email: string;
  name?: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
   
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize function called"); 

        if (!credentials) {
          console.log("No credentials provided"); 
          return null; 
        }

        const { username, password } = credentials;
        console.log("Credentials received:", { username, password });

        console.log("Authentication successful"); 
        return { id: "1", email: username };
        // } else {
        //   console.log("Authentication failed"); // Log failed authentication
        //   return null; // Return null if authentication fails
        // }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) { // parameter object can be removed signIn()
      console.log("Sign In callback called");
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback called");
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("Session callback called");
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT callback called");
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET ?? "", 
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});

export { handler as GET, handler as POST };
