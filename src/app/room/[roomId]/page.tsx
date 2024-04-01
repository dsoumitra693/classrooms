import { useMemo } from 'react';
import { classes } from "../../../../data/rooms"

interface PageProps {
  params: {
    roomId: string;
  };
}

function Page({ params }: PageProps): JSX.Element {
  const { roomId } = params;

  const classObj = useMemo(() => classes.find((cls) => cls.id === roomId), [roomId]);

  if (!classObj) {
    return (
      <main className="w-full flex justify-center items-stretch p-5 flex-col">
        <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0">
          Class Not Found
        </h2>
        <div className="max-w-6xl mx-auto px-8">
          <p>The class you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  const { title, description } = classObj;

  return (
    <main className="w-full flex justify-center items-stretch p-5 flex-col">
      <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0">
        {title}
        <p className="text-sm text-muted-foreground">{description}</p>
      </h2>
      <section className="max-w-6xl mx-auto px-8">hello</section>
    </main>
  );
}

export default Page