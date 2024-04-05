"use client"

import { useEffect, useState ,forwardRef} from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { IconBaselineDensityMedium, IconPlus } from "@tabler/icons-react"
import { NavAvatar } from "@/components/ui/Nav-avatar"
import { AddNewRoom } from "@/components/ui/AddNewRoomDialogue"
import { JoinNewRoom } from "@/components/ui/JoinNewRoomDialogue"



export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(1)
    const [isDialogOpen, setIsDialogOpen] = useState([false, false]);

    // Function to open the Dialog
    const openDialog = (idx: number) => setIsDialogOpen([idx == 0, idx == 1]);

    // Function to close the Dialog
    const closeDialog = (idx: number) => setIsDialogOpen(prev=>[prev[1-idx], !prev[idx]]);

    const components: { title: string; description: string, onClick: () => void }[] = [
        {
            title: "Create a new classroom",
            description: "",
            onClick: () => { },
        },
        {
            title: "Join a new classroom",
            description: "",
            onClick: () => { }
        },
    ]

    useEffect(() => {
        console.log(isDialogOpen)
    }, [isDialogOpen])



    return (
        <nav>
            <div className="cursor-pointer text-black hover:opacity-[0.1] dark:text-white z-40">
                <Link href="/" legacyBehavior passHref>
                    <h2 className="scroll-m-20 p-[1.6rem] pb-2 text-xl font-semibold first:mt-0 ">
                        GCETTS&apos;s Classrooms
                    </h2>
                </Link>
            </div>
            <NavigationMenu className="z-30">
                <NavigationMenuList className="hidden sm:flex">
                    {isLoggedIn ? <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-14">
                            <IconPlus />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] flex-col gap-3 p-2">
                                {components.map((component, idx) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        onClick={() => openDialog(idx)}
                                    >
                                        {component?.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem> : null}
                    <NavigationMenuItem>
                        <Link href={isLoggedIn ? "/profile" : "/auth/login"} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {isLoggedIn ? <NavAvatar /> : (
                                    <div className='h-[40px] flex justify-center items-center'>
                                        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
                                            Login/SignUp
                                        </h4>
                                    </div>)}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuList className="flex sm:hidden">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-14">
                            <IconBaselineDensityMedium />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="right-40">
                            <ul className="grid w-[200px] flex-col gap-3 p-2">
                                {isLoggedIn ? components.map((component, idx) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        onClick={() => openDialog(idx)}
                                    >
                                        {component?.description}
                                    </ListItem>
                                )) : null}
                                <ListItem href={isLoggedIn ? "/profile" : "/auth/login"}>
                                    {isLoggedIn ? <NavAvatar /> : (
                                        <div className='h-[40px] flex justify-center items-center'>
                                            <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
                                                Login/SignUp
                                            </h4>
                                        </div>)}
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                        <AddNewRoom open={isDialogOpen[0]} onOpenChange={() => closeDialog(0)} />
                        <JoinNewRoom open={isDialogOpen[1]} onOpenChange={() => closeDialog(1)} />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

const ListItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {typeof children == typeof "" ? (
                        <>
                            <div className="text-sm font-medium leading-none">{title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {children}
                            </p>
                        </>
                    ) : children}
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


