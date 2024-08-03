"use client";

import { Button, Typography } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Signup() {
  const { data: session } = useSession();
  console.error("signup " +session);
  return (
    <div style={{ height: 60, background: "white", padding: 10 }}>
      {session ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" style={{ color: "black" }}>
            {session.user?.email}
          </Typography>
          <div>
            <Button variant="contained" onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" style={{ color: "black" }}>
            Coursera
          </Typography>
          <div>
            <Button variant="contained" onClick={() => signIn()}>
              Sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
