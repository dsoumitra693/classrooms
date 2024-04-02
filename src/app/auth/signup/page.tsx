"use client";
import React, { useState } from "react";

import {
  IconBrandGoogle, IconEye, IconEyeClosed,
} from "@tabler/icons-react";
import { Label, LabelInputContainer } from "@/components/ui/Lable";
import { Input } from "@/components/ui/Input";
import { BottomGradient } from "@/components/ui/BottomGradient";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BgGlow } from "@/components/ui/BgGlow";
import PasswordInput from "@/components/ui/PasswordInput";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    universityRoll: "",
    stream: "",
    email: "",
    password: "",
    reenterPassword: "",
  });

  const [visible, setVisible] = React.useState(false);
  const [error, setError] = useState("");

  React.useEffect(() => {
    validateForm() ? setError("") : null
    console.log(formData)
  }, [formData])

  const handleChange = (e: { target: { id: string; value: string } }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      formData.name &&
      formData.universityRoll &&
      formData.stream &&
      formData.email &&
      formData.password &&
      (formData.password === formData.reenterPassword)
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
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Soumitra Das"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="universityRoll">University Roll</Label>
            <Input
              id="universityRoll"
              placeholder="11000XXXXXX"
              type="text"
              value={formData.universityRoll}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="stream">Stream</Label>
            <BgGlow>
              <Select onValueChange={(value) => handleChange({ target: { id: "stream", value } })}>
                <SelectTrigger className="w-full md:w-[130px] h-[2.625rem] bg-white">
                  <SelectValue placeholder="Select Stream" className="placeholder:text-neutral-400 dark:placeholder-text-neutral-600" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup>
                    <SelectItem value="APM">Apereal Product Mangement</SelectItem>
                    <SelectItem value="CSE">Computer Science & Engineering</SelectItem>
                    <SelectItem value="IT">Information Technology</SelectItem>
                    <SelectItem value="TT">Textile Technology</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </BgGlow>
          </LabelInputContainer>
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
          <Label htmlFor="password">Password</Label>
          <PasswordInput handleChange={handleChange} value={formData.password} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="reenterPassword">Re-enter password</Label>
          <PasswordInput
            value={formData.reenterPassword}
            handleChange={handleChange}
            id="reenterPassword" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}


export default SignupForm