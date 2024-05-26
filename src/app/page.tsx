import React from "react";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex relative h-full flex-col items-center bg-slate-950 justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"></div>
      <div className="space-y-6 z-10 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service.</p>
        <div>
          <LoginButton asChild>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
