"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const status = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status.status === "authenticated") {
      alert("You are already logged in");
    }
  }, [status.status, router]);

  return (
    <div>
      <div>
        <div onClick={() => signIn("google")}>Sign in with Google </div>
        <div onClick={() => signOut}>Sign Out </div>
      </div>
    </div>
  );
};

export default Login;
