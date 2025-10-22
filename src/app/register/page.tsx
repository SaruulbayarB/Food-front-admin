"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState, ChangeEvent } from "react";

type Login = {
  email: string;
  password: string;
};

export default function Register() {
  const [step, setStep] = useState<number>(1);
  const [getLogins, setGetLogins] = useState<Login[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  console.log({ error });

  const createLoginData = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
    }
    if (!newEmail.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      alert("please enter email and password");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail, password: newPassword }),
      });

      if (response.ok) {
        setNewEmail("");
        setNewPassword("");
        alert("your login information was added successfully");
      } else {
        alert("Fialed to add your login information");
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  return (
    <div className="flex ml-20 mt-20 justify-between w-screen h-600 pl-60 pr-100">
      {step == 1 && (
        <div className="flex gap-150 mt-20">
          <div className="mt-50 flex flex-col gap-4">
            <div className="font-semibold text-1xl">Create your account</div>
            <div className="font text-1xl">
              Sign up to explore your favourite dishes
            </div>
            <div>
              <Input
                className="border rounded-md border-gray-400"
                value={newEmail}
                onChange={emailChangeHandler}
                placeholder="enter your email address"
              ></Input>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="flex items-center justify-center mt-[-8]">
              <div className="font text-1xl">Already have an account?</div>
              <Button
                className="mt-5 ml-20 bg-indigo-400"
                onClick={createLoginData}
              >
                Login
              </Button>
            </div>
            <Button
              className="mt-3 ml-1"
              onClick={() => {
                if (!newEmail.trim()) {
                  alert("Please enter your email before continuing.");
                  return;
                }
                setStep(2);
              }}
            >
              Let's go
            </Button>
          </div>
          <img src="Delivery.png" alt="Edit" className="w-160 h-160" />
        </div>
      )}

      {step == 2 && (
        <div className="flex gap-150 mt-20">
          <div className="mt-50 flex flex-col gap-4">
            <div className="font-semibold text-1xl">Create strong password</div>
            <div className="font text-1xl">
              Create a strong password with letters, numbers.
            </div>
            <div className="flex flex-col gap-3">
              <Input
                className="border rounded-md border-gray-400"
                onChange={passwordChangeHandler}
                placeholder="enter your password"
              ></Input>
              <Input
                className="border rounded-md border-gray-400"
                onChange={confirmPasswordChangeHandler}
                placeholder="confirm password"
              ></Input>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex items-center justify-center mt-[-8]">
              <div className="font text-1xl">Already have an account?</div>
              <Button className="mt-5 ml-20 bg-indigo-400">Login</Button>
            </div>
            <div className="flex justify-evenly items-center">
              <Button className="mt-3 ml-1" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button className="mt-5 ml-20" onClick={createLoginData}>
                Lets's go
              </Button>
            </div>
          </div>
          <img src="Delivery.png" alt="Edit" className="w-160 h-160" />
        </div>
      )}
    </div>
  );
}
