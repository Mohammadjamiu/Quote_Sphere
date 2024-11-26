import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "NextJS",
    img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },

  {
    name: "TailwindCSS",
    img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    name: "Redis",
    img: "https://www.svgrepo.com/show/354272/redis.svg",
  },
  {
    name: "Typescript",
    img: "https://www.svgrepo.com/show/349540/typescript.svg",
  },
  {
    name: "Vercel",
    img: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
  },
  {
    name: "NextJS",
    img: "https://www.svgrepo.com/show/369457/nextjs.svg",
  },

  {
    name: "TailwindCSS",
    img: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "Redis",
    img: "https://www.svgrepo.com/show/354272/redis.svg",
  },
  {
    name: "Typescript",
    img: "https://www.svgrepo.com/show/349540/typescript.svg",
  },
  {
    name: "Vercel",
    img: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-2 mb-4 flex items-center justify-start ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-lg ml-2 p-[1px]"
          width="30"
          height="30"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
