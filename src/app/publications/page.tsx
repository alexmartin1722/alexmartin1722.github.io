"use client";
import ReadMoreComponent from "@/components/readmore";

export default function Publications() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      <h1 className="text-2xl mb-[15px] font-semibold"> Publications </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            December 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Event-Keyed Summarization
          </h3>
          {}
          <ReadMoreComponent>
           We introduce event-keyed summarization, a novel summarization task that marries traditional summarization
           and document-level event extraction (EE), with the goal of generating a contextualized, abstractive summary
            for a specific event described in a document, given the document text and an event structure 
            extracted from the document. We introduce a dataset for this task, MUCSUM, consisting of summaries 
            of all annotated events in the classic MUC dataset. We present a series of baselines on the task, 
            comprising both standard pretrained LMs common in the summarization literature (BART, PEGASUS, T5), 
            as well as larger frontier models (ChatGPT, GPT-4). Additionally, we present ablations to show that 
            alternative task formulations yield inferior summaries of the target events. Finally, we present a 
            human evaluation of reference and model outputs, as well as an evaluation that draws on standard 
            metrics in document-level EE but that is novel in a summarization context.
          </ReadMoreComponent>
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Paper
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            FAMuS: Frames Across Multiple Sources
          </h3>
          {}
          <ReadMoreComponent>
            Understanding event descriptions is a central aspect of 
            language processing, but current approaches focus overwhelmingly
            on single sentences or documents.Aggregating information about 
            an event across documents can offer a much richer understanding. 
            To this end, we present FAMuS, a new corpus of Wikipedia passages 
            that report on some event, paired with underlying, genre-diverse 
            (non-Wikipedia) source articles for the same event. Events and 
            (cross-sentence) arguments in both report and source are annotated 
            against FrameNet, providing broad coverage of different event types. 
            We present results on two key event understanding tasks enabled by FAMuS: 
            source validation---determining whether a document is a valid source for a 
            target report event---and cross-document argument extraction---full-document
             argument extraction for a target event from both its report and the 
             correct source article. We release both FAMuS and our models to support 
             further research.
          </ReadMoreComponent>
          <a
            href="https://arxiv.org/abs/2311.05601"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Paper
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            October 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Jurassic World Remake: Bringing Ancient Fossils Back to Life via
            Zero-Shot Long Image-to-Image Translation
          </h3>
          {}
          <ReadMoreComponent>
            With a strong understanding of the target domain from natural
            language, we produce promising results in translating across large
            domain gaps and bringing skeletons back to life. In this work, we
            use text-guided latent diffusion models for zero-shot image-to-image
            translation (I2I) across large domain gaps (longI2I), where large
            amounts of new visual features and new geometry need to be generated
            to enter the target domain. Being able to perform translations
            across large domain gaps has a wide variety of real-world
            applications in criminology, astrology, environmental conservation,
            and paleontology. In this work, we introduce a new task Skull2Animal
            for translating between skulls and living animals. On this task, we
            find that unguided Generative Adversarial Networks (GANs) are not
            capable of translating across large domain gaps. Instead of these
            traditional I2I methods, we explore the use of guided diffusion and
            image editing models and provide a new benchmark model, Revive-2I,
            capable of performing zero-shot I2I via text-prompting latent
            diffusion models. We find that guidance is necessary for longI2I
            because, to bridge the large domain gap, prior knowledge about the
            target domain is needed. In addition, we find that prompting
            provides the best and most scalable information about the target
            domain as classifier-guided diffusion models require retraining for
            specific use cases and lack stronger constraints on the target
            domain because of the wide variety of images they are trained on.
          </ReadMoreComponent>
          <a
            href="./projects/skull2animal"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Paper
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            MegaWika: Millions of reports and their sources across 50 diverse
            languages
          </h3>
          <ReadMoreComponent>
            To foster the development of new models for collaborative
            AI-assisted report generation, we introduce MegaWika, consisting of
            13 million Wikipedia articles in 50 diverse languages, along with
            their 71 million referenced source materials. We process this
            dataset for a myriad of applications, going beyond the initial
            Wikipedia citation extraction and web scraping of content, including
            translating non-English articles for cross-lingual applications and
            providing FrameNet parses for automated semantic analysis. MegaWika
            is the largest resource for sentence-level report generation and the
            only report generation dataset that is multilingual. We manually
            analyze the quality of this resource through a semantically
            stratified sample. Finally, we provide baseline results and trained
            models for crucial steps in automated report generation:
            cross-lingual question answering and citation retrieval.
          </ReadMoreComponent>
          <a
            href="https://arxiv.org/abs/2307.07049"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Paper
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            A New Interpretation of Relative Importance on An Analysis of Per
            and Polyfluorinated Alkyl Substances (PFAS) Exposures on Bone
            Mineral Density
          </h3>
          {}
          <ReadMoreComponent>
            The relative contribution of environmental contaminants is an
            important, and frequently unanswered, question in human or
            ecological risk assessments. This interpretation of relative
            importance allows determination of the overall effect of a set of
            variables relative to other variables on an adverse health outcome.
            There are no underlying assumptions of independence of variables.
            The tool developed and used here is specifically designed for
            studying the effects of mixtures of chemicals on a particular
            function of the human body. Methods: We apply the approach to
            estimate the contributions of total exposure to six PFAS
            (perfluorodecanoic acid, perfluorohexane sulfonic acid,
            2-(N-methyl-PFOSA) acetate, perfluorononanoic acid,
            perfluoroundecanoic acid and perfluoroundecanoic acid) to loss of
            bone mineral density relative to other factors related to risk of
            osteoporosis and bone fracture, using data from subjects who
            participated in the US National Health Examination and Nutrition
            Surveys (NHANES) of 2013-2014. Results: PFAS exposures contribute to
            bone mineral density changes relative to the following variables:
            age, weight, height, vitamin D2 and D3, gender, race, sex hormone
            binding globulin, testosterone, and estradiol. Conclusion: We note
            significant alterations to bone mineral density among more highly
            exposed adults and significant differences in effects between men
            and women.
          </ReadMoreComponent>
          <a
            href="https://doi.org/10.3390/ijerph20054539"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Paper
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      </ol>
    </main>
  );
}
