"use client";
import React from "react";

import {
  IconBrandGoogle,
  IconEye, 
  IconEyeClosed,

} from "@tabler/icons-react";
import { Label, LabelInputContainer } from "@/components/ui/Lable";
import { Input } from "@/components/ui/Input";
import { BottomGradient } from "@/components/ui/BottomGradient";
import Link from "next/link";
import { ReloadIcon } from "@radix-ui/react-icons";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      setIsLoading(true);
      try {
        // Make API request or perform form submission
        console.log("Form submitted");
        setIsLoading(false);
      } catch (error) {
        setError("An error occurred. Please try again later.");
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md w-full mx-auto z-40 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome Back to Classroom
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="youraddress@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <div className="flex-1 flex items-center justify-between ">
            <Input
              id="password"
              placeholder="••••••••"
              type={visible ? "text" : "password"}
              value={password}
              className="w-[376px]"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="ml-2 focus:outline-none w-[100px] relative z-20 right-[40px]"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <IconEyeClosed className="h-5 w-5 text-gray-400" />
              ) : (
                <IconEye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <Link href="forgot" className="z-20 self-end cursor-pointer">
            <h4 className="text-[13px]">Forgot password?</h4>
          </Link>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>
              Loading...
            </div>
          ) : (
            "Log in →"
          )}
          <BottomGradient />
        </button>
        <div className="p-[10px] relative justify-center">
          <Link href="signup" className="z-20 self-center cursor-pointer">
            <h4 className="text-[13px] text-center">Didn&apos;t have any accout? Create one.</h4>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm