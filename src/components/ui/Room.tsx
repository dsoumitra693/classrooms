"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const HoverCard = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    teacherName: string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="rounded-2xl h-[200px] w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <CardHeader>
              <CardTitle className="text-zinc-100 font-bold tracking-wide px-1s">
                {item.title}
              </CardTitle>
              <CardDescription className="text-zinc-400 tracking-wide leading-relaxed text-sm">
                {item.description}
              </CardDescription>
              <CardDescription className="text-zinc-400 tracking-wide leading-relaxed text-sm">
                {item.teacherName}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};