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

export function JoinNewRoom(props: JSX.IntrinsicAttributes & DialogProps) {
  interface IJoinClass {
    roomId:string
  }

  const [classData, setClassData] = useState<IJoinClass>({
    roomId:""
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
          <DialogTitle>Join A new Classroom</DialogTitle>
          <DialogDescription>
            Enter your roomId. And Click on join.
          </DialogDescription>
        </DialogHeader>
          <LabelInputContainer>
            <Label htmlFor="roomId">RoomId</Label>
            <Input
              id="roomId"
              placeholder={`Enter roomId`}
              type="text"
              value={classData["roomId"]}
              onChange={handleChange}
            />
          </LabelInputContainer>
        <DialogFooter>
          <Button
            type="submit"
            variant="default"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Join
            <BottomGradient />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
