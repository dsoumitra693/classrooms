import { HoverCard } from "@/components/ui/Room";
import { projects } from "../../data/rooms";

export default function Home() {
  return (
    <>
      <nav className="">
        <h2 className="scroll-m-20 p-[1.6rem] pb-2 text-xl font-semibold first:mt-0">
          GCETTS's Classrooms
        </h2>
      </nav>
      <main className="w-full flex justify-center items-stretch p-5 flex-col">
        <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0">
          Your rooms
        </h2>
        <div className="max-w-6xl mx-auto px-8">
          <HoverCard items={projects} />
        </div>
      </main>
    </>
  );
}
