"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import RootLayout from "@/app/layout";
import Link from "next/link";
import { CodeSection } from "react-code-section-lib";

export default function Skull() {
  const handleOpen = () => {};

  const latexCitation = `
  @inproceedings{10.1145/3581783.3612708,
    author = {Martin, Alexander and Zheng, Haitian and An, Jie and Luo, Jiebo},
    title = {Jurassic World Remake: Bringing Ancient Fossils Back to Life via Zero-Shot Long Image-to-Image Translation},
    year = {2023},
    isbn = {9798400701085},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3581783.3612708},
    doi = {10.1145/3581783.3612708},
    booktitle = {Proceedings of the 31st ACM International Conference on Multimedia},
    pages = {9320–9328},
    numpages = {9},
    keywords = {stable diffusion, large domain gap, image-to-image translation},
    location = {Ottawa ON, Canada},
    series = {MM '23}
  }`;

  return (
    <RootLayout showNavBar={false}>
      {/* Your page content goes here */}
      <main className="flex min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 border-[] border-slate-300 rounded-lg">
        <section id="projectIntro" className="flex flex-col items-center">
          <div
            id="titleContainer"
            className="flex flex-col items-center space-y-[8px] mt-[20px]"
          >
            <h1 className="font-semibold text-2xl text-center">
              Jurassic World Remake: Bringing Ancient Fossils Back to Life via
              Zero-Shot Long Image-to-Image Translation
            </h1>
            <p className="font-semibold">
              <a href="https://alexmartin1722.github.io/">Alexander Martin</a>,{" "}
              <a href="https://www.cs.rochester.edu/u/hzheng15/haitian_homepage/index.html">
                Haitian Zheng
              </a>
              , <a href="https://www.cs.rochester.edu/u/jan6/">Jie An</a>,{" "}
              <a href="https://www.cs.rochester.edu/u/jluo/">Jiebo Luo</a>
            </p>
            <p className="font-semibold">
              University of Rochester, Department of Computer Science
            </p>{" "}
            <div id="links" className="flex flex-row text-lg space-x-[10px]">
              <Link
                href="https://dl.acm.org/doi/10.1145/3581783.3612708"
                className="text-blue-500 underline underline-offset-2 italic hover:text-blue-800 dark:hover:text-blue-300"
              >
                Paper
              </Link>
              <Link
                href="https://github.com/alexmartin1722/Revive-2I"
                className="text-blue-500 underline underline-offset-2 italic hover:text-blue-800 dark:hover:text-blue-300"
              >
                Code
              </Link>
              <Link
                href="https://forms.gle/7fcQHBAtZa3toMPn8"
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
              <Image
                src="/fossil2dino_web.png"
                height={500}
                width={500}
                alt=""
              />
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.3 }}>
            <Image src="/handImage.jpg" height={300} width={300} alt="" />
          </motion.div> */}
          </div>

          {/* <p id="description" className="mt-[40px] mb-[40px] mx-[13px]">
            The official webpage for 
          </p> */}

          {/* <Image
            src="/skull2animal_dataset_web.png"
            height={300}
            width={300}
            alt=""
            className=""
          /> */}
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="abstract" className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-[8px]">
            <h1 className="font-semibold text-xl">Abstract</h1>
            <p id="description" className="mt-[40px] mb-[40px] mx-[13px]">
              With a strong understanding of the target domain from natural
              language, we produce promising results in translating across large
              domain gaps and bringing skeletons back to life. In this work, we
              use text-guided latent diffusion models for zero-shot
              image-to-image translation (I2I) across large domain gaps
              (longI2I), where large amounts of new visual features and new
              geometry need to be generated to enter the target domain. Being
              able to perform translations across large domain gaps has a wide
              variety of real-world applications in criminology, astrology,
              environmental conservation, and paleontology. In this work, we
              introduce a new task Skull2Animal for translating between skulls
              and living animals. On this task, we find that unguided Generative
              Adversarial Networks (GANs) are not capable of translating across
              large domain gaps. Instead of these traditional I2I methods, we
              explore the use of guided diffusion and image editing models and
              provide a new benchmark model, Revive-2I, capable of performing
              zero-shot I2I via text-prompting latent diffusion models. We find
              that guidance is necessary for longI2I because, to bridge the
              large domain gap, prior knowledge about the target domain is
              needed. In addition, we find that prompting provides the best and
              most scalable information about the target domain as
              classifier-guided diffusion models require retraining for specific
              use cases and lack stronger constraints on the target domain
              because of the wide variety of images they are trained on.
            </p>
          </div>
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="dataset" className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-[10px] mb-[10px]">
            <h1 className="font-semibold text-xl">Dataset</h1>
            <p id="description" className=" mx-[13px]">
              The dataset consists of skulls and their corresponding living
              animals.
            </p>
          </div>
          <Image
            src="/skull2animal_dataset_web.png"
            height={500}
            width={500}
            alt=""
            className=""
          />
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="method" className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-[10px] mb-[20px]">
            <h1 className="font-semibold text-xl">Method</h1>
            <Image
              src="/method_web.png"
              height={500}
              width={500}
              alt=""
              className=""
            />
            <p id="description" className=" mx-[13px]">
              The method uses a text-guided latent diffusion model. The source
              image is noised through the forward process in partial steps.
              These partials help retain the structure of the source image while
              allowing for the generation of new features. Then the partially
              noised latent is combined with the text embedding to produce a new
              latent in the target domain, which is then denoised in the reverse
              process.
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
            <Image
              src="/skull2dog_results_web.png"
              height={1000}
              width={1000}
              alt=""
            />
            {/* <Image src="/handImage.jpg" height={300} width={300} alt="" /> */}
          </div>

          <div
            id="resultTableImageContainer"
            className="mt-[30px] flex flex-row space-x-[10px]"
          >
            <Image src="/results_tab_web.png" height={500} width={500} alt="" />
            {/* <Image src="/handImage.jpg" height={300} width={300} alt="" /> */}
          </div>
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="citation" className="flex flex-col items-center">
          <h1 className="font-semibold text-xl">Citation</h1>
          <CodeSection theme="dark" lang="">
            {latexCitation}
          </CodeSection>
        </section>

        <hr className="border-2 my-[30px]" />

        <section id="methods"> </section>

        <section
          id="easteregg"
          className="flex flex-col items-center mb-[40px]"
        >
          <Image src="/alexEasterEgg.jpg" height={300} width={300} alt="" />
          <caption className="caption-bottom text-sm">
            The author&#39;s first ever Image-to-Image translation. It&#39;s a
            t-rex femur!
          </caption>
        </section>
      </main>
    </RootLayout>
  );
}
