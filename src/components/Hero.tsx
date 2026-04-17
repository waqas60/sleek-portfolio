import Image from "next/image";
import Socials from "./Social";

export default function Hero() {
  return (
    <main className="mb-20">
      <div className="flex items-center gap-6">
        <Image
          alt="waqas"
          src={"/assets/logo.jpg"}
          width={70}
          height={70}
          className="pointer-events-none rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] select-none"
        />

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Muhammad Waqas</h1>
            <p className="w-fit rounded-full border border-dashed border-neutral-400 p-1 text-[9px]">
              FullStack Developer
            </p>
          </div>
          <p className="mt-1 w-full max-w-[80%] text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            Love to build cool stuff
          </p>
        </div>
      </div>

      
      <Socials />
    </main>
  );
}
