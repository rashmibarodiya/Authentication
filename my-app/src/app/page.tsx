"use client";

import { Button, Typography } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";
import Providers from "./components/Providers"
import Signup from "./components/Signup"

export default function Home() {
  const { data: session } = useSession();
  console.error(session);
  return (
    <Providers>
    <Signup/>
      {/* {children} */}
   </Providers>
  );
}
