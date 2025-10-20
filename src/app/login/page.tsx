"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState, ChangeEvent } from "react";


type Login = {
  email: string; 
  password: string; 
};

export default function Email() {
  const [getLogins, setGetLogins] = useState<Login[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const createLoginData = async () => {
    if (!newEmail.trim() || !newPassword.trim()) {
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
        alert("your login information was added successfully")
    
      } else {
        alert("Fialed to add your login information")
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };
  const loginChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
    setNewPassword(e.target.value);
  };
    useEffect(() => {
      createLoginData();
    }, []);
  return (
   
    <div className="flex ml-250 mt-20 justify-between w-screen h-600 pl-60">
       
       <div className="mt-50 flex flex-col gap-4">
        <div className="font-semibold text-1xl">Create your account</div>
        <div className="font text-1xl">Sign up to explore your favourite dishes</div>
        <Input className="border rounded-md border-gray-400" onChange={loginChangeHandler} placeholder="enter your password"></Input>
        <Input className="border rounded-md border-gray-400" onChange={loginChangeHandler} placeholder="enter your email address"></Input>
        <Button className="mt-5 ml-20" onClick={createLoginData}>
                  Let's go
        </Button>
       </div>

       <img src="Delivery.png" alt="Edit" className="w-160 h-160" />

    </div>
  );
}