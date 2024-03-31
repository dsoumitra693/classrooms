import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";


export function NavAvatar() {
  return (
    <div className="flex gap-5 items-center">
      <Avatar >
        <AvatarImage src="https://github.com/shadcn.png" alt="Soumitra" />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <div className="">
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
          Soumitra Das
        </h4>
        <p className="text-sm text-muted-foreground">
          11000223043
        </p>
      </div>
    </div>
  )
}
