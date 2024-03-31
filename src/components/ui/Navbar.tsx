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
import { IconPlus } from "@tabler/icons-react"
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
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="h-14">
                        <IconPlus />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-50">
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
                    <Link href="/profile" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <NavAvatar />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
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
                        "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
