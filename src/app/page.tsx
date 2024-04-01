import { HoverCard } from "@/components/ui/Room";
import { classes } from "../../data/rooms";

export default function Home() {
  return (
    <>
      <main className="w-full flex justify-center items-stretch p-5 flex-col">
        <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0">
          Your classes
        </h2>
        <div className="max-w-6xl mx-auto px-8">
          <HoverCard items={classes} />
        </div>
      </main>
    </>
  );
}
