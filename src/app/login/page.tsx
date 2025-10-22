"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { useEffect, useState, ChangeEvent } from "react";

type Login = {
  email: string;
  password: string;
};

type category = {
  email: string; // MongoDB ID from backend
  password: string; // name of category
};

export default function Login() {
  const [loginData, setLoginData] = useState<Login[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userData, setUserData] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (localStorage) {
      const loggedInEmail = localStorage.getItem("userEmail");
      if (loggedInEmail) {
        // router.push("/");
      }
    }
  }, [localStorage]);

  const createLogin = async () => {
    if (!newEmail.trim() || !newPassword.trim()) {
      alert("please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail, password: newPassword }),
      });

      if (response.ok) {
        setNewEmail("");
        setNewPassword("");
        alert("you logged in successfully");
        router.push("/");
      } else {
        alert("Login failed");
        localStorage.setItem("userEmail", newEmail);
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
    setNewPassword(e.target.value);
  };
  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
    setNewPassword(e.target.value);
  };

  return (
    <div className="flex ml-20 mt-20 justify-between w-screen h-600 pl-60 pr-100">
      <div className="mt-50 flex flex-col gap-4">
        <div className="font-semibold text-1xl">Create your account</div>
        <div className="font text-1xl">
          Sign up to explore your favourite dishes
        </div>
        <Input
          className="border rounded-md border-gray-400"
          onChange={emailChangeHandler}
          placeholder="enter your email"
        ></Input>
        <Input
          className="border rounded-md border-gray-400"
          onChange={passwordChangeHandler}
          placeholder="enter your password"
        ></Input>
        <div className="flex items-center justify-center">
          <div className="font text-1xl">Already have an account?</div>
        </div>

        <Button className="mt-5 ml-20" onClick={createLogin}>
          Let's go
        </Button>
      </div>

      <img src="Delivery.png" alt="Edit" className="w-160 h-160" />
    </div>
  );
}
