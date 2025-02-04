"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <section className="w-full bg-ring/75 tablet:bg-ring/100 relative flex items-center justify-center  overflow-hidden min-h-[calc(100svh-5rem)]">
      <div className="tablet:max-w-6xl flex w-full items-center">
        <div className="px-10 gap-2 py-5 mx-auto flex flex-col items-center justify-center h-full flex-1 text-background capitalize font-bold">
          {/* Title */}
          <p className="text-4xl tablet:text-6xl border-b-2 border-dashed pb-2 text-center tablet:text-end">
            O <span className="text-yellow-500">melhor</span> café da nossa{" "}
            <span className="text-yellow-500">região</span>
          </p>

          <p className="text-xl tablet:text-4xl text-center tablet:text-end">
            Do <span className="text-yellow-500">cotidiano</span> ao{" "}
            <span className="text-yellow-500">100%</span> arábico
          </p>

          <p className="font-normal  normal-case text-justify tablet:text-end">
            Desde 1962 unindo qualidade e produção, entregando produtos que
            figuram entre os melhores do interior de São Paulo.
          </p>

          <div className="mt-4 flex justify-center tablet:justify-end gap-5 w-full">
            <Link href="/blog">
              <Button className="bg-yellow-500 hover:bg-yellow-600 hover:text-ring min-w-32">
                Notícias
              </Button>
            </Link>

            <Button
              variant="outline"
              className="text-ring font-semibold min-w-32"
            >
              Loja
            </Button>
          </div>
        </div>

        {/* video mobile */}

        <video
          autoPlay
          loop
          muted
          className="absolute tablet:hidden  -z-10 w-auto min-w-full min-h-full max-w-none"
          height={1990}
          width={1080}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* video desktop */}

        <div className="flex-1 min-h-[calc(100svh-5rem)] relative w-full hidden tablet:block ">
          <p className="absolute text-center mx-auto bottom-5 font-light z-50 text-background w-full">
            Conheça nossa produção em Jales-SP
          </p>

          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover z-10 top-0 left-0 rounded-tl-2xl"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* gradient*/}

          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-ring to-transparent h-full w-full z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
