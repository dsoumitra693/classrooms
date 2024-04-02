"use client"

import * as React from "react"
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
import { NavAvatar } from "./Nav-avatar"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Create a new classroom",
        href: "/room/new/create",
        description: ""
    },
    {
        title: "Join a new classroom",
        href: "/room/new/join",
        description: ""
    },
]

export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

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
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-14">
                            <IconPlus />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] flex-col gap-3 p-2">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component?.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
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
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component?.description}
                                    </ListItem>
                                ))}
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
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
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


