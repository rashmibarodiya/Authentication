import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

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
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize function called"); // Log function call

        if (!credentials) {
          console.log("No credentials provided"); // Log if no credentials
          return null; // Return null if no credentials
        }

        const { username, password } = credentials;
        console.log("Credentials received:", { username, password });

        // Example logic (replace with your actual authentication)
        // Replace with real user authentication logic
      //  if (username === "testuser" && password === "testpass") {
          console.log("Authentication successful"); // Log successful authentication
          return { id: "1", email: "testuser@example.com" }; // Example user object
        // } else {
        //   console.log("Authentication failed"); // Log failed authentication
        //   return null; // Return null if authentication fails
        // }
      },
    }),
  ],
//   secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in your .env file
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
});

export { handler as GET, handler as POST };
