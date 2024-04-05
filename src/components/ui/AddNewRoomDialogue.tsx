import { Button } from "@/components/ui/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/label"
import { DialogProps } from "@radix-ui/react-dialog"
import { JSX, useState } from "react"
import { LabelInputContainer } from "./Lable"
import { BottomGradient } from "./BottomGradient"

export function AddNewRoom(props: JSX.IntrinsicAttributes & DialogProps) {
  interface IClassData {
    name: string;
    semester: string;
    session: string;
    teacher: string;
  }

  const [classData, setClassData] = useState<IClassData>({
    name: "",
    semester: "",
    session: "",
    teacher: "",
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A new Classroom</DialogTitle>
          <DialogDescription>
            Create a new room using following details. And Click on Create.
          </DialogDescription>
        </DialogHeader>
        {Object.keys(classData).map(key => (
          <LabelInputContainer>
            <Label htmlFor={key}>{key.replace(key[0], key[0].toUpperCase())}</Label>
            <Input
              id={key}
              placeholder={`Enter ${key}`}
              type="text"
              value={classData[key as keyof IClassData]}
              onChange={handleChange}
            />
          </LabelInputContainer>
        ))}
        <DialogFooter>
          <Button
            type="submit"
            variant="default"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Create
            <BottomGradient />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
