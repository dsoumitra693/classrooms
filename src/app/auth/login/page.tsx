"use client";
import React, { useState } from "react";

import {
  IconBrandGoogle,
  IconEye,
  IconEyeClosed,

} from "@tabler/icons-react";
import { Label, LabelInputContainer } from "@/components/ui/Lable";
import { Input } from "@/components/ui/Input";
import { BottomGradient } from "@/components/ui/BottomGradient";
import Link from "next/link";
import PasswordInput from "@/components/ui/PasswordInput";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("")

  React.useEffect(() => {
    validateForm() ? setError("") : null
  }, [formData])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log("Form submitted", formData);
    } else {
      setError("Please fill in all required fields.");
    }
  };

  const validateForm = () => {
    // Perform form validation logic here
    // Return true if the form is valid, otherwise return false
    return (
      formData.email &&
      formData.password
    );
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Classroom
      </h2>

      <form className="py-2" onSubmit={handleSubmit}>
        {error && <div className="text-red-500">{error}</div>}

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="youraddress@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <PasswordInput
            value={formData.password}
            handleChange={handleChange} />
          <Link href="forgot" className="z-20 self-end cursor-pointer">
            <h4 className="text-[13px]">Forgot password?</h4>
          </Link>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>
        <div className="p-[10px] relative justify-center">
          <Link href="signup" className="z-20 self-center cursor-pointer">
            <h4 className="text-[13px] text-center">Didn&apos;t have any accout? Create one.</h4>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

export default LoginForm