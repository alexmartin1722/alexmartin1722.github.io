"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import RootLayout from "@/app/layout";
import Link from "next/link";

export default function Skull() {
  const handleOpen = () => {};

  return (
    <>
      <RootLayout showNavBar={false}>
        {/* Your page content goes here */}
      </RootLayout>
      <main className="flex min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 border-[1px] border-slate-300 rounded-lg h-[600px] overflow-scroll">
        <section id="projectIntro" className="flex flex-col items-center">
          <div
            id="titleContainer"
            className="flex flex-col items-center space-y-[8px] mt-[20px]"
          >
            <h1 className="font-semibold text-2xl"> Project name </h1>
            <p className="font-semibold"> Chris Chen, Jiebo, Alex, ...</p>
            <p className="font-semibold"> University of Rochester</p>{" "}
            <div id="links" className="flex flex-row text-lg space-x-[10px]">
              <Link
                href=""
                className="text-blue-500 underline underline-offset-2 italic hover:text-blue-800 dark:hover:text-blue-300"
              >
                Paper
              </Link>
              <Link
                href=""
                className="text-blue-500 underline underline-offset-2 italic hover:text-blue-800 dark:hover:text-blue-300"
              >
                Code
              </Link>
              <Link
                href=""
                className="text-blue-500 underline underline-offset-2 italic hover:text-blue-800 dark:hover:text-blue-300"
              >
                Dataset
              </Link>
            </div>
          </div>

          <div
            id="introImagesContainer"
            className="mt-[30px] flex flex-row space-x-[10px]"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <Image src="/handImage.jpg" height={300} width={300} alt="" />
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.3 }}>
            <Image src="/handImage.jpg" height={300} width={300} alt="" />
          </motion.div> */}
          </div>

          <p id="description" className="mt-[40px] mb-[40px] mx-[13px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate
          </p>

          <Image
            src="/dinoDummy.jpeg"
            height={300}
            width={300}
            alt=""
            className=""
          />
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="abstract" className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-[8px]">
            <h1 className="font-semibold text-xl">Abstract</h1>
            <p id="description" className="mt-[40px] mb-[40px] mx-[13px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </p>
          </div>
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="results" className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-[8px]">
            <h1 className="font-semibold text-xl">Results</h1>
          </div>
          <div
            id="resultImageContainer"
            className="mt-[30px] flex flex-row space-x-[10px]"
          >
            <Image src="/handImage.jpg" height={300} width={300} alt="" />
            {/* <Image src="/handImage.jpg" height={300} width={300} alt="" /> */}
          </div>
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="methods"> </section>

        <section
          id="easteregg"
          className="flex flex-col items-center mb-[40px]"
        >
          <Image src="/alexEasterEgg.jpg" height={300} width={300} alt="" />
          <caption className="caption-bottom text-sm">
            The author’s first ever Image-to-Image translation
          </caption>
        </section>
      </main>
    </>
  );
}
